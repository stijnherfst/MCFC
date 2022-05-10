import { Timer, TimerDialog } from "w3ts"

let startTrigger: trigger
let endTrigger: trigger

function start() {
    if (!IsHeroUnitId(GetUnitTypeId(GetTriggerUnit()))) {
        return
    }
    
    CreateQuestBJ(bj_QUESTTYPE_OPT_DISCOVERED, "Help Satan's Helper",
    `Satans helper needs some bacon, find him some and return it for a reward.`
        , "ReplaceableTextures/CommandButtons/BTNPig.blp")

    DisableTrigger(startTrigger)
    DisplayTimedTextToForce(GetPlayersAll(), 25, "Satans Helper: Hey can u help me out i need to get some bacon for my master but they move fast and then disapear! how will i ever get any bacon?")
}

function baconSpawn() {
    let bacon = CreateUnitAtLoc(Player(bj_PLAYER_NEUTRAL_VICTIM), FourCC("n01S"), GetRectCenter(gg_rct_Bacon_Spawn), bj_UNIT_FACING)
    IssuePointOrderLoc(bacon, "move", GetRectCenter(gg_rct_Bacon_move))
}

function baconMove() {
    if (GetUnitTypeId(GetTriggerUnit()) != FourCC("n01S")) {
        return;
    }

    IssuePointOrderLoc(GetTriggerUnit(), "move", GetRectCenter(gg_rct_Bacon_Remove))
}

function baconRemove() {
    if (GetUnitTypeId(GetTriggerUnit()) != FourCC("n01S")) {
        return;
    }

    RemoveUnit(GetTriggerUnit())
}

function baconDies() {
    if (GetUnitTypeId(GetTriggerUnit()) != FourCC("n01S") || GetUnitTypeId(GetKillingUnit()) == FourCC("n01R")) {
        return;
    }

    let random = GetRandomReal(0.0, 100.0)
    if (random < 5) {
        CreateItem(FourCC("I050"), GetUnitX(GetDyingUnit()), GetUnitY(GetDyingUnit()))
    }
}

function end() {
    if (!UnitHasItemOfTypeBJ(GetTriggerUnit(), FourCC("I050"))) {
        return
    }
    
    RemoveItem(GetItemOfTypeFromUnitBJ(GetTriggerUnit(), FourCC("I050")))
    DisplayTimedTextToForce(GetPlayersAll(), 10, "Thanks for the bacon here this is for you...")
    CreateItem(FourCC("I052"), GetUnitX(GetTriggerUnit()), GetUnitY(GetTriggerUnit()))
}

export function initSatansHelper() {
    startTrigger = CreateTrigger()
    TriggerRegisterEnterRectSimple(startTrigger, gg_rct_Satans_helper)
    TriggerAddAction(startTrigger, () => start())

    let baconSpawnTrigger = CreateTrigger()
    TriggerRegisterTimerEventPeriodic(baconSpawnTrigger, 6)
    TriggerAddAction(baconSpawnTrigger, () => baconSpawn())

    let baconMoveTrigger = CreateTrigger()
    TriggerRegisterEnterRectSimple(baconMoveTrigger, gg_rct_Bacon_move)
    TriggerAddAction(baconMoveTrigger, () => baconMove())

    let baconRemoveTrigger = CreateTrigger()
    TriggerRegisterEnterRectSimple(baconRemoveTrigger, gg_rct_Bacon_Remove)
    TriggerAddAction(baconRemoveTrigger, () => baconRemove())

    let baconDiesTrigger = CreateTrigger()
	TriggerRegisterPlayerUnitEvent(baconDiesTrigger, Player(bj_PLAYER_NEUTRAL_VICTIM), EVENT_PLAYER_UNIT_DEATH, null);
    TriggerAddAction(baconDiesTrigger, () => baconDies())

    let endTrigger = CreateTrigger()
    TriggerRegisterEnterRectSimple(endTrigger, gg_rct_Satans_helper)
    TriggerAddAction(endTrigger, () => end())
}