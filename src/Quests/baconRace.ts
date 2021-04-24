import { Timer, TimerDialog } from "w3ts"

let startTrigger: trigger
let checkpoint1Trigger: trigger
let checkpoint2Trigger: trigger
let winTrigger: trigger
let timer: Timer
let dialog: TimerDialog

function start() {
    if (GetUnitTypeId(GetTriggerUnit()) != FourCC("H027")) {
        return
    }

    timer = new Timer()
    dialog = new TimerDialog(timer)
    dialog.display = true
    timer.start(240, false, () => {
        dialog.destroy()
        timer.destroy()
        DisableTrigger(checkpoint1Trigger)
        DisableTrigger(checkpoint2Trigger)
        DisableTrigger(winTrigger)
        DisplayTimedTextToForce(GetPlayersAll(), 30, "Sorry porker you were 2 slow to win this bacon race better luck next time")
    })
    
    DisplayTimedTextToForce(GetPlayersAll(), 10, "Bacon Jokey: think you got what it takes to become prime speed bacon material? well race to the top of the vampire world and then to koronas grave then back here in under 4 minutes and i'll train you! ready GO!")
    
    DisableTrigger(startTrigger)
    EnableTrigger(checkpoint1Trigger)
}

function checkpoint1() {
    if (GetUnitTypeId(GetTriggerUnit()) != FourCC("H027")) {
        return
    }

    DisableTrigger(checkpoint1Trigger)
    EnableTrigger(checkpoint2Trigger)
    DisplayTimedTextToForce(GetPlayersAll(), 10, "Great now haul ass over to casper")
}

function checkpoint2() {
    if (GetUnitTypeId(GetTriggerUnit()) != FourCC("H027")) {
        return
    }

    DisableTrigger(checkpoint1Trigger)
    EnableTrigger(winTrigger)
    DisplayTimedTextToForce(GetPlayersAll(), 10, "Now run back to the bacon jokey GOGOGOGO!!!")
}

function win() {
    if (GetUnitTypeId(GetTriggerUnit()) != FourCC("H027")) {
        return
    }

    dialog.destroy()
    timer.destroy()
    DisableTrigger(winTrigger)
    EnableTrigger(startTrigger)
    DisplayTimedTextToForce(GetPlayersAll(), 10, "Very nice! you won with time to spare your a bacon champ! now take these wings and go challenge the Big Bad Bacon Boss!")
    CreateUnitAtLoc(Player(11), FourCC("n029"), GetRectCenter(gg_rct_Bacon_Boss), bj_UNIT_FACING)

    CreateQuestBJ(bj_QUESTTYPE_OPT_DISCOVERED, "TRIGSTR_5845", "TRIGSTR_5846", "ReplaceableTextures\\CommandButtons\\BTNPig.blp")
    CreateItemLoc(FourCC("I05K"), GetUnitLoc(GetTriggerUnit()))
}

function baconKilled() {
    if (GetUnitTypeId(GetDyingUnit()) != FourCC("n029")) {
        return
    }

    DisplayTimedTextToForce(GetPlayersAll(), 10, "The Bacon Boss has been defeated! All players gain 5000 exp and 500 gold")

    ForForce(GetPlayersAll(), () => AdjustPlayerStateBJ(500, GetEnumPlayer(), PLAYER_STATE_RESOURCE_GOLD))
    ForGroup(GetUnitsInRectMatching(GetPlayableMapRect(), Condition(() => IsUnitType(GetFilterUnit(), UNIT_TYPE_HERO))), () => AddHeroXP(GetEnumUnit(), 5000, true))
}

export function initBacon() {
    startTrigger = CreateTrigger()
    TriggerRegisterEnterRectSimple(startTrigger, gg_rct_Bacon_Jokey)
    TriggerAddAction(startTrigger, () => start())

    let checkpoint1Trigger = CreateTrigger()
    TriggerRegisterEnterRectSimple(checkpoint1Trigger, gg_rct_Top_of_the_world)
    TriggerAddAction(checkpoint1Trigger, () => checkpoint1())

    let checkpoint2Trigger = CreateTrigger()
    TriggerRegisterEnterRectSimple(checkpoint2Trigger, gg_rct_koronas_grave)
    TriggerAddAction(checkpoint2Trigger, () => checkpoint2())

    winTrigger = CreateTrigger()
    TriggerRegisterEnterRectSimple(winTrigger, gg_rct_Bacon_Jokey)
    TriggerAddAction(winTrigger, () => win())

    let trigger = CreateTrigger()
    TriggerRegisterPlayerUnitEvent(trigger, Player(11), EVENT_PLAYER_UNIT_DEATH, null)
    TriggerAddAction(trigger, () => baconKilled())
}