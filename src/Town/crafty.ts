function crafty() {
    if (GetOwningPlayer(GetTriggerUnit()) == Player(11)) {
        return
    }
    DisplayTimedTextToForce( GetPlayersAll(), 10.00, "Crafty: I slashed prices like mad now it only costs 250 gold to repair your glass items!" )
}

function InitTrig_Crafty() {
    let trigger = CreateTrigger(  )
    TriggerRegisterEnterRectSimple( trigger, gg_rct_Crafty )
    TriggerAddAction( trigger, () => crafty())
}