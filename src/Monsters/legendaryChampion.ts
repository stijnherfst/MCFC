function spawnLegendaryChampion() {
    if (GetUnitTypeId(GetDyingUnit()) != FourCC('n03X')) {
        return
    }
    PlaySoundBJ(gg_snd_mortal_kombat2)
    CreateNUnitsAtLoc(1, FourCC('N03Z'), Player(11), GetRectCenter(gg_rct_legendaryfighterspawn), 360.00)
    DisplayTimedTextToForce(GetPlayersAll(), 40.00, "TRIGSTR_4536")
    UnitAddItemById(GetLastCreatedUnit(), FourCC('I09R'))
    UnitAddItemById(GetLastCreatedUnit(), FourCC('I09Q'))
    UnitAddItemById(GetLastCreatedUnit(), FourCC('I09S'))
    UnitAddItemById(GetLastCreatedUnit(), FourCC('I09W'))
    UnitAddItemById(GetLastCreatedUnit(), FourCC('I09V'))
    UnitAddItemById(GetLastCreatedUnit(), FourCC('I09U'))
    SetItemDroppableBJ(UnitItemInSlotBJ(GetLastCreatedUnit(), 1), false)
    SetItemDroppableBJ(UnitItemInSlotBJ(GetLastCreatedUnit(), 2), false)
    SetItemDroppableBJ(UnitItemInSlotBJ(GetLastCreatedUnit(), 3), false)
    SetItemDroppableBJ(UnitItemInSlotBJ(GetLastCreatedUnit(), 4), false)
    SetItemDroppableBJ(UnitItemInSlotBJ(GetLastCreatedUnit(), 5), false)
    SetItemDroppableBJ(UnitItemInSlotBJ(GetLastCreatedUnit(), 6), false)
    DisableTrigger(GetTriggeringTrigger())
}

function showText() {
    if (GetOwningPlayer(GetTriggerUnit()) == Player(PLAYER_NEUTRAL_PASSIVE)) {
        return
    }

    CreateTextTagUnitBJ("Kill Amon, and a new Legendary Champion will spawn", gg_unit_h037_0158, 0, 10, 100, 100, 100, 0)
    DisableTrigger(GetTriggeringTrigger())
}

export function initLegendaryChampion() {
    let trigger = CreateTrigger()
    TriggerRegisterAnyUnitEventBJ(trigger, EVENT_PLAYER_UNIT_DEATH)
    TriggerAddAction(trigger, () => spawnLegendaryChampion())

    let showTextTrigger = CreateTrigger()
    TriggerRegisterEnterRectSimple(showTextTrigger, gg_rct_legendary_key_spawn)
    TriggerAddAction(showTextTrigger, () => showText())
}