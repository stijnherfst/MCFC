function setup() {
    AddSpecialEffectTargetUnitBJ( "overhead", gg_unit_h013_0241, "war3mapImported\\HolyForce.mdx" )
    CreateTextTagUnitBJ( "These wings r so badass i love em!", gg_unit_h011_0238, 0, 10, 100, 100, 100, 0 )
    IssuePointOrderLocBJ( gg_unit_h011_0238, "patrol", GetRectCenter(gg_rct_wing_guy_2) )
    CreateTextTagUnitBJ( "Try not to die its a long walk when u respawn here :P", gg_unit_h00V_0237, 0, 10, 100, 100, 100, 0 )
    CreateTextTagUnitBJ( "You can carry only 1 god item at a time, and you'll have to drop it 2 pick up a spell book", gg_unit_h018_0304, 0, 10, 100, 100, 100, 0 )
    CreateTextTagUnitBJ( 
`arena fights / win prizes !
1 person type: -challenge
the other type: -accept
defeat the arena monster to win`
    , gg_unit_O000_0353, 0, 10, 100, 100, 100, 0 )
}

//===========================================================================
function initSetup() {
    let trigger = CreateTrigger(  )
    TriggerRegisterTimerEventSingle( trigger, 1.00 )
    TriggerAddAction( trigger, () => setup() )
}

