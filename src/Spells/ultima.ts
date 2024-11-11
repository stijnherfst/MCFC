import { Timer } from "w3ts"

function wait(howMuch: number) {
    const timer = Timer.create();
    const co = coroutine.running();
  
    timer.start(howMuch, false, () => {
      coroutine.resume(co[0]);
    });
  
    coroutine.yield();
  
    timer.destroy();
}

function ultima() {
    if (GetSpellAbilityId() != FourCC('A01J')) {
        return
    }

    const co = coroutine.create(() => {
        let ultima = CreateUnitAtLoc(GetOwningPlayer(GetTriggerUnit()), FourCC("h000"), GetUnitLoc(GetSpellTargetUnit()), bj_UNIT_FACING)
        let location = GetUnitLoc(ultima)
        SetUnitVertexColorBJ(ultima, 100, 100, 100, 75.00)
    
        for (let i = 0; i < 11; i++) {
            AddSpecialEffectLocBJ(location, "Units\\NightElf\\Wisp\\WispExplode.mdl")
            UnitDamagePointLoc(ultima, 0, 400.00, location, 100.00 + i * 25.0, ATTACK_TYPE_NORMAL, DAMAGE_TYPE_MAGIC)
            SetUnitScalePercent(ultima, 300.00 + i * 50.0, 300.00 + i * 50.0, 300.00 + i * 50.0)
            wait(0.5)
        }
    })
    coroutine.resume(co); 
}

export function initUltima() {
    let trigger = CreateTrigger()
    TriggerRegisterAnyUnitEventBJ( trigger, EVENT_PLAYER_UNIT_SPELL_CAST)
    TriggerAddAction( trigger, () => ultima())
}