import { Group, MapPlayer } from "w3ts"

export const AbilityToSummon: Record<number, number> = { 
	[FourCC('A02P')]: FourCC('n000'), // Summon Basic Elemental
    [FourCC('A06X')]: FourCC('n003'), // Summon Lightning Lizard
    [FourCC('A06Y')]: FourCC('n002'), // Summon Steam Being
    [FourCC('A06Z')]: FourCC('n004'), // Summon Hippy
    [FourCC('A070')]: FourCC('n005'), // Summon Evil Tree
    [FourCC('A071')]: FourCC('n006'), // Summon Ground Charger
    [FourCC('A072')]: FourCC('n007'), // Summon Wet Current
    [FourCC('A073')]: FourCC('n008'), // Summon Mud Monster
    [FourCC('A074')]: FourCC('n009'), // Summon Gold Lizard
    [FourCC('A075')]: FourCC('n00A'), // Summon Lava Runner
    [FourCC('A076')]: FourCC('n00B'), // Summon Molten Machine
    [FourCC('A077')]: FourCC('n00D'), // Summon Wild Murlock
    [FourCC('A078')]: FourCC('n00E'), // Summon Tri Elemental
    [FourCC('A079')]: FourCC('n00F'), // Summon Lesser Alien
    [FourCC('A07A')]: FourCC('n00G'), // Summon Wraith
    [FourCC('A07B')]: FourCC('n00H'), // Summon Overgrown Hedge
    [FourCC('A07C')]: FourCC('n00I'), // Summon Siege Engine
    [FourCC('A07D')]: FourCC('n00L'), // Summon Toxic Spider
    [FourCC('A07E')]: FourCC('n00J'), // Summon Critical Charger
    [FourCC('A07F')]: FourCC('n00K'), // Summon Savage Shrub
    [FourCC('A07G')]: FourCC('n00M'), // Summon Vampire
}

function genericSummoning() {
    if (!(GetSpellAbilityId() in AbilityToSummon)) {
        return
    }

    // Get rid of previous summons
    Group.create().enumUnitsOfPlayer(MapPlayer.fromEvent(), Filter(function yeet() {
        if (!IsUnitType(GetFilterUnit(), UNIT_TYPE_HERO)) {
            RemoveUnit(GetFilterUnit())
        }
        return false
    }))

    CreateUnitAtLoc(GetOwningPlayer(GetTriggerUnit()), AbilityToSummon[GetSpellAbilityId()], GetUnitLoc(GetTriggerUnit()), bj_UNIT_FACING)
}

export function initGenericSummoning() {
    let trigger = CreateTrigger()
    TriggerRegisterAnyUnitEventBJ( trigger, EVENT_PLAYER_UNIT_SPELL_FINISH)
    TriggerAddAction( trigger, () => genericSummoning())
}