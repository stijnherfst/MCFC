function barrier() {
    if (GetUnitAbilityLevel(GetTriggerUnit(), FourCC('Srwo')) == 0) {
        return
    }

    BlzSetEventDamage(math.max(GetEventDamage() - 25, 0))    
    // if (BlzGetEventIsAttack()) {
    //     if (IsUnitType(GetAttacker(), UNIT_TYPE_MELEE_ATTACKER)) {
            
    //     } else { // ranged
            
    //     }
    // } else {
    //     // ability OR triggered damage?
    // }
}

export function initBarrier() {
    let trigger = CreateTrigger()
    TriggerRegisterAnyUnitEventBJ( trigger, EVENT_PLAYER_UNIT_DAMAGED)
    TriggerAddAction( trigger, () => barrier())
}