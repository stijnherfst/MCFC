import { addScriptHook, W3TS_HOOK } from "w3ts/hooks";
import { Timer, TimerDialog } from "w3ts"

import { PlayerSpawn } from "Initialization/spawnMasterCrafters";
import { fuckTeleporters } from "fuckTeleporters";

import { initChangeTypeByItem } from "ItemsAndTypes/changeTypeByItem";
import { initTwoHandedCheck } from "ItemsAndTypes/twoHanded";
import { initArrows } from "ItemsAndTypes/arrows";

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
import { initRareDrops } from "Item Drops/rareDrops"

import { initVolcano } from "Areas/Volcano/volcano"
import { initChapel } from "Areas/Chapel/chapel"
import { initDungeon } from "Areas/Dungeon/dungeon"

import { initArmageddon } from "Quests/armageddon"
import { initBaconRace } from "Quests/baconRace"
import { initChrissy } from "Quests/chrissy"
import { initCrytalSword } from "Quests/crystalSword";
import { initDarkSummoner } from "Quests/darkSummoner";
import { initDiffusionalCloak } from "Quests/diffusionalCloak";
import { initDragonSlayer } from "Quests/dragonSlayer";
import { initGoldenChicken } from "Quests/goldenChicken";
import { initGoldShroom } from "Quests/goldShroom";
import { initHeroCape } from "Quests/heroCape";
import { initKillQuests } from "Quests/killquests";
import { initKoronasGrave } from "Quests/koronasGrave";
import { initMagicShroom } from "Quests/magicShroom";
import { initMrSmiley } from "Quests/mrSmiley";
import { initMysticWater } from "Quests/mysticWater";
import { initRiftZone } from "Quests/riftZone";
import { initRipTideMage } from "Quests/riptideMage";
import { initSage } from "Quests/sage";
import { initSatansHelper } from "Quests/satansHelper";
import { initSecretSeal } from "Quests/secretSeal";

import { LearnSpell } from "Spells/learnSpell"


import { initLavaHot } from "Areas/Fiery Lands/lavaHot";

import * as saveLoad  from "saveLoad";
import { PlayerInfo } from "player";

function tsMain() {
	BlzLoadTOCFile("war3mapImported/ui.toc")

	initQuest()
	initMisc()

	let players: PlayerInfo[] = []
	let spawn = new PlayerSpawn(players)

	fuckTeleporters()

	initChangeTypeByItem()
	initTwoHandedCheck()
	initArrows()
	
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
	initRareDrops()

	initVolcano()
	initChapel()
	initDungeon()

	initArmageddon()
	initBaconRace()
	initChrissy()
	initCrytalSword()
	initDarkSummoner()
	initDiffusionalCloak()
	initDragonSlayer()
	initGoldenChicken()
	initGoldShroom()
	initHeroCape()
	initKillQuests()
	initKoronasGrave()
	initMagicShroom()
	initMrSmiley()
	initMysticWater()
	initRiftZone()
	initRipTideMage()
	initSage()
	initSatansHelper()
	initSecretSeal()

	initLavaHot()

	let learn = new LearnSpell(players)

	saveLoad.initSaveLoad()

	let t = new Timer
	t.start(0.1, false, () => {
		saveLoad.loadData()
		saveLoad.generate()
	})
}

addScriptHook(W3TS_HOOK.MAIN_AFTER, tsMain);