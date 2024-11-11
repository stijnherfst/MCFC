import { Timer } from "w3ts"

function circleOfDeath() {
    if (GetSpellAbilityId() != FourCC('A01N')) {
        return
    }

    let radius = 600.0
    let direction = 360.0
    let target = GetSpellTargetLoc()
    TriggerSleepAction(0.50)
    let caster = CreateUnitAtLoc(GetOwningPlayer(GetTriggerUnit()), FourCC("h00A"), PolarProjectionBJ(target, 400.00, 0), 90.00)
    UnitApplyTimedLifeBJ(7.00, FourCC("BTLF"), caster)

	let timer = Timer.create()
    timer.start(0.01, true, () => {
        SetUnitFlyHeightBJ(caster, (GetUnitFlyHeight(caster) - 1.00), 100.00)
        SetUnitPositionLoc(caster, PolarProjectionBJ(target, radius, direction))
        radius -= 1.00
        direction -= 3.60
	})

    TriggerSleepAction(7.00)
    timer.destroy()
    SetUnitPositionLoc(caster, target)
    RemoveUnit(caster)
}

export function initCircleOfDeath() {
    let trigger = CreateTrigger()
    TriggerRegisterAnyUnitEventBJ( trigger, EVENT_PLAYER_UNIT_SPELL_CAST)
    TriggerAddAction( trigger, () => circleOfDeath())
}