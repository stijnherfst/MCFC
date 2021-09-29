let enterTrigger : trigger

function playCinematic() {
    if (GetOwningPlayer(GetTriggerUnit()) == Player(11)) {
        return
    }
    DisableTrigger(enterTrigger)

    let quest = CreateQuest()
    QuestSetRequired(quest, false)
    QuestSetEnabled(quest, true)
    QuestSetTitle(quest, "Gold Shroom")
    QuestSetDescription(quest, "Get the gold shroom then search the hippy cavern and find the X-hippy some magic mushrooms (gold shrooms let you see invis)")
    QuestSetIconPath(quest, "ReplaceableTextures/CommandButtons/BTNSpellShieldAmulet.blp")
    
    CinematicModeBJ(true, GetPlayersAll());
    ForForce( GetPlayersAll(), () => CameraSetupApplyForPlayer( true, gg_cam_Shroom_Cam, GetEnumPlayer(), 1.00 ) )
    TransmissionFromUnitWithNameBJ( GetPlayersAll(), gg_unit_h00Q_0271, "X-Hippy", null, "I always used to love hanging around the giant gold shroom its on a far away island only hippys hang out around it though. If you feel like unlocking your mind go there you can find all sorts of intresting things w/ gold shrooms", bj_TIMETYPE_ADD, 12.00, false )
    TriggerSleepAction( 5.00 )
    ForForce( GetPlayersAll(), () => CameraSetupApplyForPlayer( true, gg_cam_Shroom_cam_2, GetEnumPlayer(), 5.00 ) )
    TriggerSleepAction( 5.00 )
    ForForce( GetPlayersAll(), () => CameraSetupApplyForPlayer( true, gg_cam_Shroom_cam_3, GetEnumPlayer(), 5.00 ) )
    TriggerSleepAction( 5.00 )
    ForForce( GetPlayersAll(), () => ResetToGameCameraForPlayer( GetEnumPlayer(), 0 ) )
    CinematicModeBJ( false, GetPlayersAll() )
}

function goldShroomDies() {
    if (GetUnitTypeId(GetDyingUnit()) != FourCC('n01H')) {
        return
    }

    CreateItemLoc( FourCC('I03Q'), GetUnitLoc(GetDyingUnit()))
    if ( GetRandomInt(1, 50) == 1 ) {
        CreateItemLoc( FourCC('I05J'), GetUnitLoc(GetDyingUnit()))
    }
}

export function initGoldShroom() {
    enterTrigger = CreateTrigger()
    TriggerRegisterEnterRectSimple(enterTrigger, gg_rct_XHippy )
    TriggerAddAction(enterTrigger, () => playCinematic())

    let gold_shroom_dies = CreateTrigger(  )
    TriggerRegisterAnyUnitEventBJ( gold_shroom_dies, EVENT_PLAYER_UNIT_DEATH )
    TriggerAddAction( gold_shroom_dies, () => goldShroomDies() )
}