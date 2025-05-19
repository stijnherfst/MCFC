function startLochNess() {
    ForGroupBJ(GetUnitsOfTypeIdAll(FourCC('n01U')), () => IssuePointOrderLocBJ(GetEnumUnit(), "attack", GetRectCenter(gg_rct_lock_ness_2)))
}

function checkpoint1() {
    if (GetUnitTypeId(GetTriggerUnit()) != FourCC('n01U')) {
        return
    }

    IssuePointOrderLocBJ(GetTriggerUnit(), "attack", GetRectCenter(gg_rct_lock_ness_2))
}

function checkpoint2() {
    if (GetUnitTypeId(GetTriggerUnit()) != FourCC('n01U')) {
        return
    }

    IssuePointOrderLocBJ(GetTriggerUnit(), "attack", GetRectCenter(gg_rct_lock_ness_3))
}

function checkpoint3() {
    if (GetUnitTypeId(GetTriggerUnit()) != FourCC('n01U')) {
        return
    }

    IssuePointOrderLocBJ(GetTriggerUnit(), "attack", GetRectCenter(gg_rct_lock_ness_4))
}

function checkpoint4() {
    if (GetUnitTypeId(GetTriggerUnit()) != FourCC('n01U')) {
        return
    }

    IssuePointOrderLocBJ(GetTriggerUnit(), "attack", GetRectCenter(gg_rct_lock_ness_5))
}

function checkpoint5() {
    if (GetUnitTypeId(GetTriggerUnit()) != FourCC('n01U')) {
        return
    }

    IssuePointOrderLocBJ(GetTriggerUnit(), "attack", GetRectCenter(gg_rct_lock_ness_1))
}

export function initLochNess() {
    let startTrigger = CreateTrigger()
    TriggerRegisterTimerEventSingle(startTrigger, 5)
    TriggerAddAction(startTrigger, () => startLochNess())

    let checkpoint1Trigger = CreateTrigger()
    TriggerRegisterEnterRectSimple(checkpoint1Trigger, gg_rct_lock_ness_1)
    TriggerAddAction(checkpoint1Trigger, () => checkpoint1())

    let checkpoint2Trigger = CreateTrigger()
    TriggerRegisterEnterRectSimple(checkpoint2Trigger, gg_rct_lock_ness_2)
    TriggerAddAction(checkpoint2Trigger, () => checkpoint2())

    let checkpoint3Trigger = CreateTrigger()
    TriggerRegisterEnterRectSimple(checkpoint3Trigger, gg_rct_lock_ness_3)
    TriggerAddAction(checkpoint3Trigger, () => checkpoint3())

    let checkpoint4Trigger = CreateTrigger()
    TriggerRegisterEnterRectSimple(checkpoint4Trigger, gg_rct_lock_ness_4)
    TriggerAddAction(checkpoint4Trigger, () => checkpoint4())

    let checkpoint5Trigger = CreateTrigger()
    TriggerRegisterEnterRectSimple(checkpoint5Trigger, gg_rct_lock_ness_5)
    TriggerAddAction(checkpoint5Trigger, () => checkpoint5())
}