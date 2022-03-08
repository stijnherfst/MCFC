function lavaHot() {
    if (!IsUnitType(GetTriggerUnit(), UNIT_TYPE_HERO)
        || GetOwningPlayer(GetTriggerUnit()) == Player(10)
        || GetOwningPlayer(GetTriggerUnit()) == Player(11)) {
            
        return
    }

    ExplodeUnitBJ( GetTriggerUnit() )
}

export function initLavaHot() {
    let trigger = CreateTrigger()
    TriggerRegisterEnterRectSimple(trigger, gg_rct_Lava_1)
    TriggerRegisterEnterRectSimple(trigger, gg_rct_Lava_2)
    TriggerRegisterEnterRectSimple(trigger, gg_rct_Lava_3)
    TriggerAddAction(trigger, () => lavaHot())
}