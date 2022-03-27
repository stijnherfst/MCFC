function johnsText() {
    if (GetOwningPlayer(GetTriggerUnit()) == Player(PLAYER_NEUTRAL_PASSIVE)) {
        return
    }
    CreateTextTagUnitBJ( "You can farm up to 5 levels here hope you like chicken", gg_unit_h010_0257, 0, 10, 100, 100, 100, 0 )
    DisableTrigger( GetTriggeringTrigger() )
}

function chickenReturn() {
    if (GetUnitTypeId(GetEnteringUnit()) != FourCC('n01O')) {
        return
    }

    SetUnitPositionLoc( GetEnteringUnit(), GetRectCenter(gg_rct_chicken_zone) )
}

function chickenDies() {
    if (GetUnitTypeId(GetDyingUnit()) != FourCC('n01O')) {
        return
    }

    if (GetUnitLevel(GetKillingUnitBJ()) <= 5) {
        AddHeroXPSwapped( 30, GetKillingUnitBJ(), false )
    }

    PolledWait( 15.00 )
    CreateNUnitsAtLoc( 1, FourCC('n01O'), Player(PLAYER_NEUTRAL_PASSIVE), GetRectCenter(gg_rct_chicken_zone), bj_UNIT_FACING )
}

function initChickens() {
    let trigger = CreateTrigger()
    TriggerRegisterEnterRectSimple( trigger, gg_rct_chicken_return )
    TriggerAddAction( trigger, () => johnsText )

    let chickenReturnTrigger = CreateTrigger(  )
    TriggerRegisterEnterRectSimple( chickenReturnTrigger, gg_rct_chicken_return )
    TriggerAddAction( chickenReturnTrigger, () => chickenReturn() )

    let chickenDiesTrigger = CreateTrigger(  )
    TriggerRegisterAnyUnitEventBJ( chickenDiesTrigger, EVENT_PLAYER_UNIT_DEATH )
    TriggerAddAction( chickenDiesTrigger, () => chickenDies() )

}