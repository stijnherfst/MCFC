function ripTideMage() {
    if (!IsUnitType(GetTriggerUnit(), UNIT_TYPE_HERO)) {
        return
    }

    CreateQuestBJ(bj_QUESTTYPE_OPT_DISCOVERED, "TRIGSTR_1774", "TRIGSTR_1775", "ReplaceableTextures\\CommandButtons\\BTNCrushingWave.blp")
    DisableTrigger(GetTriggeringTrigger())
    CinematicModeBJ(true, GetPlayersAll())
    ForForce(GetPlayersAll(), () => CameraSetupApplyForPlayer(true, gg_cam_Rip_Tide_cam, GetEnumPlayer(), 1.00))
    TriggerSleepAction( 1.00 )
    ForForce(GetPlayersAll(), () => PanCameraToTimedLocForPlayer(GetEnumPlayer(), GetRectCenter(gg_rct_Rip_Tide_bad_guy), 8.00))
    TransmissionFromUnitWithNameBJ( GetPlayersAll(), gg_unit_h00W_0243, "TRIGSTR_1776", null, "TRIGSTR_1777", bj_TIMETYPE_ADD, 10.00, false)
    TriggerSleepAction(9.00 )
    ForForce(GetPlayersAll(), () => ResetToGameCameraForPlayer(GetEnumPlayer(), 0))
    CinematicModeBJ(false, GetPlayersAll())
}

export function initRipTideMage() {
    let enterTrigger = CreateTrigger()
    TriggerRegisterEnterRectSimple(enterTrigger, gg_rct_Rip_Tide_Mage)
    TriggerAddAction(enterTrigger, () => ripTideMage())
}