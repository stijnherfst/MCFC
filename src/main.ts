import { addScriptHook, W3TS_HOOK } from "w3ts/hooks";
import { Timer } from "w3ts"

import { PlayerSpawn } from "./Initialization/spawnMasterCrafters";
import { fuckTeleporters } from "./fuckTeleporters";

import { CheckItemPickup } from "./ItemsAndTypes/checkItemPickup";
import { initEnchantItem } from "./ItemsAndTypes/enchantableWeapons";

import { addStrength } from "./Stats/addStrength";
import { addAgility } from "./Stats/addAgility";
import { addIntelligence } from "./Stats/addIntelligence";
import { addStrengthAll } from "./Stats/addStrengthAll";
import { addAgilityAll } from "./Stats/addAgilityAll";
import { addIntelligenceAll } from "./Stats/addIntelligenceAll";
import { levelUp } from "./Stats/levelUp";

import { initQuest } from "./Initialization/quests"
import { initMisc } from "./Initialization/misc"

import { playerLeaves } from "./Messages/playerLeaves";
import { initSkillPoints } from "./Messages/skillPoints"
import { initInventory } from "./Messages/inventory"
import { initBecomingMaster } from "./Messages/becomingMaster"
import { initPlayerDies } from "./Messages/playerDies"

import { initAmon } from "./Monsters/amon"
import { initBaconBoss } from "./Monsters/baconBoss"
import { initDropBear } from "./Monsters/dropbear"
import { initCrimsonDragon } from "./Monsters/crimsonDragon";
import { initKaniff } from "./Monsters/kaniff";
import { initLegendaryChampion } from "./Monsters/legendaryChampion"
import { initLitSkin } from "./Monsters/litSkin";
import { initLochNess } from "./Monsters/lochNess"
import { initMiniMe } from "./Monsters/miniMe";
import { initRipTideCaster } from "./Monsters/ripTideCaster";
import { initSandCrawler } from "./Monsters/sandCrawler"
import { initMonsterRespawn } from "./Monsters/respawn";
import { initSecretSealDies } from "./Monsters/secretSealDies";
import { initSleepySpore } from "./Monsters/sleepySpore";
import { initSuperSpore } from "./Monsters/superSpore";
import { initTeslaCoil } from "./Monsters/teslaCoil";
import { initRareMonsterSpells } from "./Monsters/rareMonsterSpells";

import { initClear } from "./Commands/clear"
import { initMoveToInventory } from "./Commands/inventory";
import { initMovespeed } from "./Commands/movespeed"
import { initSuicide } from "./Commands/suicide"
import { initRoll } from "./Commands/roll"
import { initZoom } from "./Commands/zoom"



import { initRespawn } from "./respawn"

import { initItemDrops } from "./Item Drops/itemDrops"
import { initRareDrops } from "./Item Drops/rareDrops"

import { initVolcano } from "./Areas/Volcano/volcano"
import { initChapel } from "./Areas/Chapel/chapel"
import { initDungeon } from "./Areas/Dungeon/dungeon"

import { initChickens } from "./Areas/Town/chickens";
import { initCrafty } from "./Areas/Town/crafty";
import { initGerbertsGrave } from "./Areas/Town/gerbertsGrave";
import { initSetup } from "./Areas/Town/setup";
import { initTownRemove } from "./Areas/Town/townRemove";

import { initArmageddon } from "./Quests/armageddon"
import { initBaconRace } from "./Quests/baconRace"
import { initChrissy } from "./Quests/chrissy"
import { initCrytalSword } from "./Quests/crystalSword";
import { initDarkSummoner } from "./Quests/darkSummoner";
import { initDiffusionalCloak } from "./Quests/diffusionalCloak";
import { initDragonSlayer } from "./Quests/dragonSlayer";
import { initGoldenChicken } from "./Quests/goldenChicken";
import { initGoldShroom } from "./Quests/goldShroom";
import { initHeroCape } from "./Quests/heroCape";
import { initKillQuests } from "./Quests/killquests";
import { initKoronasGrave } from "./Quests/koronasGrave";
import { initMagicShroom } from "./Quests/magicShroom";
import { initMrSmiley } from "./Quests/mrSmiley";
import { initMysticWater } from "./Quests/mysticWater";
import { initRiftZone } from "./Quests/riftZone";
import { initRipTideMage } from "./Quests/riptideMage";
import { initSage } from "./Quests/sage";
import { initSatansHelper } from "./Quests/satansHelper";
import { initSecretSeal } from "./Quests/secretSeal";

import { LearnSpell } from "./Spell Systems/learnSpell"
import { initSpellFloatingText } from "./Spell Systems/spellFloatingText";

import { initLavaHot } from "./Areas/Fiery Lands/lavaHot";

import { SaveLoad }  from "./saveLoad";
import { PlayerInfo } from "./player";
import { ChangeTypeBySpell } from "./ItemsAndTypes/changeTypeBySpell";
import { initSpells } from "./initSpells";
import { initWeapons } from "./initWeapons";

function tsMain() {
	BlzLoadTOCFile("war3mapImported/ui.toc")

	initQuest()
	initMisc()

	let players: Record<number, PlayerInfo> = {}
	let spawn = new PlayerSpawn(players)
	let checkItemPickup = new CheckItemPickup(players)
	let changeTypeBySpell = new ChangeTypeBySpell(players)

	fuckTeleporters()

	initEnchantItem()
	
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

	initAmon()
	initBaconBoss()
	initDropBear()
	initCrimsonDragon()
	initKaniff()
	initLegendaryChampion()
	initLitSkin()
	initLochNess()
	initMiniMe()
	initRipTideCaster()
	initSandCrawler()
	initMonsterRespawn()
	initSecretSealDies()
	initSleepySpore()
	initSuperSpore()
	initTeslaCoil()
	initRareMonsterSpells()

	initClear()
	initMoveToInventory()
	initMovespeed()
	initRoll()
	initSuicide()
	initZoom()

	initWeapons()

	initRespawn()

	initItemDrops()
	initRareDrops()

	initVolcano()
	initChapel()
	initDungeon()

	initChickens()
	initCrafty()
	initGerbertsGrave()
	initSetup()
	initTownRemove()

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
	initSpellFloatingText()

	initSpells()

	let saveLoad = new SaveLoad(players)

	Timer.create().start(0.1, false, () => {
		saveLoad.loadData()
		saveLoad.generate()
	})
}

addScriptHook(W3TS_HOOK.MAIN_AFTER, tsMain);