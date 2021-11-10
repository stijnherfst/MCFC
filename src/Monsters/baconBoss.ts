function killAttacker() {
    if (GetUnitTypeId(GetAttackedUnitBJ()) != FourCC('n029')) { // Big Bad Bacon Boss
        return
    }

    if (GetUnitTypeId(GetAttacker()) == FourCC('H02B')) {
        return
    }

    DisplayTimedTextToForce(GetPlayersAll(), 15.00, "Only Flying Bacon can challenge the Big Bad Bacon Boss")
    KillUnit(GetAttacker())
}

function killSpellcaster() {
    if (GetUnitTypeId(GetSpellTargetUnit()) != FourCC('n029')) { // Big Bad Bacon Boss
        return
    }

    if (GetUnitTypeId(GetAttacker()) == FourCC('h00N')) { // Lit Skin
        return
    }

    if (GetUnitTypeId(GetSpellAbilityUnit()) == FourCC('H02B')) { // Flying Bacon
        return
    }

    KillUnit( GetSpellAbilityUnit() )
}

function initBaconBoss() {
    let trigger = CreateTrigger()
    TriggerRegisterAnyUnitEventBJ(trigger, EVENT_PLAYER_UNIT_ATTACKED)
    TriggerAddAction(trigger, () => killAttacker())

    let killCasterTrigger = CreateTrigger()
    TriggerRegisterAnyUnitEventBJ( killCasterTrigger, EVENT_PLAYER_UNIT_SPELL_CAST )
    TriggerAddAction( killCasterTrigger, () => killSpellcaster() )
}