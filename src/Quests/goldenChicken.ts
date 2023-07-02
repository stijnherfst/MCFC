function goldenChicken() {
    if (!IsUnitType(GetTriggerUnit(), UNIT_TYPE_HERO)) {
        return
    }

    CreateQuestBJ( bj_QUESTTYPE_OPT_DISCOVERED, "Golden Chicken", "Farmer John wants you to catch the golden chicken he said he found it in his farm but now he can't find it", "ReplaceableTextures\\CommandButtons\\BTNCritterChicken.blp" )
    DisableTrigger( GetTriggeringTrigger() )
    DisplayTimedTextToForce( GetPlayersAll(), 25.00, "Farmer John: I was trippin balls of some shrooms yesterday and i saw this gold chicken in my farm! when my trip wore off i couldn't find it anymore" )
}

function goldenChickenDies() {
    if (GetUnitTypeId(GetDyingUnit()) != FourCC('n01P')) {
        return
    }

    DisplayTextToForce( GetPlayersAll(), "The gold chicken has been killed! all players gain +1 level" )
    ForGroupBJ( GetUnitsInRectMatching(GetPlayableMapRect(), Condition(() => IsUnitType(GetFilterUnit(), UNIT_TYPE_HERO))), () => SetHeroLevelBJ( GetEnumUnit(), ( GetHeroLevel(GetEnumUnit()) + 1 ), false ))
}

function goldChickenReturn() {
    if (GetUnitTypeId(GetEnteringUnit()) != FourCC('n01P')) {
        return
    }

    SetUnitPositionLoc( GetEnteringUnit(), GetRectCenter(gg_rct_chicken_zone) )
}

function deathChicken() {
    if (GetUnitTypeId(GetDyingUnit()) != FourCC('n01P')) {
        return
    }

    CreateNUnitsAtLoc( 1, FourCC('n01Q'), Player(11), GetRectCenter(gg_rct_chicken_zone), bj_UNIT_FACING )
}

export function initGoldenChicken() {
    let enters = CreateTrigger(  )
    TriggerRegisterEnterRectSimple( enters, gg_rct_chicken_return )
    TriggerAddAction( enters, () => goldenChicken() )

    let goldChickenDies = CreateTrigger()
    TriggerRegisterAnyUnitEventBJ( goldChickenDies, EVENT_PLAYER_UNIT_DEATH )
    TriggerAddAction( goldChickenDies, () => goldenChickenDies())

    let chickenReturnTrigger = CreateTrigger(  )
    TriggerRegisterEnterRectSimple( chickenReturnTrigger, gg_rct_chicken_return )
    TriggerAddAction( chickenReturnTrigger, () => goldChickenReturn() )

    let deathChickenTrigger = CreateTrigger(  )
    TriggerRegisterAnyUnitEventBJ( deathChickenTrigger, EVENT_PLAYER_UNIT_DEATH )
    TriggerAddAction( deathChickenTrigger, () => deathChicken() )
}