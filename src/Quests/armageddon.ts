let timerWindow: timerdialog;
let timer: timer

function startTimer() {
    StartTimerBJ(timer, false, 5000.00 )
    CreateTimerDialogBJ(GetLastCreatedTimerBJ(), "Armageddon...")
    timerWindow = GetLastCreatedTimerDialogBJ()
}

function armageddon() {
    RemoveUnit( gg_unit_n01E_0213 )
    RemoveUnit( gg_unit_n01E_0321 )
    // DestroyTimerDialogBJ( udg_ArenaTimerWindow )
    // DisableTrigger( gg_trg_Arena_Timer )
    // DisableTrigger( gg_trg_Free_for_all )
    // DisableTrigger( gg_trg_arena_close )
    CinematicModeBJ( true, GetPlayersAll() )
    ForForce( GetPlayersAll(), () => CameraSetupApplyForPlayer( true, gg_cam_Armagedon_cam, GetEnumPlayer(), 1.00 ) )
    SetUnitPositionLocFacingBJ( gg_unit_n014_0105, GetRectCenter(gg_rct_Time_God_Time_warp), 270.00 )
    TransmissionFromUnitWithNameBJ( GetPlayersAll(), gg_unit_n014_0105, "Time God", null, "At last my time warp is complete control of this universe will belong to us until the end of time...", bj_TIMETYPE_ADD, 5.00, false )
    TriggerSleepAction( 5.00 )
    TransmissionFromUnitWithNameBJ( GetPlayersAll(), null, "Gods:", gg_snd_mortal_kombat2, "Foolish humans you thought you could destroy immortals. We shall have our vengeance", bj_TIMETYPE_ADD, 8.00, false )
    CreateDestructableLoc( FourCC('OTsp'), GetRectCenter(gg_rct_Portal), 270.00, 1, 0 )
    CreateNUnitsAtLoc( 1, FourCC('n02B'), Player(11), GetRandomLocInRect(gg_rct_Korona), 270.00 )
    UnitAddItemByIdSwapped( FourCC('I05T'), GetLastCreatedUnit() )
    TriggerSleepAction( 1.00 )
    CreateNUnitsAtLoc( 1, FourCC('n02F'), Player(11), GetRandomLocInRect(gg_rct_Korona), 270.00 )
    UnitAddItemByIdSwapped( FourCC('I05W'), GetLastCreatedUnit() )
    TriggerSleepAction( 1.00 )
    CreateNUnitsAtLoc( 1, FourCC('n02A'), Player(11), GetRandomLocInRect(gg_rct_Korona), 270.00 )
    UnitAddItemByIdSwapped( FourCC('I05V'), GetLastCreatedUnit() )
    TriggerSleepAction( 1.00 )
    CreateNUnitsAtLoc( 1, FourCC('n02E'), Player(11), GetRandomLocInRect(gg_rct_Korona), 270.00 )
    UnitAddItemByIdSwapped( FourCC('I05X'), GetLastCreatedUnit() )
    TriggerSleepAction( 1.00 )
    CreateNUnitsAtLoc( 1, FourCC('n02C'), Player(11), GetRandomLocInRect(gg_rct_Korona), 270.00 )
    UnitAddItemByIdSwapped( FourCC('I05Y'), GetLastCreatedUnit() )
    TriggerSleepAction( 1.00 )
    CreateNUnitsAtLoc( 1, FourCC('n02D'), Player(11), GetRandomLocInRect(gg_rct_Korona), 270.00 )
    UnitAddItemByIdSwapped( FourCC('I05U'), GetLastCreatedUnit() )
    TriggerSleepAction( 1.00 )
    SetUnitOwner( gg_unit_h021_0320, Player(10), true )
    IssuePointOrderLocBJ( gg_unit_h021_0320, "attack", GetRectCenter(gg_rct_Korona) )
    CinematicModeExBJ( false, GetPlayersAll(), 1.00 )
    ForForce( GetPlayersAll(), () => ResetToGameCameraForPlayer( GetEnumPlayer(), 0 ) )
    // EnableTrigger(gg_trg_Gods_hunts)
}

function initArmageddon() {
    let timerTrigger = CreateTrigger()
    TriggerRegisterTimerEventSingle(timerTrigger, 5)
    TriggerAddAction(timerTrigger, () => startTimer())

    let start = CreateTrigger()
    TriggerRegisterTimerExpireEventBJ(start, timer)
    TriggerAddAction( start, () => armageddon())
}