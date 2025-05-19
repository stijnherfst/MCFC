import { Timer, TimerDialog, Group, Rectangle } from "w3ts/index"

let dhorak: unit

let enterTrigger : trigger
let healerTrigger : trigger
let dhorakDiesTrigger : trigger
let emptyTrigger : trigger

let countdown : Timer
let dialog : TimerDialog

let spawnTimer : Timer

enum State {
    Idle,
    Countdown,
    Spawning,
    Dhorak
}

let state = State.Idle

let waveCurrent = 0

let waves : Array<Array<[number, number]>> = [
    [
        [FourCC('n04C'), 2], // Hok-Tok
    ],
    [
        [FourCC('n04C'), 4], // Hok-Tok
        [FourCC('n04D'), 2], // Hak-Prak
    ],
    [
        [FourCC('n04C'), 8], // Hok-Tok
        [FourCC('n04D'), 5], // Hak-Prak
        [FourCC('n04H'), 2], // Quik-Tok
    ],
    [
        [FourCC('n04C'), 10], // Hok-Tok
        [FourCC('n04D'), 7], // Hak-Prak
        [FourCC('n04H'), 3], // Quik-Tok
        [FourCC('n04F'), 2], // Tok-Pok
    ],
    [
        [FourCC('n04C'), 12], // Hok-Tok
        [FourCC('n04D'), 8], // Hak-Prak
        [FourCC('n04H'), 4], // Quik-Tok
        [FourCC('n04F'), 4], // Tok-Pok
    ],
    [
        [FourCC('n04C'), 12], // Hok-Tok
        [FourCC('n04D'), 10], // Hak-Prak
        [FourCC('n04H'), 8], // Quik-Tok
        [FourCC('n04F'), 5], // Tok-Pok
    ],
    [
        [FourCC('n04C'), 12], // Hok-Tok
        [FourCC('n04D'), 12], // Hak-Prak
        [FourCC('n04H'), 10], // Quik-Tok
        [FourCC('n04F'), 8], // Tok-Pok
    ],
]

function wait(howMuch: number) {
    const timer = Timer.create();
    const co = coroutine.running();
  
    timer.start(howMuch, false, () => {
      coroutine.resume(co[0]);
    });
  
    coroutine.yield();
  
    timer.destroy();
}

function dhorakDies() {
    ForGroupBJ(GetUnitsInRectOfPlayer(gg_rct_Volcano_Challenge, Player(11)), () => ExplodeUnitBJ(GetEnumUnit()))
    DisableTrigger(healerTrigger)
    ModifyGateBJ(bj_GATEOPERATION_OPEN, gg_dest_B004_13629)
    DestroyTrigger(dhorakDiesTrigger)
}

function spawnDhorak() {
    const co = coroutine.create(() => {
        EnableTrigger(healerTrigger)
        ForGroupBJ(GetUnitsInRectAll(gg_rct_Volcano_Challenge), () => CameraSetEQNoiseForPlayer(GetOwningPlayer(GetEnumUnit()), 10.00))
        DisplayTextToForce(GetPlayersAll(), "TRIGSTR_5854")
        wait(2)

        for (let i = 0; i < 20; i++) {
            let point = GetRandomLocInRect(gg_rct_Volcano_Spawn)
            AddSpecialEffectLoc("Abilities/Spells/Other/Incinerate/FireLordDeathExplode.mdl", point)
            
            let sound = CreateSound("Abilities/Spells/other/Incinerate/Incinerate1.flac", false, true, true, 1, 1, "DefaultEAXON")
            SetSoundPosition(sound, GetLocationX(point), GetLocationY(point), 0)
            SetSoundVolumeBJ(sound, 100)
            StartSound(sound)
            KillSoundWhenDone(sound)

            let unit = CreateUnitAtLoc(Player(11), FourCC("n04H"), point, bj_UNIT_FACING)
            IssuePointOrderLoc(unit, "attack", GetRandomLocInRect(gg_rct_Volcano_Spawn))

            wait(0.2)
        }

        dhorak = CreateUnitAtLoc(Player(11), FourCC("n04G"), GetRectCenter(gg_rct_Volcano_Dhorak), bj_UNIT_FACING)
        dhorakDiesTrigger = CreateTrigger()
        TriggerRegisterUnitEvent(dhorakDiesTrigger, dhorak, EVENT_UNIT_DEATH)
        TriggerAddAction(dhorakDiesTrigger, () => dhorakDies())

        for (let i = 0; i < 10; i++) {
            let point = GetRandomLocInRect(gg_rct_Volcano_Spawn)
            AddSpecialEffectLoc("Abilities/Spells/Other/Incinerate/FireLordDeathExplode.mdl", point)
            
            let sound = CreateSound("Abilities/Spells/other/Incinerate/Incinerate1.flac", false, true, true, 1, 1, "DefaultEAXON")
            SetSoundPosition(sound, GetLocationX(point), GetLocationY(point), 0)
            SetSoundVolumeBJ(sound, 100)
            StartSound(sound)
            KillSoundWhenDone(sound)
            wait(0.2)
        }
        ForGroupBJ(GetUnitsInRectAll(gg_rct_Volcano_Challenge), () => CameraClearNoiseForPlayer(GetOwningPlayer(GetEnumUnit())))
    })
    coroutine.resume(co);
}

function spawnWave(wave : number) {
    const co = coroutine.create(() => {
        for (let i = 0; i < waves[wave].length; i++) {
            for (let j = 0; j < waves[wave][i][1]; j++) {
                let point = GetRandomLocInRect(gg_rct_Volcano_Spawn)
                AddSpecialEffectLoc("Abilities/Spells/Other/Incinerate/FireLordDeathExplode.mdl", point)
                      
                let sound = CreateSound("Abilities/Spells/other/Incinerate/Incinerate1.flac", false, true, true, 1, 1, "DefaultEAXON")
                SetSoundPosition(sound, GetLocationX(point), GetLocationY(point), 0)
                SetSoundVolumeBJ(sound, 100)
                StartSound(sound)
                KillSoundWhenDone(sound)

                let unit = CreateUnitAtLoc(Player(11), waves[wave][i][0], point, bj_UNIT_FACING)
                IssuePointOrderLoc(unit, "attack", GetRandomLocInRect(gg_rct_Volcano_Spawn))

                wait(0.4)
            }
        }
    })
    coroutine.resume(co);    
}

function startWaveSpawn() {
    spawnTimer = Timer.create().start(1, true, () => {
        if (state != State.Spawning) {
            spawnTimer.destroy()
            return
        }

        if (CountUnitsInGroup(GetUnitsInRectOfPlayer(gg_rct_Volcano_Challenge, Player(11))) != 0) {
            return
        }

        print("Current wave: " + waveCurrent.toString())
           
        if (waveCurrent == waves.length - 1) {
            spawnTimer.destroy()
            state = State.Dhorak
            spawnDhorak()
        } else {
            spawnWave(waveCurrent)
        }
        waveCurrent++;
    })
}

function showMessage() {
    if (state != State.Idle) {
        return;
    }

    if (GetOwningPlayer(GetTriggerUnit()) == Player(11)) {
        return
    }

    EnableTrigger(emptyTrigger)
    countdown = Timer.create()
    dialog = TimerDialog.create(countdown)
    dialog.display = true

    state = State.Countdown
    countdown.start(5, false, () => {
        if (state != State.Countdown) {
            return
        }

        dialog.destroy()
        countdown.destroy()
        DisplayTextToForce( bj_FORCE_ALL_PLAYERS, "Commence carnage!" )
        ModifyGateBJ(bj_GATEOPERATION_CLOSE, gg_dest_B004_13629)

        state = State.Spawning
        startWaveSpawn()
    })
}


function spawnHealer() {
    let healerCount = CountUnitsInGroup(GetUnitsInRectMatching(gg_rct_Volcano_Challenge, Condition(() => GetUnitTypeId(GetFilterUnit()) == FourCC('n04G'))))
    if (healerCount > 1 ) {
        return
    }

    let point : location
    for (let i = 0; i < 10; i++) {
        point = GetRandomLocInRect(gg_rct_Volcano_Spawn)
        if (DistanceBetweenPoints(point, GetUnitLoc(dhorak)) < 1024.0) {
            point = GetRandomLocInRect(gg_rct_Volcano_Spawn)
        } else {
            break
        }
    }
    
    AddSpecialEffectLocBJ( point, "Abilities\\Spells\\Other\\Incinerate\\FireLordDeathExplode.mdl")
    PlaySoundAtPointBJ( gg_snd_Incinerate1, 100.00, point, 0)
    CreateNUnitsAtLoc( 1, FourCC('n04I'), Player(11), point, bj_UNIT_FACING)
    IssueTargetOrderBJ( GetLastCreatedUnit(), "holybolt", dhorak)
    UnitApplyTimedLifeBJ( 15.00, FourCC('BTLF'), GetLastCreatedUnit())
}

function checkVolcanoEmpty() {
    let g = Group.create()
    g.enumUnitsInRect(Rectangle.fromHandle(gg_rct_Volcano_Challenge), () => GetOwningPlayer(GetFilterUnit()) != Player(11))

    if (g.size == 0) {
        state = State.Idle
        countdown.destroy()
        dialog.display = false
        dialog.destroy()

        ForGroupBJ(GetUnitsInRectOfPlayer(gg_rct_Volcano_Challenge, Player(11)), () => RemoveUnit(GetEnumUnit()))
        DisableTrigger(healerTrigger)
        EnableTrigger(enterTrigger)
        ModifyGateBJ(bj_GATEOPERATION_OPEN, gg_dest_B004_13629)
        DestroyTrigger(dhorakDiesTrigger)
        DisableTrigger(emptyTrigger)
        waveCurrent = 0
    }
    g.destroy()
}

function runAway() {
    if (GetOwningPlayer(GetTriggerUnit()) != Player(11)) {
        return
    }

    SetUnitPositionLoc(GetTriggerUnit(), GetRectCenter(gg_rct_VolcanoRunAway))
}

export function initVolcano() {
    enterTrigger = CreateTrigger()
    TriggerRegisterEnterRectSimple(enterTrigger, gg_rct_Enter_The_Volcano )
    TriggerAddAction(enterTrigger, () => showMessage())

    let otherEnemyEnters = CreateTrigger()
    TriggerRegisterEnterRectSimple(otherEnemyEnters, gg_rct_Volcano_Surroundings )
    TriggerAddAction(otherEnemyEnters, () => runAway())

    healerTrigger = CreateTrigger()
    DisableTrigger(healerTrigger)
    TriggerRegisterTimerEventPeriodic(healerTrigger, 10.00 )
    TriggerAddAction(healerTrigger, () => spawnHealer() )

    emptyTrigger = CreateTrigger()
    DisableTrigger(emptyTrigger)
    TriggerRegisterTimerEventPeriodic(emptyTrigger, 1.00 )
    TriggerAddAction(emptyTrigger, () => checkVolcanoEmpty() )
}