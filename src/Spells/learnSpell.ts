import { Players } from "../player"

function learnSpell() {
    if (!(GetItemTypeId(GetManipulatedItem()) in spellToAbility)) {
        return
    }

    let player = Players[GetPlayerId(GetOwningPlayer(GetTriggerUnit()))]

    let isSummoningAbility = (GetItemTypeId(GetManipulatedItem()) in summoningAbilities)
    for (const key in summoningAbilities) {
        if (!(key in player.abilities)) {
            return
        }
        UnitRemoveAbility(GetTriggerUnit(), summoningAbilities[key])
    }

    



    // local integer i = 0
	// local integer j = 0
	// local boolean isSummoningAbility = false
	// if (spellToAbility.has(GetItemTypeId(GetManipulatedItem()))) then
	// 	// Check if spell is already learned
	// 	if (PlayerHasSpell(GetOwningPlayer(GetTriggerUnit()), spellToAbility[GetItemTypeId(GetManipulatedItem())])) then
	// 		call DisplayTimedTextToPlayer(GetTriggerPlayer() ,0, 0, 200.00, "You already have this spell." )
	// 		call CreateItem(GetItemTypeId(GetManipulatedItem()), GetUnitX(GetTriggerUnit()), GetUnitY(GetTriggerUnit()))
	// 		return
	// 	endif
		
		// Remove other summoning abilities if it is a summoning ability	
		if (isSummoningAbility) then
			set i = 0
			loop
				exitwhen i > 6
				set j = 0
				loop
					exitwhen j > summoningAbilitiesCount - 1
					if (summoningAbilities[j] == playerAbilities[GetPlayerId(GetOwningPlayer(GetTriggerUnit())) * 7 + i]) then
						call UnitRemoveAbility(GetTriggerUnit(), abilities[playerAbilities[GetPlayerId(GetOwningPlayer(GetTriggerUnit())) * 7 + i]])
						set playerAbilities[GetPlayerId(GetOwningPlayer(GetTriggerUnit())) * 7 + i] = -1
						call DisplayTimedTextToPlayer(GetTriggerPlayer() ,0, 0, 200.00, "Removing old summon spell" )
					endif
					set j = j + 1
				endloop
				set i = i + 1
			endloop
		endif
		
		// Look for an empty spot and add the spell
		set i = 0
		loop
			exitwhen i > 6
			if (playerAbilities[GetPlayerId(GetOwningPlayer(GetTriggerUnit())) * 7 + i] == -1) then
				call UnitAddAbility(GetTriggerUnit(), abilities[spellToAbility[GetItemTypeId(GetManipulatedItem())]])
				set playerAbilities[GetPlayerId(GetOwningPlayer(GetTriggerUnit())) * 7 + i] = spellToAbility[GetItemTypeId(GetManipulatedItem())]
				return
			endif
			set i = i + 1
		endloop
		call DisplayTimedTextToPlayer(GetTriggerPlayer() ,0, 0, 200.00, "You can only have 7 spells." )
		call CreateItem(GetItemTypeId(GetManipulatedItem()), GetUnitX(GetTriggerUnit()), GetUnitY(GetTriggerUnit()))
	endif
}

//===========================================================================
function initLearnSpell() {
    let trigger = CreateTrigger()
    TriggerRegisterAnyUnitEventBJ(trigger, EVENT_PLAYER_UNIT_USE_ITEM)
    TriggerAddAction(trigger, () => learnSpell())
}