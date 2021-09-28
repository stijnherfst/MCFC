import { addScriptHook, W3TS_HOOK } from "w3ts/hooks";
import { Timer, TimerDialog } from "w3ts"

import { PlayerSpawn } from "spawnMasterCrafters";
import { fuckTeleporters } from "fuckTeleporters";
import { changeTypeByItem } from "changeTypeByItem";

import { addStrength } from "Stats/addStrength";
import { addAgility } from "Stats/addAgility";
import { addIntelligence } from "Stats/addIntelligence";
import { addStrengthAll } from "Stats/addStrengthAll";
import { addAgilityAll } from "Stats/addAgilityAll";
import { addIntelligenceAll } from "Stats/addIntelligenceAll";
import { levelUp } from "Stats/levelUp";

import { initQuest } from "Initialization/quests"
import { initMisc } from "Initialization/misc"

import { playerLeaves } from "Messages/playerLeaves";
import { initSkillPoints } from "Messages/skillPoints"
import { initInventory } from "Messages/inventory"
import { initBecomingMaster } from "Messages/becomingMaster"
import { initPlayerDies } from "Messages/playerDies"

import { initZoom } from "Commands/zoom"
import { initClear } from "Commands/clear"
import { initMovespeed } from "Commands/movespeed"
import { initSuicide } from "Commands/suicide"
import { initRoll } from "Commands/roll"

import { initRespawn } from "respawn"

import { initItemDrops } from "Item Drops/itemDrops"

import { initVolcano } from "Areas/Volcano/volcano"
import { initChapel } from "Areas/Chapel/chapel"
import { initDungeon } from "Areas/Dungeon/dungeon"

import { initKillQuests } from "Quests/killquests"
import { initBacon } from "Quests/baconRace"
import { initSatansHelper } from "Quests/satansHelper"

import { LearnSpell } from "Spells/learnSpell"


import * as saveLoad  from "saveLoad";
import { PlayerInfo } from "player";

function tsMain() {
	BlzLoadTOCFile("war3mapImported/ui.toc")

	initQuest()
	initMisc()

	let players: PlayerInfo[] = []
	let spawn = new PlayerSpawn(players)

	// spawnMasterCrafters()
	fuckTeleporters()
	changeTypeByItem()
	
	addStrength()
	addAgility()
	addIntelligence()
	addStrengthAll()
	addAgilityAll()
	addIntelligenceAll()
	levelUp()
	
	playerLeaves()
	initSkillPoints()
	initInventory()
	initBecomingMaster()
	initPlayerDies()

	initZoom()
	initClear()
	initMovespeed()
	initSuicide()
	initRoll()

	initRespawn()

	initItemDrops()

	initVolcano()
	initChapel()
	initDungeon()

	initKillQuests()
	initBacon()
	initSatansHelper()

	// initLearnSpell()
	let learn = new LearnSpell(players)

	saveLoad.initSaveLoad()

	let t = new Timer
	t.start(0.1, false, () => {
		saveLoad.loadData()
		saveLoad.generate()
	})
}

addScriptHook(W3TS_HOOK.MAIN_AFTER, tsMain);