function ripTideMage() {
    if (!IsUnitType(GetTriggerUnit(), UNIT_TYPE_HERO)) {
        return
    }

    CreateQuestBJ(bj_QUESTTYPE_OPT_DISCOVERED, "Rip Tide Mage", "An evil Rip Tide caster stole the rip tide stone return it to its rightful owners and the Rip Tide Master has offered to teach u the spell Rip Tide", "ReplaceableTextures\\CommandButtons\\BTNCrushingWave.blp")
    DisableTrigger(GetTriggeringTrigger())
    CinematicModeBJ(true, GetPlayersAll())
    ForForce(GetPlayersAll(), () => CameraSetupApplyForPlayer(true, gg_cam_Rip_Tide_cam, GetEnumPlayer(), 1.00))
    TriggerSleepAction( 1.00 )
    ForForce(GetPlayersAll(), () => PanCameraToTimedLocForPlayer(GetEnumPlayer(), GetRectCenter(gg_rct_Rip_Tide_bad_guy), 8.00))
    TransmissionFromUnitWithNameBJ( GetPlayersAll(), gg_unit_h00W_0243, "Rip Tide shore mage", null, "A thief stole my rip tide stone! he took it to the giant waterfall, bring me back that stone and i'll teach u the spell Rip Tide", bj_TIMETYPE_ADD, 10.00, false)
    TriggerSleepAction(9.00 )
    ForForce(GetPlayersAll(), () => ResetToGameCameraForPlayer(GetEnumPlayer(), 0))
    CinematicModeBJ(false, GetPlayersAll())
}

function ripTideMageReturn() {
    if (!IsItemOwned(GetItemOfTypeFromUnitBJ(GetTriggerUnit(), FourCC('I03X')))) {
        return
    }

    RemoveItem(GetItemOfTypeFromUnitBJ(GetTriggerUnit(), FourCC('I03X')))
    UnitAddItemByIdSwapped(FourCC('I01X'), GetTriggerUnit())
}

export function initRipTideMage() {
    let enterTrigger = CreateTrigger()
    TriggerRegisterEnterRectSimple(enterTrigger, gg_rct_Rip_Tide_Mage)
    TriggerAddAction(enterTrigger, () => ripTideMage())

    let enterTrigger2 = CreateTrigger()
    TriggerRegisterEnterRectSimple(enterTrigger2, gg_rct_Rip_Tide_Mage)
    TriggerAddAction(enterTrigger2, () => ripTideMageReturn())
}