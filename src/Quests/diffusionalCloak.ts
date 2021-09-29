function diffusionalCloak() {
    if (!IsUnitType(GetTriggerUnit(), UNIT_TYPE_HERO)) {
        return
    }

    CreateQuestBJ(bj_QUESTTYPE_OPT_DISCOVERED, "Diffusional Monster", "your first real boss to defeat is the diffusional monster its hiding in the whirlpool by the crusty crabs beware it has 50% evasion and divine armor", "ReplaceableTextures\\CommandButtons\\BTNCloakOfFlames.blp")
    DisableTrigger(GetTriggeringTrigger())
    DisplayTimedTextToForce(GetPlayersAll(), 30.00, "Shadow Hunter: hiding inside a whirl pool is a diffusional monster defeating it was no easy task but i found this cool cloak off it")
}

export function initGoldShroom() {
    let enterTrigger = CreateTrigger()
    TriggerRegisterEnterRectSimple(enterTrigger, gg_rct_shadow_hunter)
    TriggerAddAction(enterTrigger, () => diffusionalCloak())
}