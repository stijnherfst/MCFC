import { Group } from "w3ts"

class KillQuest {
    monsterID: number
    amount: number
    xp: number
    item: number
    startText : string
    endText: string
}

let currentKillQuest = -1
let currentKillQuestKills = 0

let killQuestCountTrigger : trigger

enum State {
    None,
    Started,
    Done
}

let state = State.None

const killQuests: KillQuest[] = [
    { 
        monsterID: FourCC('n000'),
        amount: 25,
        xp: 1500,
        item: 0,
        startText: "Looks like you need a lot of work before you become a master go kill 25 basic elementals and I'll help you train",
        endText: "Good job on killing 25 basic elementals you're ready to begin training\nAll players gain 1500 exp!"
    },
    { 
        monsterID: FourCC('n00L'),
        amount: 30,
        xp: 2500,
        item: 0,
        startText: "Theres way to many toxic spiders in the forest go kill 30 of them and I'll help you train",
        endText: "Good job on killing 30 toxic spiders you're ready to begin training"
    },
    { 
        monsterID: FourCC('n00A'),
        amount: 35,
        xp: 6000,
        item: FourCC('I01T'),
        startText: "To the far west theres a large swarm of lava runners they can be very dangerous since they run fast so be careful while your slaying 35 of them",
        endText: "Great Job on killing 35 lava runners all players gain 6000 exp and an exp booster"
    },
    { 
        monsterID: FourCC('n007'),
        amount: 25,
        xp: 10000,
        item: 0,
        startText: "Fisherman have been attacked by Wet Currents below the Elven encampment. Kill 25 of them and I will increase your strength.",
        endText: "Great Job on killing 25 Wet Currents. Feel the power in your body"
    },
    { 
        monsterID: FourCC('n043'),
        amount: 30,
        xp: 15000,
        item: 0,
        startText: "Just a top of those dirty grass loving hippies there is a nest of Furbolgs. Watch out they are nasty little bunch, they dig straight into your behind if you don't watch out. Kill 30 of them and ill give you something nice.",
        endText: "Great Job on killing 30 Furbolg Diggers. I will help you train your body"
    },
]

function killQuestStart() {
    if (GetOwningPlayer(GetTriggerUnit()) == Player(11)) {
        return
    }

    if (state == State.Done) {
        if (currentKillQuestKills >= killQuests[currentKillQuest].amount) {
            DisplayTimedTextToForce( GetPlayersAll(), 10.00, killQuests[currentKillQuest].endText)
            currentKillQuestKills = 0

            let g = GetUnitsInRectMatching(GetPlayableMapRect(), Condition(() => IsUnitType(GetFilterUnit(), UNIT_TYPE_HERO)))
            ForGroup(g, () => AddHeroXP(GetEnumUnit(), killQuests[currentKillQuest].xp, true))

            if (killQuests[currentKillQuest].item != 0) {
                ForGroup(g, () => UnitAddItemById(GetEnumUnit(), killQuests[currentKillQuest].item) )
            }

            state = State.None
        }
    }

    if (state == State.None) {
        if (currentKillQuest < killQuests.length) {
            currentKillQuest++
            EnableTrigger(killQuestCountTrigger)
            DisplayTimedTextToForce(GetPlayersAll(), 25.00, killQuests[currentKillQuest].startText)
            state = State.Started
        }
    }
}

function killQuestCount() {
    if (GetUnitTypeId(GetTriggerUnit()) != killQuests[currentKillQuest].monsterID) {
        return
    }

    currentKillQuestKills++
    DisplayTimedTextToForce(GetPlayersAll(), 2.00, I2S(currentKillQuestKills) + " " + GetUnitName(GetTriggerUnit()) + "s have been killed")

    if (currentKillQuestKills >= killQuests[currentKillQuest].amount) {
        state = State.Done
        DisplayTimedTextToForce(GetPlayersAll(), 2.00, "You have killed enough " + GetUnitName(GetTriggerUnit()) + "s, come back to receive your training!")
        DisableTrigger(killQuestCountTrigger)
    }
}

export function initKillQuests() {
    let startTrigger = CreateTrigger()
    TriggerRegisterEnterRectSimple(startTrigger, gg_rct_Monster_Hunter)
    TriggerAddAction(startTrigger, () => killQuestStart())

    killQuestCountTrigger = CreateTrigger()
    DisableTrigger(killQuestCountTrigger)
    TriggerRegisterAnyUnitEventBJ( killQuestCountTrigger, EVENT_PLAYER_UNIT_DEATH)
    TriggerAddAction( killQuestCountTrigger, () => killQuestCount())
}