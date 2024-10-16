import { Unit } from "w3ts"

class Drop {
	itemID: number
	chance: number
}

const drops : Record<string, Array<Drop>> = {
	// EXP Chicken
	[FourCC('n01O')]: [
		{ itemID: FourCC('I064'), chance: 10 },    	// Gold
		{ itemID: FourCC('I08Y'), chance: 10 },		// Get-o Sord
	],

	// Basic Elemental
	[FourCC('n000')]: [
		{ itemID: FourCC('I02F'), chance: 2 },   	// Summon - Basic Elemental
		{ itemID: FourCC('I000'), chance: 2.5 }, 	// Short Sword
		{ itemID: FourCC('I05G'), chance: 2.5 }, 	// Get-o Wand
		{ itemID: FourCC('I04V'), chance: 2 },   	// Spell - Lightning
		{ itemID: FourCC('I04U'), chance: 2 },   	// Spell - Fire
		{ itemID: FourCC('I04W'), chance: 2 },   	// Spell - Minor Heal
		{ itemID: FourCC('I08K'), chance: 1.66 },	// Hat
		{ itemID: FourCC('I099'), chance: 1.33 },	// Shoulder Guards
	],

	// Hippy
	[FourCC('n004')]: [
		{ itemID: FourCC('I023'), chance: 1 },   	// Spell - Auto Heal
		{ itemID: FourCC('I02R'), chance: 2 },   	// Summon - Hippy
		{ itemID: FourCC('I04W'), chance: 2 },   	// Spell - Minor Heal
		{ itemID: FourCC('I029'), chance: 1.33 },	// Spell - Hyper heal
		{ itemID: FourCC('I006'), chance: 1.66 },	// Bow
		{ itemID: FourCC('I062'), chance: 1.66 },	// Wooden Arrows
		{ itemID: FourCC('I00Y'), chance: 2.85 },	// Magic Wand
		{ itemID: FourCC('I08K'), chance: 2 },   	// Hat
		{ itemID: FourCC('I099'), chance: 1.66 },	// Shoulder Guards
		{ itemID: FourCC('I09O'), chance: 3.33 },	// Adderal
		// { itemID: FourCC('I050'), chance: 3.33 },	// Bacon
	],

	// Toxic Spider
	[FourCC('n00L')]: [
		{ itemID: FourCC('I014'), chance: 1.33 },   // Stringer
		{ itemID: FourCC('I036'), chance: 2 },		// Summon - Toxic Spider
		{ itemID: FourCC('I000'), chance: 2.22 },	// Short Sword
		{ itemID: FourCC('I006'), chance: 2 },		// Bow
		{ itemID: FourCC('I063'), chance: 1.66 },	// Poison Arrows
	],

	// Evil Tree
	[FourCC('n005')]: [
		{ itemID: FourCC('I01G'), chance: 0.8 },	// Unholy Wings
		{ itemID: FourCC('I01C'), chance: 1 },		// Sturdy Shield
		{ itemID: FourCC('I02S'), chance: 2 },		// Summon - Evil Tree
		{ itemID: FourCC('I00T'), chance: 2.5 },	// Small Axe
		{ itemID: FourCC('I006'), chance: 2 },		// Bow
		{ itemID: FourCC('I062'), chance: 2 },		// Wooden Arrows
	],

	// Lit Lizard
	[FourCC('n003')]: [
		{ itemID: FourCC('I05H'), chance: 0.25 },	// Electric Sword
		{ itemID: FourCC('I01D'), chance: 1 }, 		// Spiked Shield
		{ itemID: FourCC('I066'), chance: 1 },		// Electric Arrows
		{ itemID: FourCC('I02P'), chance: 2 },		// Summon - Lightning Lizard
		{ itemID: FourCC('I00T'), chance: 2.5 },	// Small Axe
		{ itemID: FourCC('I04V'), chance: 3.33 },	// Spell - Lightning
		{ itemID: FourCC('I08K'), chance: 2 },		// Hat
		{ itemID: FourCC('I099'), chance: 1.66 },	// Shoulder Guards
		{ itemID: FourCC('I0AH'), chance: 2 },		// Spell - Critical Strike
	],

	// Grizzawl
	[FourCC('n03I')]: [
		{ itemID: FourCC('I005'), chance: 3.33 },	// Grizzly Mask
		{ itemID: FourCC('I0AG'), chance: 2 },		// Spell - Evasion
	],

	// Mud Monster
	[FourCC('n008')]: [
		{ itemID: FourCC('I05D'), chance: 1 },		// Small Axe (left handed)
		{ itemID: FourCC('I015'), chance: 1.33 },	// Scythe
		{ itemID: FourCC('I01W'), chance: 1 },		// Spell - Seismic Assault
		{ itemID: FourCC('I02W'), chance: 1 },		// Summon - Mud Monster
		{ itemID: FourCC('I01B'), chance: 1.54 },	// Striped Sword
		{ itemID: FourCC('I099'), chance: 2 },		// Shoulder Guards
	],

	// Wet Current
	[FourCC('n007')]: [
		{ itemID: FourCC('I066'), chance: 1.43 },	// Electric Arrows
		{ itemID: FourCC('I05H'), chance: 0.5 },	// Electric Sword
		{ itemID: FourCC('I05M'), chance: 1.33 },	// Spell - Electric Skin
		{ itemID: FourCC('I029'), chance: 1.33 },	// Spell - Hyper Heal
		{ itemID: FourCC('I00E'), chance: 1 },		// Enchanted Cape
		{ itemID: FourCC('I00X'), chance: 1 },		// Magic Hat
		{ itemID: FourCC('I01D'), chance: 2 },		// Spiked Shield
		{ itemID: FourCC('I02V'), chance: 1 },		// Summon - Wet Current
		{ itemID: FourCC('I00Y'), chance: 1.43 },	// Magic Wand
	],

	// Gold Lizard
	[FourCC('n009')]: [
		{ itemID: FourCC('I05C'), chance: 1 },		// Short Sword (left handed)
		{ itemID: FourCC('I02X'), chance: 1 },		// Summon - Gold Lizard
		{ itemID: FourCC('I058'), chance: 0.4 },	// Gold Claw (left handed)
		{ itemID: FourCC('I01T'), chance: 2 },		// Spell - EXP Booster
		{ itemID: FourCC('I026'), chance: 0.4 },	// Gold Claw
		{ itemID: FourCC('I00O'), chance: 0.4 },	// Gold Spear
	],

	// Ground Charger
	[FourCC('n006')]: [
		{ itemID: FourCC('I066'), chance: 1.42 },   // Electric Arrows
		{ itemID: FourCC('I01W'), chance: 1 },		// Spell - Siesmic Assault
		{ itemID: FourCC('I05D'), chance: 1 },		// Small Axe
		{ itemID: FourCC('I02U'), chance: 1 },		// Summon - Ground Charger
		{ itemID: FourCC('I01B'), chance: 1.54 },	// Striped Sword
		{ itemID: FourCC('I099'), chance: 2 },		// Shoulder Guards
	],

	// Steam Being
	[FourCC('n002')]: [
		{ itemID: FourCC('I00V'), chance: 1 },   	// Long Sword
		{ itemID: FourCC('I05C'), chance: 1 },   	// Short Sword (left handed)
		{ itemID: FourCC('I01G'), chance: 0.8 }, 	// Unholy Wings
		{ itemID: FourCC('I00X'), chance: 1 },   	// Magic Hat
		{ itemID: FourCC('I02T'), chance: 1 },   	// Summon - Steam Being
		{ itemID: FourCC('I00W'), chance: 1.33 },	// Magic Cap
		{ itemID: FourCC('I006'), chance: 2 },   	// Bow
	],

	// Lava Runner
	[FourCC('n00A')]: [
		{ itemID: FourCC('I05C'), chance: 1 },   	// Short Sword (left handed)
		{ itemID: FourCC('I05D'), chance: 1 },   	// Small Axe (left handed)
		{ itemID: FourCC('I00R'), chance: 1 },   	// Hunter Shield
		{ itemID: FourCC('I02Y'), chance: 1 },   	// Summon - Lava Runner
		{ itemID: FourCC('I00G'), chance: 1.33 },	// Flame Shield
	],

	// Molten Machine
	[FourCC('n00B')]: [
		{ itemID: FourCC('I01G'), chance: 0.8 },   	// Unholy Wings
		{ itemID: FourCC('I01W'), chance: 1 },   	// Spell - Seismic Assault
		{ itemID: FourCC('I02Z'), chance: 1 },   	// Summon - Molten Machine
		{ itemID: FourCC('I00D'), chance: 1 },   	// Elvish Bow
		{ itemID: FourCC('I065'), chance: 1.33 },	// Paralyzing Bolts
		{ itemID: FourCC('I04B'), chance: 0.4 },	// Spell - Rock Skin
		{ itemID: FourCC('I00P'), chance: 1.33 },	// Heavy Hammer
		{ itemID: FourCC('I00G'), chance: 1.43 },	// Flame Shield
	],

	// Wild Murlock
	[FourCC('n00D')]: [
		{ itemID: FourCC('I01G'), chance: 0.8 },   	// Unholy Wings
		{ itemID: FourCC('I059'), chance: 1 },   	// Katana (left handed)
		{ itemID: FourCC('I00E'), chance: 1 },   	// Enchanted Cape
		{ itemID: FourCC('I030'), chance: 1 },   	// Summon - Wild Murlock
		{ itemID: FourCC('I009'), chance: 1.11 },   // Death Sickle
	],

	// Tri Elemental
	[FourCC('n00E')]: [
		{ itemID: FourCC('I05A'), chance: 1 },   	// Long Sword (left handed)
		{ itemID: FourCC('I023'), chance: 1 },   	// Spell - Auto Heal
		{ itemID: FourCC('I00E'), chance: 1 },   	// Enchanted Cape
		{ itemID: FourCC('I00X'), chance: 1 },   	// Magic Hat
		{ itemID: FourCC('I03T'), chance: 1.33 },   // Spell - Bloody Tornado
		{ itemID: FourCC('I031'), chance: 1 },   	// Summon - Tri Elemental
		{ itemID: FourCC('I00Z'), chance: 1.11 },   // Magician's Staff
	],

	// Wraith
	[FourCC('n00G')]: [
		{ itemID: FourCC('I065'), chance: 1.33 },   // Paralyzing Bolts
		{ itemID: FourCC('I05A'), chance: 1 },   	// Long Sword (left handed)
		{ itemID: FourCC('I00X'), chance: 1 },   	// Magic Hat
		{ itemID: FourCC('I033'), chance: 1 },   	// Summon - Wraith
		{ itemID: FourCC('I008'), chance: 1.25 },   // Crossbow
		{ itemID: FourCC('I00G'), chance: 1.66 },   // Flame Shield
	],

	// Lesser Alien
	[FourCC('n043')]: [
		{ itemID: FourCC('I066'), chance: 1.66 },	// Electric Arrows
		{ itemID: FourCC('I05C'), chance: 1 },   	// Short Sword (left handed)
		{ itemID: FourCC('I05D'), chance: 1 },   	// Small Axe (left handed)
		{ itemID: FourCC('I059'), chance: 1 },   	// Katana (left handed)
		{ itemID: FourCC('I014'), chance: 1.33 },	// Stinger
		{ itemID: FourCC('I01V'), chance: 0.66 },	// Spell - Deathblow
		{ itemID: FourCC('I032'), chance: 1 },   	// Summon - Lesser Alien
		{ itemID: FourCC('I026'), chance: 1 },   	// Gold Claw
		{ itemID: FourCC('I058'), chance: 1 },   	// Gold Claw (left handed)
		{ itemID: FourCC('I00D'), chance: 1.33 },	// Elvish Bow
	],

	// Overgrown Hedge
	[FourCC('n00H')]: [
		{ itemID: FourCC('I05A'), chance: 1 },		// Long Sword (left handed)
		{ itemID: FourCC('I05C'), chance: 1 },		// Short Sword (left handed)
		{ itemID: FourCC('I05D'), chance: 1 },		// Small Axe (left handed)
		{ itemID: FourCC('I059'), chance: 1 },		// Katana (left handed)
		{ itemID: FourCC('I023'), chance: 1 },		// Spell - Auto Heal
		{ itemID: FourCC('I034'), chance: 1 },		// Summon - Overgrown hedge
		{ itemID: FourCC('I02K'), chance: 1 },		// Stone Hands
		{ itemID: FourCC('I00P'), chance: 1.33 },	// Heavy Hammer
		{ itemID: FourCC('I02I'), chance: 1 },		// Solid Bracers
	],

	// Siege Engine
	[FourCC('n00I')]: [
		{ itemID: FourCC('I066'), chance: 1.66 },	// Electric Arrows
		{ itemID: FourCC('I05A'), chance: 1 },		// Long Sword (left handed)
		{ itemID: FourCC('I05C'), chance: 1 },		// Short Sword (left handed)
		{ itemID: FourCC('I05D'), chance: 1 },		// Small Axe (left handed)
		{ itemID: FourCC('I059'), chance: 1 },		// Katana (left handed)
		{ itemID: FourCC('I00Q'), chance: 1 },		// Heavy Shield
		{ itemID: FourCC('I035'), chance: 1 },		// Summon - Siege Engine
		{ itemID: FourCC('I027'), chance: 1 },		// Electric Sword
		{ itemID: FourCC('I05H'), chance: 1 },		// Electric Sword (left handed)
		{ itemID: FourCC('I04B'), chance: 1 },		// Spell - Rock Skin
		{ itemID: FourCC('I02I'), chance: 1 },		// Solid Bracers
	],

	// Savage Shrub
	[FourCC('n00K')]: [
		{ itemID: FourCC('I05H'), chance: 1 },		// Electric Sword (left handed)
		{ itemID: FourCC('I05A'), chance: 1 },		// Long Sword (left handed)
		{ itemID: FourCC('I05C'), chance: 1 },		// Short Sword (left handed)
		{ itemID: FourCC('I05D'), chance: 1 },		// Small Axe (left handed)
		{ itemID: FourCC('I059'), chance: 1 },		// Katana (left handed)
		{ itemID: FourCC('I01P'), chance: 1 },		// Spell - Circle of Death
		{ itemID: FourCC('I00Q'), chance: 1 },		// Heavy Shield
		{ itemID: FourCC('I038'), chance: 1 },		// Summon - Savage Shrub
		{ itemID: FourCC('I028'), chance: 1.33 },	// Cobalt Blade
		{ itemID: FourCC('I02I'), chance: 1 },		// Solid Bracers
	],

	// Critical Charger
	[FourCC('n00J')]: [
		{ itemID: FourCC('I07Y'), chance: 2 },		// Spell - Critical
		{ itemID: FourCC('I066'), chance: 1.66 },	// Electric Arrows
		{ itemID: FourCC('I05E'), chance: 1 },		// Striped Sword (left handed)
		{ itemID: FourCC('I05A'), chance: 1 },		// Long Sword (left handed)
		{ itemID: FourCC('I023'), chance: 2 },		// Spell - Auto Heal
		{ itemID: FourCC('I00Q'), chance: 1 },		// Heavy Shield
		{ itemID: FourCC('I037'), chance: 1 },		// Summon - Critical Charger
		{ itemID: FourCC('I00P'), chance: 1.33 },	// Heavy Hammer
		{ itemID: FourCC('I02I'), chance: 1 },		// Solid Bracers
		{ itemID: FourCC('I09X'), chance: 1 },		// Bronze Sword
	],

	// Vampire
	[FourCC('n00M')]: [
		{ itemID: FourCC('I06B'), chance: 0.4 },	// Blood Sword
		{ itemID: FourCC('I01V'), chance: 1.33 },	// Spell - Deathblow
		{ itemID: FourCC('I039'), chance: 1 },		// Summon - Vampire
		{ itemID: FourCC('I06A'), chance: 1 },		// Vamp Fangs
		{ itemID: FourCC('I00S'), chance: 1.33 },	// Vampire Claws
	],

	// Pyromancer
	[FourCC('n00N')]: [
		{ itemID: FourCC('I065'), chance: 1.33 },	// Paralyzing Bolts
		{ itemID: FourCC('I00E'), chance: 1 },		// Enchanted Cape
		{ itemID: FourCC('I00X'), chance: 1 },		// Magic Hat
		{ itemID: FourCC('I03T'), chance: 1.33 },	// Spell - Bloody Tornado
		{ itemID: FourCC('I01L'), chance: 1.33 },	// Burning Gloves
		{ itemID: FourCC('I00G'), chance: 2 },		// Flame Shield
		{ itemID: FourCC('I08R'), chance: 1 },		// Goggles
	],

	// Hydromancer
	[FourCC('n00O')]: [
		{ itemID: FourCC('I067'), chance: 1.33 },	// Freezing Arrows
		{ itemID: FourCC('I065'), chance: 1.33 },	// Paralyzing Bolts
		{ itemID: FourCC('I00E'), chance: 1 },		// Enchanted Cape
		{ itemID: FourCC('I00X'), chance: 1 },		// Magic Hat
		{ itemID: FourCC('I02C'), chance: 1 },		// Spell - Ice Quake
		{ itemID: FourCC('I01X'), chance: 1 },		// Spell - Flip Tide
		{ itemID: FourCC('I03T'), chance: 1.33 },	// Spell - Bloody Tornado
		{ itemID: FourCC('I00H'), chance: 1.33 },	// Frost Club
		{ itemID: FourCC('I08R'), chance: 1 },		// Goggles
	],

	// Sea Dragon
	[FourCC('n00P')]: [
		{ itemID: FourCC('I067'), chance: 1.33 },	// Freezing Arrows
		{ itemID: FourCC('I023'), chance: 2 },		// Spell - Auto Heal
		{ itemID: FourCC('I00J'), chance: 1.33 },	// Axe of Smartassness
		{ itemID: FourCC('I00H'), chance: 1.33 },	// Frost Club
	],

	// Crusty Crab
	[FourCC('n00Q')]: [
		{ itemID: FourCC('I023'), chance: 2 },		// Spell - Auto Heal
		{ itemID: FourCC('I02D'), chance: 1 },		// Tower Shield
		{ itemID: FourCC('I016'), chance: 0.4 },	// Scale Shield
		{ itemID: FourCC('I00H'), chance: 1.33 },	// Frost Club
	],

	// Holy Purger
	[FourCC('n00R')]: [
		{ itemID: FourCC('I01N'), chance: 0.8 },	// Spell - Twilight
		{ itemID: FourCC('I00F'), chance: 1 },		// Badass Wings
		{ itemID: FourCC('I00E'), chance: 1 },		// Enchanted Cape
		{ itemID: FourCC('I09X'), chance: 1 },		// Bronze Sword
	],

	// Flaming Rock
	[FourCC('n00S')]: [
		{ itemID: FourCC('I00Q'), chance: 1 },		// Heavy Shield
		{ itemID: FourCC('I05N'), chance: 2 },		// Spell - Fire Skin
		{ itemID: FourCC('I01L'), chance: 1.33 },	// Burning Gloves
		{ itemID: FourCC('I017'), chance: 1.33 },	// Double Edged Blade
		{ itemID: FourCC('I00G'), chance: 1.33 },	// Flame Shield
	],

	// Horned Beast
	[FourCC('n00T')]: [
		{ itemID: FourCC('I065'), chance: 1.33 },	// Paralyzing Bolts
		{ itemID: FourCC('I005'), chance: 2 },		// Grizzly Mask
		{ itemID: FourCC('I00B'), chance: 1.33 },	// Dual Bladed Axe
	],

	// Magician
	[FourCC('n00U')]: [
		{ itemID: FourCC('I05H'), chance: 1 },		// Electric Sword (left handed)
		{ itemID: FourCC('I01N'), chance: 1 },		// Spell - Twilight
		{ itemID: FourCC('I01W'), chance: 1 },		// Spell - Seismic Assault
		{ itemID: FourCC('I01X'), chance: 1 },		// Spell - Riptide
		{ itemID: FourCC('I02C'), chance: 1 },		// Spell - Ice Quake
		{ itemID: FourCC('I03T'), chance: 1.33 },	// Spell - Bloody Tornado
		{ itemID: FourCC('I02E'), chance: 1.33 },	// Power Staff
		{ itemID: FourCC('I00X'), chance: 1.33 },	// Magic Hat
		{ itemID: FourCC('I021'), chance: 1.33 },	// Spell - Psychic Sightings
		{ itemID: FourCC('I03I'), chance: 1.33 },	// Spell - Mental Bitch Slap
		{ itemID: FourCC('I08R'), chance: 1.33 },	// Goggles
	],

	// Naga Chick
	[FourCC('n00V')]: [
		{ itemID: FourCC('I00F'), chance: 1 },		// Badass Wings
		{ itemID: FourCC('I003'), chance: 1.43 },	// Badass Sword
		{ itemID: FourCC('I056'), chance: 1.43 },	// Badass Sword (left handed)
	],

	// Mystic Frog
	[FourCC('n00W')]: [
		{ itemID: FourCC('I01P'), chance: 1 },		// Spell - Circle of Death
		{ itemID: FourCC('I023'), chance: 2 },		// Spell - Auto Heal
		{ itemID: FourCC('I00A'), chance: 1.33 },	// Toxic Blade
		{ itemID: FourCC('I020'), chance: 2 },		// Spell - Super Hex
	],

	// Bone Dragon
	[FourCC('n00X')]: [
		{ itemID: FourCC('I00F'), chance: 1 },		// Badass Wings
		{ itemID: FourCC('I013'), chance: 1.33 },	// Rotting Shield
		{ itemID: FourCC('I016'), chance: 0.4 },	// Scale Shield
	],

	// Super Hippy
	[FourCC('n00Y')]: [
		{ itemID: FourCC('I01N'), chance: 1 },		// Spell - Twilight
		{ itemID: FourCC('I00F'), chance: 1 },		// Badass Wings
		{ itemID: FourCC('I06L'), chance: 4 },		// Spell - Turbo heal
		{ itemID: FourCC('I002'), chance: 3.33 },	// Nature Staff
		{ itemID: FourCC('I00W'), chance: 2 },		// Magic Cap
	],

	// Greater Alien
	[FourCC('n00Z')]: [
		{ itemID: FourCC('I00F'), chance: 1 },		// Badass Wings
		{ itemID: FourCC('I01V'), chance: 1.33 },	// Spell - Deathblow
		{ itemID: FourCC('I00U'), chance: 1.33 },	// Sun Shield
		{ itemID: FourCC('I00O'), chance: 1.33 },	// Gold Spear
		{ itemID: FourCC('I03G'), chance: 1 },		// Dual Claws
		{ itemID: FourCC('I09X'), chance: 1 },		// Bronze Sword
	],

	// Spawn of Nature
	[FourCC('n010')]: [
		{ itemID: FourCC('I00F'), chance: 1 },		// Badass Wings
		{ itemID: FourCC('I01V'), chance: 1.33 },	// Spell - Deathblow
		{ itemID: FourCC('I02L'), chance: 1.33 },	// Steel Knuckles
		{ itemID: FourCC('I002'), chance: 2 },		// Nature Staff
		{ itemID: FourCC('I016'), chance: 0.4 },	// Scale Shield
	],

	// Penguin
	[FourCC('n025')]: [
		{ itemID: FourCC('I00F'), chance: 1 },		// Badass Wings
		{ itemID: FourCC('I056'), chance: 1.43 },	// Badass Sword (left handed)
		{ itemID: FourCC('I003'), chance: 1.43 },	// Badass Sword
		{ itemID: FourCC('I01V'), chance: 1.33 },	// Spell - Deathblow
	],

	// Lord of the Pit
	[FourCC('n02H')]: [
		{ itemID: FourCC('I06D'), chance: 4 },		// Summoners Staff
		{ itemID: FourCC('I05L'), chance: 4 },		// Spell - Advanced Summoning
		{ itemID: FourCC('I04M'), chance: 4 },		// Spell - Master Summoning
		{ itemID: FourCC('I08R'), chance: 4 },		// Goggles
	],

	// Ancient Vamp
	[FourCC('n01B')]: [
		{ itemID: FourCC('I00S'), chance: 2 },		// Vampire Claws
		{ itemID: FourCC('I01H'), chance: 2 },		// Vampire Wings
		{ itemID: FourCC('I06A'), chance: 2 },		// Vamp Fangs
		{ itemID: FourCC('I06B'), chance: 1 },		// Blood Sword
	],

	// Beast of Destruction
	[FourCC('n018')]: [
		{ itemID: FourCC('I02I'), chance: 1 },		// Solid Bracers
		{ itemID: FourCC('I05B'), chance: 2 },		// Meat Cleaver (left handed)
		{ itemID: FourCC('I01R'), chance: 2 },		// Spell - Metallic Erruption
		{ itemID: FourCC('I01N'), chance: 1 },		// Spell - Twilight
		{ itemID: FourCC('I005'), chance: 2 },		// Grizzly Mask
		{ itemID: FourCC('I011'), chance: 2 },		// Meat Cleaver
		{ itemID: FourCC('I03D'), chance: 4 },		// Ginormous Dual Axes
		{ itemID: FourCC('I03E'), chance: 1 },		// Cranium Crackers
		{ itemID: FourCC('I02N'), chance: 2 },		// War Gloves
		{ itemID: FourCC('I04B'), chance: 10 },		// Spell - Rock Skin
		{ itemID: FourCC('I04M'), chance: 1 },		// Spell - Water Summoning
		{ itemID: FourCC('I02J'), chance: 2 },		// Battle Mittens
		{ itemID: FourCC('I01I'), chance: 2 },		// War Helm
		{ itemID: FourCC('I01K'), chance: 2 },		// Power Gauntlets
	],

	// Chicken of Death
	[FourCC('n01Q')]: [
		{ itemID: FourCC('I08J'), chance: 10 },		// Chicken Beak
	],

	// Chosen Warrior
	[FourCC('n01A')]: [
		{ itemID: FourCC('I004'), chance: 2 },		// Power Book
		{ itemID: FourCC('I05O'), chance: 2 },		// Power Book
		{ itemID: FourCC('I01I'), chance: 2 },		// Power Book
		{ itemID: FourCC('I03K'), chance: 2 },		// Power Book
		{ itemID: FourCC('I025'), chance: 2 },		// Power Book
		{ itemID: FourCC('I03D'), chance: 2 },		// Power Book
		{ itemID: FourCC('I03E'), chance: 1 },		// Power Book
		{ itemID: FourCC('I02N'), chance: 2 },		// Power Book
		{ itemID: FourCC('I04M'), chance: 1.33 },	// Power Book
		{ itemID: FourCC('I03J'), chance: 2 },		// Power Book
		{ itemID: FourCC('I02J'), chance: 2 },		// Power Book
		{ itemID: FourCC('I01K'), chance: 2 },		// Power Book
		{ itemID: FourCC('I08R'), chance: 10 },		// Power Book
	],

	// Clawless Demon
	[FourCC('n02G')]: [
		{ itemID: FourCC('I01V'), chance: 1.33 },		// Spell - Deathblow
		{ itemID: FourCC('I05Z'), chance: 2 },			// Demon Horns
		{ itemID: FourCC('I054'), chance: 0.15 },		// Devil Dual Claws
	],

	// Crimson Dragon
	[FourCC('n017')]: [
		{ itemID: FourCC('I01Q'), chance: 2.5 },	// Spell - Wake of Fire
		{ itemID: FourCC('I01Y'), chance: 1.33 },	// Spell - Mega Flare
		{ itemID: FourCC('I01E'), chance: 2 },		// Sword of Lava
		{ itemID: FourCC('I03E'), chance: 1 },		// Cranium Crackers
		{ itemID: FourCC('I016'), chance: 1 },		// Scale Shield
		{ itemID: FourCC('I04M'), chance: 1 },		// Spell - Master Summoning
		{ itemID: FourCC('I01K'), chance: 2 },		// Power Gauntlets
		{ itemID: FourCC('I08S'), chance: 2 },		// Dino Tail
		{ itemID: FourCC('I09I'), chance: 3.33 },	// Volcanic Bow
	],

	// Deep Water Monstrosity
	[FourCC('n03S')]: [
		{ itemID: FourCC('I09E'), chance: 3.33 },	// Deep Water Gloves
		{ itemID: FourCC('I041'), chance: 20 },		// Power Boon
	],

	// Diffusional Monster
	[FourCC('n00C')]: [
		{ itemID: FourCC('I067'), chance: 1.33 },	// Freezing Arrows
		{ itemID: FourCC('I03P'), chance: 1.43 },	// Spell - Echo Blast
		{ itemID: FourCC('I05S'), chance: 4 },		// Diffusional Cloak
		{ itemID: FourCC('I01N'), chance: 1 },		// Spell - Twilight
		{ itemID: FourCC('I01S'), chance: 1 },		// Spell - Concentrated Energy
		{ itemID: FourCC('I01P'), chance: 1 },		// Spell - Circle of Death
		{ itemID: FourCC('I02A'), chance: 1 },		// Frost Halo
		{ itemID: FourCC('I00L'), chance: 1.33 },	// Glass Sword
		{ itemID: FourCC('I04C'), chance: 1 },		// Spell - Divine Essence
	],

	// Dual Mancer
	[FourCC('n01G')]: [
		{ itemID: FourCC('I01R'), chance: 1 },		// Spell - Metallic Eruption
		{ itemID: FourCC('I02O'), chance: 1 },		// Magical Gloves
		{ itemID: FourCC('I03P'), chance: 1.33 },	// Spell - Echo Blast
		{ itemID: FourCC('I01N'), chance: 1 },		// Spell - Twilight
		{ itemID: FourCC('I01S'), chance: 1 },		// Spell - Concentrated Energy
		{ itemID: FourCC('I01P'), chance: 1 },		// Spell - Circle of Death
		{ itemID: FourCC('I02A'), chance: 1 },		// Frost Halo
		{ itemID: FourCC('I03G'), chance: 2 },		// Dual Claws
		{ itemID: FourCC('I00B'), chance: 2 },		// Dual Bladed Axe
		{ itemID: FourCC('I017'), chance: 2 },		// Double Edged Blade
		{ itemID: FourCC('I03E'), chance: 1 },		// Cranium Crackers
		{ itemID: FourCC('I03I'), chance: 2 },		// Spell - Mental Bitch Slap
		{ itemID: FourCC('I08R'), chance: 10 },		// Goggles
	],

	// Eternal Force
	[FourCC('n015')]: [
		{ itemID: FourCC('I02I'), chance: 1 },		// Solid Bracers
		{ itemID: FourCC('I01R'), chance: 2 },		// Spell - Metallic Erruption
		{ itemID: FourCC('I01N'), chance: 1 },		// Spell - Twilight
		{ itemID: FourCC('I01S'), chance: 1 },		// Spell - Concentrated Energy
		{ itemID: FourCC('I02A'), chance: 1 },		// Frost Halo
		{ itemID: FourCC('I03O'), chance: 2 },		// Spell - Eternal Life
		{ itemID: FourCC('I061'), chance: 2 },		// Aegis Shield
	],

	// Hydra
	[FourCC('n01C')]: [
		{ itemID: FourCC('I067'), chance: 2 },		// Freezing Arrows
		{ itemID: FourCC('I01N'), chance: 1 },		// Spell - Twilight
		{ itemID: FourCC('I01S'), chance: 1 },		// Spell - Concentrated Energy
		{ itemID: FourCC('I03N'), chance: 4 },		// Hydra Skin Gauntlets
		{ itemID: FourCC('I03E'), chance: 4 },		// Cranium Crackers
		{ itemID: FourCC('I016'), chance: 2 },		// Scale Shield
		{ itemID: FourCC('I08S'), chance: 2 },		// Dino Tail
	],

	// Ice Tundra Monstrosity
	[FourCC('n03T')]: [
		{ itemID: FourCC('I041'), chance: 20 },		// Power Book
		{ itemID: FourCC('I09D'), chance: 3.33 },	// Frost Wyrm Gloves
	],

	// Insane Serpant
	[FourCC('n016')]: [
		{ itemID: FourCC('I01N'), chance: 1 },		// Spell - Twilight
		{ itemID: FourCC('I03J'), chance: 0.66 },	// Ragnarok
		{ itemID: FourCC('I03D'), chance: 2 },		// Ginormous Dual Axes
		{ itemID: FourCC('I03E'), chance: 2 },		// Cranium Crackers
		{ itemID: FourCC('I016'), chance: 1 },		// Scale Shield
	],

	// Joo Lizard
	[FourCC('n01D')]: [
		{ itemID: FourCC('I01N'), chance: 1 },		// Spell - Twilight
		{ itemID: FourCC('I01S'), chance: 1 },		// Spell - Concentrated Energy
		{ itemID: FourCC('I03M'), chance: 20 },		// Joo Gold
		{ itemID: FourCC('I026'), chance: 2 },		// Gold Claw
		{ itemID: FourCC('I058'), chance: 2 },		// Gold Claw (left handed)
		{ itemID: FourCC('I03G'), chance: 2 },		// Dual Claws
		{ itemID: FourCC('I00O'), chance: 2 },		// Gold Spear
	],

	// Korona
	[FourCC('n01X')]: [
		{ itemID: FourCC('I068'), chance: 2.22 },	// Battle Arrows
		{ itemID: FourCC('I00N'), chance: 10 },		// Godly Wings
		{ itemID: FourCC('I03C'), chance: 6.66 },	// Wind Force
		{ itemID: FourCC('I03H'), chance: 2 },		// Spell - Huper Burn
		{ itemID: FourCC('I01J'), chance: 10 },		// Spell - Ultima
		{ itemID: FourCC('I02G'), chance: 5 },		// Spell - Sun Storm
		{ itemID: FourCC('I01Z'), chance: 4 },		// Spell - Mega Magic
		{ itemID: FourCC('I025'), chance: 5 },		// Cursed Blade
		{ itemID: FourCC('I00M'), chance: 6.66 },	// Soul Caliber
		{ itemID: FourCC('I012'), chance: 10 },		// Mirror Shield
		{ itemID: FourCC('I02N'), chance: 2 },		// War Gloves
		{ itemID: FourCC('I016'), chance: 2 },		// Scale Shield
		{ itemID: FourCC('I04C'), chance: 20 },		// Spell - Divine Essence
		{ itemID: FourCC('I04F'), chance: 10 },		// Universal Conquest
		{ itemID: FourCC('I04M'), chance: 2 },		// Spell - Master Summoning
		{ itemID: FourCC('I004'), chance: 2 },		// Battle Wings
		{ itemID: FourCC('I01I'), chance: 2 },		// War helm
		{ itemID: FourCC('I01R'), chance: 5 },		// Spell - Metallic Erruption
		{ itemID: FourCC('I02J'), chance: 10 },		// Battle Mittens
		{ itemID: FourCC('I08D'), chance: 10 },		// Spell - Chronosphere
		{ itemID: FourCC('I09F'), chance: 10 },		// Healing Wave Globes
	],

	// Kraken Tentacle
	[FourCC('n024')]: [
		{ itemID: FourCC('I068'), chance: 2.22 },	// Battle Arrows
		{ itemID: FourCC('I02J'), chance: 1 },		// Battle Mittens
		{ itemID: FourCC('I01R'), chance: 2.5 },	// Spell - Metallic Erruption
		{ itemID: FourCC('I03C'), chance: 4 },		// Wind Force
		{ itemID: FourCC('I02B'), chance: 4 },		// Spirit Helm
		{ itemID: FourCC('I03H'), chance: 2 },		// Spell - Hyper Burn
		{ itemID: FourCC('I01J'), chance: 4 },		// Spell - Ultima
		{ itemID: FourCC('I02G'), chance: 4 },		// Spell - Sun Storm
		{ itemID: FourCC('I025'), chance: 4 },		// Cursed Blade
		{ itemID: FourCC('I012'), chance: 4 },		// Mirror Shield
		{ itemID: FourCC('I02N'), chance: 2 },		// War Gloves
		{ itemID: FourCC('I016'), chance: 1 },		// Scale Shield
		{ itemID: FourCC('I04M'), chance: 2 },		// Spell - Master Summoning
		{ itemID: FourCC('I004'), chance: 2 },		// Battle Wings
		{ itemID: FourCC('I01I'), chance: 2 },		// War Helm
	],

	// Legendary Fighter
	[FourCC('n027')]: [
		{ itemID: FourCC('I053'), chance: 20 },		// Legendary Weapon
		{ itemID: FourCC('I081'), chance: 20 },		// Soul Fly
		{ itemID: FourCC('I04C'), chance: 50 },		// Spell - Divine Essence
		{ itemID: FourCC('I01Z'), chance: 20 },		// Spell - Mega Magic
		{ itemID: FourCC('I04Y'), chance: 40 },		// Wind Cloak
	],

	// Lividor
	[FourCC('n021')]: [
		{ itemID: FourCC('I04T'), chance: 1.33 },	// Lividors Hearth
		{ itemID: FourCC('I04N'), chance: 1.33 },	// Turtle Tooth Sword
		{ itemID: FourCC('I04R'), chance: 1.33 },	// Turtle Shell Shield
		{ itemID: FourCC('I04Q'), chance: 1.33 },	// Turtle Wings
		{ itemID: FourCC('I04O'), chance: 1.33 },	// Turtle Horns
		{ itemID: FourCC('I04P'), chance: 1.33 },	// Turtle Spine Gauntlets
		{ itemID: FourCC('I04B'), chance: 4 },		// Spell - Rock Skin
	],

	// Lock Ness
	[FourCC('n01U')]: [
		{ itemID: FourCC('I067'), chance: 2 },		// Freezing Arrows
		{ itemID: FourCC('I01N'), chance: 1 },		// Spell - Twilight
		{ itemID: FourCC('I02A'), chance: 2 },		// Frost Halo
		{ itemID: FourCC('I016'), chance: 2 },		// Scale Shield
		{ itemID: FourCC('I04B'), chance: 10 },		// Spell - Rock Skin
		{ itemID: FourCC('I00B'), chance: 2 },		// Dual Bladed Axe
		{ itemID: FourCC('I08S'), chance: 2 },		// Dino Tail
	],

	// Molten Monstrosity
	[FourCC('n03Q')]: [
		{ itemID: FourCC('I09C'), chance: 3.33 },	// Flame Bearing Gloves
		{ itemID: FourCC('I041'), chance: 20 },		// Power Book
	],

	// Nature Monstrosity
	[FourCC('n040')]: [
		{ itemID: FourCC('I041'), chance: 20 },		// Power Book
		{ itemID: FourCC('I09Y'), chance: 33.33 },	// Poison Dipped Gloves
	],

	// Ownage Monstrosity
	[FourCC('n03F')]: [
		{ itemID: FourCC('I01M'), chance: 10 },		// Creator Ownage
		{ itemID: FourCC('I09B'), chance: 10 },		// Creator Ownage Bow
		{ itemID: FourCC('I09H'), chance: 10 },		// Creator Ownage (left handed)
		{ itemID: FourCC('I03F'), chance: 10 },		// Wrapters Claws
		{ itemID: FourCC('I04Z'), chance: 10 },		// Guardian Blade
		{ itemID: FourCC('I087'), chance: 10 },		// Brolys Book
		{ itemID: FourCC('I08B'), chance: 10 },		// Kitten Claws
		{ itemID: FourCC('I08C'), chance: 10 },		// Nine Lives
	],

	// Panda Monstrosity
	[FourCC('n03R')]: [
		{ itemID: FourCC('I09J'), chance: 10 },		// Panda Suit
		{ itemID: FourCC('I09F'), chance: 3.33 },	// Healing Wave
		{ itemID: FourCC('I04Z'), chance: 3.33 },	// Guardian Blade
		{ itemID: FourCC('I09G'), chance: 3.33 },	// Guardian Blade (left handed)
		{ itemID: FourCC('I08G'), chance: 3.33 },	// Barbarian Shoulders
		{ itemID: FourCC('I09Z'), chance: 1 },		// Panda Shoulders
		{ itemID: FourCC('I041'), chance: 20 },		// Power Book
	],

	// Penguin King
	[FourCC('n026')]: [
		{ itemID: FourCC('I068'), chance: 2.22 },	// Battle Arrows
		{ itemID: FourCC('I012'), chance: 2 },		// Mirror Shield
		{ itemID: FourCC('I04M'), chance: 2 },		// Spell - Master Summoning
		{ itemID: FourCC('I051'), chance: 10 },		// Penguin Battle Gear
		{ itemID: FourCC('I02B'), chance: 4 },		// Spirit Helm
		{ itemID: FourCC('I01K'), chance: 2 },		// Power Gauntlets
		{ itemID: FourCC('I09A'), chance: 2 },		// Bow of Arctic Wrath
	],

	// Rip Tide Mancer
	[FourCC('n01N')]: [
		{ itemID: FourCC('I067'), chance: 1.33 },	// Freezing Arrows
		{ itemID: FourCC('I00E'), chance: 1 },		// Enchanted Cape
		{ itemID: FourCC('I00X'), chance: 1 },		// Magic hat
		{ itemID: FourCC('I02C'), chance: 2 },		// Spell - Ice Quake
		{ itemID: FourCC('I01X'), chance: 1 },		// Spell - Rip Tide
		{ itemID: FourCC('I03T'), chance: 1.33 },	// Spell - Bloody Tornado
		{ itemID: FourCC('I00H'), chance: 4 },		// Frost Club
		{ itemID: FourCC('I05I'), chance: 4 },		// Sea Staff
		{ itemID: FourCC('I08R'), chance: 10 },		// Goggles
	],

	// Satan
	[FourCC('n01R')]: [
		{ itemID: FourCC('I068'), chance: 2.22 },	// Battle Arrows
		{ itemID: FourCC('I05Z'), chance: 4 },		// Demon Horns
		{ itemID: FourCC('I004'), chance: 2 },		// Battle Wings
		{ itemID: FourCC('I01I'), chance: 2 },		// War Helm
		{ itemID: FourCC('I010'), chance: 4 },		// Accursed Horns
		{ itemID: FourCC('I06F'), chance: 4 },		// Cursed Globes
		{ itemID: FourCC('I025'), chance: 4 },		// Cursed Blade
		{ itemID: FourCC('I03D'), chance: 2 },		// Ginormous Dual Axes
		{ itemID: FourCC('I03E'), chance: 1 },		// Cranium Crackers
		{ itemID: FourCC('I04M'), chance: 1.33 },	// Spell - Master Summoning
		{ itemID: FourCC('I03I'), chance: 4 },		// Spell - Mental Bitch Slap
		{ itemID: FourCC('I02J'), chance: 2 },		// Battle Mittens
		{ itemID: FourCC('I055'), chance: 1.51 },	// Spell - Devil Booster
		{ itemID: FourCC('I086'), chance: 1.51 },	// Ashbringer (left handed)
		{ itemID: FourCC('I085'), chance: 1.51 },	// Diabolic Scythe
	],

	// Sky Reaper
	[FourCC('n022')]: [
		{ itemID: FourCC('I068'), chance: 1.22 },	// Battle Arrows
		{ itemID: FourCC('I02J'), chance: 1 },		// Battle Mittens
		{ itemID: FourCC('I01R'), chance: 2.5 },	// Spell - Metallic Erruption
		{ itemID: FourCC('I03C'), chance: 4 },		// Wind Force
		{ itemID: FourCC('I02B'), chance: 2 },		// Spirit Helm
		{ itemID: FourCC('I03H'), chance: 2 },		// Spell - Hyper Burn
		{ itemID: FourCC('I01J'), chance: 2 },		// Spell - Ultima
		{ itemID: FourCC('I02G'), chance: 2.5 },	// Spell - Sun Storm
		{ itemID: FourCC('I025'), chance: 1.33 },	// Cursed Blade
		{ itemID: FourCC('I012'), chance: 1 },		// Mirror Shield
		{ itemID: FourCC('I02N'), chance: 1 },		// War Globes
		{ itemID: FourCC('I016'), chance: 1 },		// Scale Shield
		{ itemID: FourCC('I04M'), chance: 2 },		// Spell - Master Summoning
		{ itemID: FourCC('I04Y'), chance: 5 },		// Wind Cloak
		{ itemID: FourCC('I004'), chance: 2 },		// Battle Wings
		{ itemID: FourCC('I06G'), chance: 3.33 },	// Godly Arrows
	],

	// Skeleton Sniper
	[FourCC('n01F')]: [
		{ itemID: FourCC('I069'), chance: 3.33 },	// Marksmen Arrows
		{ itemID: FourCC('I01N'), chance: 1 },		// Spell - Twilight
		{ itemID: FourCC('I03B'), chance: 4 },		// Marksman Bow
		{ itemID: FourCC('I03C'), chance: 1 },		// Wind Force
	],

	// Tarantula
	[FourCC('n042')]: [
		{ itemID: FourCC('I014'), chance: 2.86 },	// Stringer
		{ itemID: FourCC('I036'), chance: 6.66 },	// Summon - Toxic Spider
		{ itemID: FourCC('I008'), chance: 5 },		// Cross Bow
		{ itemID: FourCC('I079'), chance: 5 },		// Enchanted Get-o Wand
		{ itemID: FourCC('I00V'), chance: 5 },		// Long Sword
		{ itemID: FourCC('I063'), chance: 5 },		// Poison Arrows
		{ itemID: FourCC('I03Z'), chance: 6.66 },	// Power Scroll
	],

	// Time God
	[FourCC('n014')]: [
		{ itemID: FourCC('I068'), chance: 4 },		// Battle Arrows
		{ itemID: FourCC('I004'), chance: 4 },		// Battle Wings
		{ itemID: FourCC('I01R'), chance: 2.5 },	// Spell - Metallic Erruption
		{ itemID: FourCC('I02O'), chance: 2 },		// Magical Gloves
		{ itemID: FourCC('I03L'), chance: 3.33 },	// Sword of Time
		{ itemID: FourCC('I00N'), chance: 3.33 },	// Godly Wings
		{ itemID: FourCC('I03C'), chance: 3.33 },	// Wind Force
		{ itemID: FourCC('I02B'), chance: 3.33 },	// Spirit Helm
		{ itemID: FourCC('I03H'), chance: 2 },		// Spell - Hyper Burn
		{ itemID: FourCC('I01J'), chance: 3.33 },	// Spell - Ultima
		{ itemID: FourCC('I02G'), chance: 3.33 },	// Spell - Sun Storm
		{ itemID: FourCC('I01Z'), chance: 2 },		// Spell - Mega Magic
		{ itemID: FourCC('I025'), chance: 4 },		// Cursed Blade
		{ itemID: FourCC('I00M'), chance: 2 },		// Soul Caliber
		{ itemID: FourCC('I012'), chance: 4 },		// Mirror Shield
		{ itemID: FourCC('I02N'), chance: 4 },		// War Gloves
		{ itemID: FourCC('I016'), chance: 2 },		// Scale Shield
		{ itemID: FourCC('I04C'), chance: 10 },		// Spell - Divine Essence
		{ itemID: FourCC('I04M'), chance: 2 },		// Spell - Master Summoning
		{ itemID: FourCC('I02J'), chance: 2 },		// Battle Mittens
		{ itemID: FourCC('I06G'), chance: 3.33 },	// Godly Arrows
		{ itemID: FourCC('I06E'), chance: 3.33 },	// Chrono Helm
		{ itemID: FourCC('I08A'), chance: 3 },		// Ghostly Edge
	],

	// Toxic Death
	[FourCC('n019')]: [
		{ itemID: FourCC('I01N'), chance: 1 },		// Spell - Twilight
		{ itemID: FourCC('I00A'), chance: 2.5 },	// Toxic Blade
		{ itemID: FourCC('I01U'), chance: 2 },		// Spell - THC Cloud
		{ itemID: FourCC('I03E'), chance: 1 },		// Cranium Crackers
	],

	// Ultimate Weapon
	[FourCC('n043')]: [
		{ itemID: FourCC('I068'), chance: 1.22 },	// Battle Arrows
		{ itemID: FourCC('I02J'), chance: 1 },		// Battle Mittens
		{ itemID: FourCC('I01R'), chance: 2.5 },	// Spell - Metallic Erruption
		{ itemID: FourCC('I00N'), chance: 4 },		// Godly Wings
		{ itemID: FourCC('I03C'), chance: 4 },		// Wind Force
		{ itemID: FourCC('I03H'), chance: 5 },		// Spell - Hyper Burn
		{ itemID: FourCC('I01J'), chance: 5 },		// Spell - Ultima
		{ itemID: FourCC('I02G'), chance: 6.66 },	// Spell - Sun Storm
		{ itemID: FourCC('I01Z'), chance: 3.33 },	// Spell - Mega Magic
		{ itemID: FourCC('I025'), chance: 10 },		// Cursed Blade
		{ itemID: FourCC('I00M'), chance: 4 },		// Soul Caliber
		{ itemID: FourCC('I012'), chance: 6.66 },	// Mirror Shield
		{ itemID: FourCC('I04F'), chance: 4 },		// Universal Conquest
		{ itemID: FourCC('I04M'), chance: 6.66 },	// Spell - Master Summoning
		{ itemID: FourCC('I04X'), chance: 6.66 },	// Ultimate Artifact
		{ itemID: FourCC('I004'), chance: 6.66 },	// Battle Wings
		{ itemID: FourCC('I01I'), chance: 2 },		// War Helm
	],

	// Legendary Champion
	[FourCC('N03Z')]: [
		{ itemID: FourCC('I09U'), chance: 10 },		// Healing Gloves
		{ itemID: FourCC('I09V'), chance: 10 },		// Hell Shield
		{ itemID: FourCC('I09W'), chance: 10 },		// Gods Fountain of Life
		{ itemID: FourCC('I09R'), chance: 10 },		// Dagger of Ba'al
		{ itemID: FourCC('I09Q'), chance: 10 },		// Goetia Helm
		{ itemID: FourCC('I09S'), chance: 10 },		// Wings of Carthage
		{ itemID: FourCC('I0A2'), chance: 10 },		// Ghostly Pauldrons
		{ itemID: FourCC('I0A3'), chance: 10 },		// Necklace of Teleportation
		{ itemID: FourCC('I0A4'), chance: 10 },		// Sun Hands
		{ itemID: FourCC('I0A5'), chance: 10 },		// Hell Shroud
		{ itemID: FourCC('I0A6'), chance: 10 },		// Planet Destroyer
		{ itemID: FourCC('I0A7'), chance: 10 },		// Demi-God Slayer (left handed)
		{ itemID: FourCC('I0A8'), chance: 10 },		// Ghostly Bow
		{ itemID: FourCC('I0A9'), chance: 10 },		// Ghostly Arrows
		{ itemID: FourCC('I0AA'), chance: 10 },		// Spell - Mega Shard
		{ itemID: FourCC('I0AB'), chance: 10 },		// Ownage Wand
	],
	
	// Amon
	[FourCC('n03X')]: [
		{ itemID: FourCC('I09S'), chance: 10 },		// Wings of Carthage
		{ itemID: FourCC('I09Q'), chance: 10 },		// Goetia Helm
		{ itemID: FourCC('I09R'), chance: 10 },		// Dagger of Ba'al
	],

	// Ancient Zombie
	[FourCC('n03G')]: [
		{ itemID: FourCC('I08P'), chance: 4 },		// Ancient Regalia
		{ itemID: FourCC('I04B'), chance: 3 },		// Spell - Rock Skin
	],

	// Insightful Spirit
	[FourCC('n03H')]: [
		{ itemID: FourCC('I08P'), chance: 10 },		// Ancient Regalia
		{ itemID: FourCC('I08F'), chance: 10 },		// Ghost Eye
	],

	// Skelly Crew
	[FourCC('n03J')]: [
		{ itemID: FourCC('I08Q'), chance: 3.33 },	// Skeletal Face Mask
		{ itemID: FourCC('I04B'), chance: 0.8 },	// Spell - Rock Skin
	],

	// Kaniff
	[FourCC('n03L')]: [
		{ itemID: FourCC('I097'), chance: 3.33 },	// Dragon Suit
		{ itemID: FourCC('I01Y'), chance: 2 },		// Spell - Mega Flare
		{ itemID: FourCC('I08S'), chance: 2.5 },	// Dino Tail
	],

	// Krakan
	[FourCC('n03M')]: [
		{ itemID: FourCC('I01J'), chance: 20 },		// Spell - Ultima
		{ itemID: FourCC('I098'), chance: 10 },		// Kraken Scale Shield
		{ itemID: FourCC('I08L'), chance: 10 },		// Absolute Zero
	],

	// Gravity Demon
	[FourCC('n03N')]: [
		{ itemID: FourCC('I08D'), chance: 10 },		// Spell - Chronosphere
		{ itemID: FourCC('I08N'), chance: 10 },		// Anti-Gravity Boots
		{ itemID: FourCC('I08M'), chance: 10 },		// Condensed Anti-Matter Blade
	],

	// Battle Seal
	[FourCC('n03O')]: [
		{ itemID: FourCC('I093'), chance: 10 },		// Treasure Finding Shoval
		{ itemID: FourCC('I094'), chance: 5 },		// Elusive Zebra Cane
		{ itemID: FourCC('I08V'), chance: 3.33 },	// Maleficent Knave
		{ itemID: FourCC('I092'), chance: 2.5 },	// Pristine Beast Crest
		{ itemID: FourCC('I08T'), chance: 2 },		// Living Weapon
		{ itemID: FourCC('I0A0'), chance: 2 },		// Living Weapon (left handed)
		{ itemID: FourCC('I091'), chance: 1.66 },	// Kinematic Viscosity
		{ itemID: FourCC('I08U'), chance: 1.43 },	// Arctic Wrath Bringer
		{ itemID: FourCC('I08W'), chance: 1.25 },	// Yatagham
		{ itemID: FourCC('I090'), chance: 1.11 },	// Forbidden Malefaction
		{ itemID: FourCC('I0A1'), chance: 1.11 },	// Forbidden Malefaction (left handed)
		{ itemID: FourCC('I08Z'), chance: 1 },		// Presanctified Celestial Malinger
		{ itemID: FourCC('I08X'), chance: 0.91 },	// Ubiquitous Profligate
		{ itemID: FourCC('I09P'), chance: 0.91 },	// Ubiquitous Profligate (left handed)
	],

	// Blood Letter
	[FourCC('n02L')]: [
		{ itemID: FourCC('I06N'), chance: 0.9 },      // Weapon Enchancement
	],

	// Cracka Knight
	[FourCC('n02P')]: [
		{ itemID: FourCC('I06N'), chance: 0.9 },      // Weapon Enchancement
	],

	// Critical Control
	[FourCC('n02M')]: [
		{ itemID: FourCC('I06N'), chance: 0.9 },      // Weapon Enchancement
	],

	// Fish Man
	[FourCC('n02N')]: [
		{ itemID: FourCC('I06N'), chance: 0.9 },      // Weapon Enchancement
	],

	// Lieben Monster
	[FourCC('n02Q')]: [
		{ itemID: FourCC('I06N'), chance: 0.9 },      // Weapon Enchancement
	],

	// Master Sniper
	[FourCC('n02S')]: [
		{ itemID: FourCC('I06N'), chance: 0.9 },      // Weapon Enchancement
	],

	// Nigga Knight
	[FourCC('n02O')]: [
		{ itemID: FourCC('I06N'), chance: 0.9 },      // Weapon Enchancement
	],

	// R-Tillery
	[FourCC('n02R')]: [
		{ itemID: FourCC('I06N'), chance: 0.9 },      // Weapon Enchancement
	],

	// Arcanis
	[FourCC('n032')]: [
		{ itemID: FourCC('I06N'), chance: 0.9 },      // Weapon Enchancement
	],

	// Crazy Cactus
	[FourCC('n030')]: [
		{ itemID: FourCC('I06N'), chance: 0.9 },      // Weapon Enchancement
	],

	// Cyborg
	[FourCC('n02Y')]: [
		{ itemID: FourCC('I06N'), chance: 0.9 },      // Weapon Enchancement
	],

	// Elite Machine
	[FourCC('n035')]: [
		{ itemID: FourCC('I06N'), chance: 0.9 },      // Weapon Enchancement
	],

	// Elite Sniper
	[FourCC('n031')]: [
		{ itemID: FourCC('I06N'), chance: 0.9 },      // Weapon Enchancement
	],

	// Nether Fatass
	[FourCC('n02W')]: [
		{ itemID: FourCC('I06N'), chance: 0.9 },      // Weapon Enchancement
	],

	// Pirate Ship
	[FourCC('n02X')]: [
		{ itemID: FourCC('I06N'), chance: 0.9 },      // Weapon Enchancement
	],

	// Plague Bearer
	[FourCC('n02U')]: [
		{ itemID: FourCC('I06N'), chance: 0.9 },      // Weapon Enchancement
	],

	// Tesla Coil
	[FourCC('n02V')]: [
		{ itemID: FourCC('I06N'), chance: 0.9 },      // Weapon Enchancement
	],

	// The Kabba
	[FourCC('n036')]: [
		{ itemID: FourCC('I06N'), chance: 0.9 },      // Weapon Enchancement
	],

	// Ancient Construct
	[FourCC('n03B')]: [
		{ itemID: FourCC('I06N'), chance: 0.9 },      // Weapon Enchancement
	],

	// Basilisk
	[FourCC('n03A')]: [
		{ itemID: FourCC('I06N'), chance: 0.9 },      // Weapon Enchancement
	],

	// Boner-Skeleton lord
	[FourCC('n038')]: [
		{ itemID: FourCC('I06N'), chance: 0.9 },      // Weapon Enchancement
	],

	// Hippy God
	[FourCC('n039')]: [
		{ itemID: FourCC('I06N'), chance: 0.9 },      // Weapon Enchancement
	],

	// Laggy S.O.B
	[FourCC('n037')]: [
		{ itemID: FourCC('I06N'), chance: 0.9 },      // Weapon Enchancement
	],

	// Mini Summoner
	[FourCC('n033')]: [
		{ itemID: FourCC('I06N'), chance: 0.9 },      // Weapon Enchancement
	],

	// Furbolg Digger
	[FourCC('n043')]: [
		{ itemID: FourCC('I041'), chance: 5 },		// Power Book
	],

	// Furbolg Mage
	[FourCC('n03U')]: [
		{ itemID: FourCC('I09K'), chance: 5 },    	// Furbolg Mage Suit
		{ itemID: FourCC('I09N'), chance: 5 },    	// Vodoo Mask
		{ itemID: FourCC('I041'), chance: 12.5 },   // Power book
	],

	// Furbolg Tracker
	[FourCC('n03W')]: [
		{ itemID: FourCC('I09M'), chance: 5 },		// Furbolg Tracker Suit
		{ itemID: FourCC('I09N'), chance: 5 },		// Vodoo Mask
		{ itemID: FourCC('I041'), chance: 12.5 },	// Power book
	],

	// Furbolg Warrior
	[FourCC('n03V')]: [
		{ itemID: FourCC('I09L'), chance: 5 },   	// Furbolg Warrior Suit
		{ itemID: FourCC('I09N'), chance: 5 },   	// Voodoo Mask
		{ itemID: FourCC('I041'), chance: 12.5 },	// Power book
	],

	// Dhorak
	[FourCC('n04G')]: [
		{ itemID: FourCC('I041'), chance: 12.5 },	// Power Book
		{ itemID: FourCC('I0AJ'), chance: 20 },		// Dhorak's Rage
		{ itemID: FourCC('I0AE'), chance: 15 },		// Godly Summoning
	],

	// Elven Pointy Shooter
	[FourCC('e002')]: [
		{ itemID: FourCC('I03B'), chance: 3 },		// Marksman Bow
		{ itemID: FourCC('I069'), chance: 3 },		// Marksmen Arrows
	],

	// Pebble
	[FourCC('n047')]: [
		{ itemID: FourCC('I0AL'), chance: 5 },		// Pebble Tipped Arrows
	],

	// Sand Crawler
	[FourCC('n04K')]: [
		{ itemID: FourCC('I0AO'), chance: 4 },		// Stringer Arrows
		{ itemID: FourCC('Vjmz'), chance: 2.5 },	// Basic Barrier
	],

	// Sandy Chunks
	[FourCC('n04L')]: [
		{ itemID: FourCC('I0AL'), chance: 4 },		// Pebble Tipped Arrows
		{ itemID: FourCC('I08I'), chance: 2.5 },	// Bronze Hat
	],

	// Sandy Clumps
	[FourCC('n04M')]: [
		{ itemID: FourCC('I01A'), chance: 4 },		// Steel Helm
		{ itemID: FourCC('I02H'), chance: 2 },		// Crystalline Gloves
	],

	// Sandy Rocks
	[FourCC('n04N')]: [
		{ itemID: FourCC('I0AN'), chance: 3 },		// Titanium Helm
		{ itemID: FourCC('I041'), chance: 7.5 },	// Power book
	],

	// Pharaoh
	[FourCC('u000')]: [
		{ itemID: FourCC('I0AM'), chance: 17.5 },	// Benign Molder
		{ itemID: FourCC('I041'), chance: 7.5 },	// Power book
	],
}

function itemDrops() {
	if (!(GetUnitTypeId(GetTriggerUnit()) in drops)) {
		return;
	}
	
	drops[GetUnitTypeId(GetTriggerUnit())].forEach(drop => {
		let random = GetRandomReal(0.0, 100.0)
		if (random < drop.chance) {
			CreateItem(drop.itemID, GetUnitX(GetDyingUnit()), GetUnitY(GetDyingUnit()))
		}
	});
}

export function initItemDrops() {
	let trigger = CreateTrigger();
	for (let i = 0; i < bj_MAX_PLAYER_SLOTS; i++) {
		TriggerRegisterPlayerUnitEvent(trigger, Player(i), EVENT_PLAYER_UNIT_DEATH, null);
	}

	TriggerAddAction(trigger, () => itemDrops());
}