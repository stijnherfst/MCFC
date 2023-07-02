import { typeFamilies, typeToFortified, typeToDivine, typeToFlying } from "../ItemsAndTypes/typeFamilies"
import { PlayerInfo } from "../player";

export class ChangeTypeBySpell {
	constructor(
		private players: PlayerInfo[],
	) {
		let trigger = CreateTrigger();

		for (let i = 0; i < 10; i++) {
			TriggerRegisterPlayerUnitEvent(trigger, Player(i), EVENT_PLAYER_UNIT_SPELL_CAST, null);
		}
	
		TriggerAddAction(trigger, () => this.changeType());
	}

	changeType() {
		if (GetSpellAbilityId() != FourCC('A08V') && GetSpellAbilityId() != FourCC('A08W') && GetSpellAbilityId() != FourCC('A08X')) {
			return;
		}
	
		let newType = -1;
		if (GetSpellAbilityId() == FourCC('A08V')) {
			newType = typeToFortified[typeFamilies[GetUnitTypeId(GetTriggerUnit())]]
		} else if (GetSpellAbilityId() == FourCC('A08W')) { // Divine Essence
			newType = typeToDivine[typeFamilies[GetUnitTypeId(GetTriggerUnit())]]
		} else if (GetSpellAbilityId() == FourCC('A08X')) { // Flight
			newType = typeToFlying[typeFamilies[GetUnitTypeId(GetTriggerUnit())]]
		}
	
		if (newType == -1) {
			DisplayTimedTextToPlayer(GetLocalPlayer(), 0, 0, 10, "Poof, nothing seems to happen")
			return
		}
	
		bj_lastCreatedUnit = CreateUnitAtLoc(GetOwningPlayer(GetTriggerUnit()), newType, GetUnitLoc(GetTriggerUnit()), GetUnitFacing(GetTriggerUnit()))
		
		let hp = GetUnitState(GetTriggerUnit(), UNIT_STATE_LIFE)
		let mp = GetUnitState(GetTriggerUnit(), UNIT_STATE_MANA)
	
		SetHeroStr(bj_lastCreatedUnit, GetHeroStr(GetTriggerUnit(), false), true);
		SetHeroAgi(bj_lastCreatedUnit, GetHeroAgi(GetTriggerUnit(), false), true);
		SetHeroInt(bj_lastCreatedUnit, GetHeroInt(GetTriggerUnit(), false), true);
		SetHeroXP(bj_lastCreatedUnit, GetHeroXP(GetTriggerUnit()), false);
		
		UnitAddItem(bj_lastCreatedUnit, UnitItemInSlot(GetTriggerUnit(), 0));
		UnitAddItem(bj_lastCreatedUnit, UnitItemInSlot(GetTriggerUnit(), 1));
		UnitAddItem(bj_lastCreatedUnit, UnitItemInSlot(GetTriggerUnit(), 2));	
		UnitAddItem(bj_lastCreatedUnit, UnitItemInSlot(GetTriggerUnit(), 3));
		UnitAddItem(bj_lastCreatedUnit, UnitItemInSlot(GetTriggerUnit(), 4));
		UnitAddItem(bj_lastCreatedUnit, UnitItemInSlot(GetTriggerUnit(), 5));
	
		SetUnitState(bj_lastCreatedUnit, UNIT_STATE_LIFE, hp);
		SetUnitState(bj_lastCreatedUnit, UNIT_STATE_MANA, mp);
		
		RemoveUnit(GetTriggerUnit());
		
		for (let ability of this.players[GetPlayerId(GetTriggerPlayer())].abilities) {
			UnitAddAbility(bj_lastCreatedUnit, ability)
		}
		
		if (GetLocalPlayer() == GetOwningPlayer(bj_lastCreatedUnit)) {
			ClearSelection();
			SelectUnit(bj_lastCreatedUnit, true);
		}
	}
}