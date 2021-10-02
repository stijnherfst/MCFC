function riftZone() {
    if (GetOwningPlayer(GetTriggerUnit()) == Player(11)) {
        return
    }

    CreateQuestBJ(bj_QUESTTYPE_OPT_DISCOVERED, "Rift Monster", "Find the rift monster near the giant chasm (its invisible)", "ReplaceableTextures\\CommandButtons\\BTNForgottenOne.blp" )
    DisableTrigger(GetTriggeringTrigger())
    CinematicModeBJ(true, GetPlayersAll())
    ForForce(GetPlayersAll(), () => CameraSetupApplyForPlayer(true, gg_cam_Rift, GetEnumPlayer(), 1.00))
    TransmissionFromUnitWithNameBJ( GetPlayersAll(), gg_unit_h00Z_0256, "Chris", null, "I found some shrooms once when I was hanging out here... then when I woke up I had this cool staff", bj_TIMETYPE_ADD, 10.00, false)
    TriggerSleepAction(2.00)
    ForForce(GetPlayersAll(), () => CameraSetupApplyForPlayer(true, gg_cam_Rift_2, GetEnumPlayer(), 8.00))
    TriggerSleepAction( 8.00 )
    ForForce(GetPlayersAll(), () => ResetToGameCameraForPlayer(GetEnumPlayer(), 0))
    CinematicModeBJ(false, GetPlayersAll())
}

function monsterDies() {
    if (GetDyingUnit() != gg_unit_h00X_0185) {
        return
    }

    UnitAddItemById(GetKillingUnit(), FourCC('I03Y'))

}

export function initRiftZone() {
    let enterTrigger = CreateTrigger()
    TriggerRegisterEnterRectSimple(enterTrigger, gg_rct_Rift_region)
    TriggerAddAction(enterTrigger, () => riftZone())

    let dies = CreateTrigger(  )
    TriggerRegisterAnyUnitEventBJ( dies, EVENT_PLAYER_UNIT_DEATH )
    TriggerAddAction( dies, () => monsterDies() )
}