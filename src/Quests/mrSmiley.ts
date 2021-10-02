function mrSmiley() {
    if (!IsUnitType(GetTriggerUnit(), UNIT_TYPE_HERO)) {
        return
    }
    CreateQuestBJ(bj_QUESTTYPE_OPT_DISCOVERED, "Ancient Seal", "During the elemental war a secret set was discovered once fully collected a false god appeared and started killing people! an ancient seal was constructed in order to imprison this false god", "ReplaceableTextures\\CommandButtons\\BTNSpiritOfVengeance.blp" )
    DisableTrigger(GetTriggeringTrigger() )
    DisplayTimedTextToForce(GetPlayersAll(), 35.00, "Korona was one scary bitch but we finally captured her and imprisoned her inside this ancient seal i'm keeping gaurd i dont wanna have to fight her again so i hid all the secret seals so the lock will never be broken" )
}

function initMrSmiley() {
    let trigger = CreateTrigger()
    TriggerRegisterEnterRectSimple(trigger, gg_rct_Korona)
    TriggerAddAction(trigger, () => mrSmiley())
}