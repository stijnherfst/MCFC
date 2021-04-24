const spellToAbility : Record<number, number> = {
    [FourCC('I01J')]: FourCC('A01J'),	// Ultima
    [FourCC('I01N')]: FourCC('A01M'),	// Twilight
    [FourCC('I01O')]: FourCC('A01O'),	// Soul Drain
    [FourCC('I01P')]: FourCC('A01N'),	// Circle of Death
    [FourCC('I01Q')]: FourCC('A01Q'),	// Wake of Fire
    [FourCC('I01R')]: FourCC('A01T'),	// Metallic Erruption
    [FourCC('I01S')]: FourCC('A01V'),	// Concentrated Energy
    [FourCC('I01U')]: FourCC('A01X'),	// THC Cloud
    [FourCC('I01V')]: FourCC('A01Y'),	// Deathblow
    [FourCC('I01W')]: FourCC('A01Z'),	// Siesmic Assualt
    [FourCC('I01X')]: FourCC('A022'),	// Rip Tide
    [FourCC('I01Y')]: FourCC('A023'),	// Mega Flare
    [FourCC('I01Z')]: FourCC('A024'),	// Mega Magic
    [FourCC('I020')]: FourCC('A025'),	// Super Hex
    [FourCC('I021')]: FourCC('A027'),	// Psychic Sightnings
    [FourCC('I022')]: FourCC('A029'),	// Lit Fury
    [FourCC('I023')]: FourCC('A02B'),	// Auto Heal
    [FourCC('I029')]: FourCC('A02I'),	// Hyper Heal
    [FourCC('I02C')]: FourCC('A02L'),	// Ice Quake
    [FourCC('I02G')]: FourCC('A02Q'),	// Sun Storm
    [FourCC('I02F')]: FourCC('A02P'),	// Summon - Basic Elemental 	
    [FourCC('I02P')]: FourCC('A06X'),	// Summon - Lightning Lizard 	
    [FourCC('I02T')]: FourCC('A06Y'),	// Summon - Steam Being 		
    [FourCC('I02S')]: FourCC('A070'),	// Summon - Evil Tree 			
    [FourCC('I02X')]: FourCC('A074'),	// Summon - Gold Lizard 		
    [FourCC('I02U')]: FourCC('A071'),	// Summon - Ground Charger 		
    [FourCC('I02R')]: FourCC('A06Z'),	// Summon - Hippy 				
    [FourCC('I02Y')]: FourCC('A075'),	// Summon - Lava Runner 		
    [FourCC('I032')]: FourCC('A079'),	// Summon - Lesser Alien 		
    [FourCC('I02Z')]: FourCC('A076'),	// Summon - Molten Machine 		
    [FourCC('I02W')]: FourCC('A073'),	// Summon - Mud Monster 		
    [FourCC('I034')]: FourCC('A07B'),	// Summon - Overgrown Hedge 	
    [FourCC('I038')]: FourCC('A07F'),	// Summon - Savage Shrub 		
    [FourCC('I035')]: FourCC('A07C'),	// Summon - Seige Engine 		
    [FourCC('I037')]: FourCC('A07E'),	// Summon - Critical Charger 	
    [FourCC('I036')]: FourCC('A07D'),	// Summon - Toxic Spider
    [FourCC('I031')]: FourCC('A078'),	// Summon - Tri Elemental 		
    [FourCC('I039')]: FourCC('A07G'),	// Summon - Vampire				
    [FourCC('I02V')]: FourCC('A072'),	// Summon - Wet Current			
    [FourCC('I030')]: FourCC('A077'),	// Summon - Wild Murlock		
    [FourCC('I033')]: FourCC('A07A'),	// Summon - Wraith				
    [FourCC('I03H')]: FourCC('A087'),	// Hyper Burn
    [FourCC('I03I')]: FourCC('A088'),	// Mental Bitch Slap
    [FourCC('I03O')]: FourCC('A08F'),	// Eternal life
    [FourCC('I01T')]: FourCC('A01W'),	// EXP Booster
    [FourCC('I03P')]: FourCC('A08K'),	// Echo Blast
    [FourCC('I03T')]: FourCC('A08O'),	// Bloody Tornado
    [FourCC('I048')]: FourCC('A08U'),	// Adamant Armor
    [FourCC('I04U')]: FourCC('A09B'),	// Fire
    [FourCC('I04V')]: FourCC('A0EN'),	// Lightning
    [FourCC('I04W')]: FourCC('A09C'),	// Minor Heal
    [FourCC('I04B')]: FourCC('A08V'),	// Rock Skin
    [FourCC('I04C')]: FourCC('A08W'),	// Divine Essence
    [FourCC('I04D')]: FourCC('A08X'),	// Flight
    [FourCC('I04M')]: FourCC('A092'),	// Master Summoning				
    [FourCC('I05L')]: FourCC('A0A1'),	// Advanced Summoning			
    [FourCC('I05M')]: FourCC('A0A2'),	// Electric Skin
    [FourCC('I05N')]: FourCC('A06T'),	// Fire Skin
    [FourCC('I05O')]: FourCC('A09I'),	// Combust
    [FourCC('I06L')]: FourCC('A0AK'),	// Turbo Heal
    [FourCC('I07Y')]: FourCC('A0AT'),	// Critical
    [FourCC('I080')]: FourCC('A0AQ'),	// Stone Gaze
    [FourCC('I088')]: FourCC('A0B5'),	// Presure Release
    [FourCC('I055')]: FourCC('A09N'),	// Devil Booster
    [FourCC('I08D')]: FourCC('A0BC'),	// ChronoSphere
    [FourCC('I08H')]: FourCC('A0EY'),	// Full Heal
    [FourCC('I0AA')]: FourCC('A0ED'),	// Mega Shard
    [FourCC('I0AH')]: FourCC('A0EP'),  	// Critical Strike
    [FourCC('I0AG')]: FourCC('A0EQ'),	// Evasion
    [FourCC('I0AJ')]: FourCC('A0ES'),	// Dhorak's Rage
    [FourCC('I0AE')]: FourCC('A0EO'),	// Godly summoning
}

const summoningAbilities : Array<, number> = {
    [FourCC('I02F')]: FourCC('A02P'),	// Summon - Basic Elemental 	
    [FourCC('I02P')]: FourCC('A06X'),	// Summon - Lightning Lizard 	
    [FourCC('I02T')]: FourCC('A06Y'),	// Summon - Steam Being 		
    [FourCC('I02S')]: FourCC('A070'),	// Summon - Evil Tree 			
    [FourCC('I02X')]: FourCC('A074'),	// Summon - Gold Lizard 		
    [FourCC('I02U')]: FourCC('A071'),	// Summon - Ground Charger 		
    [FourCC('I02R')]: FourCC('A06Z'),	// Summon - Hippy 				
    [FourCC('I02Y')]: FourCC('A075'),	// Summon - Lava Runner 		
    [FourCC('I032')]: FourCC('A079'),	// Summon - Lesser Alien 		
    [FourCC('I02Z')]: FourCC('A076'),	// Summon - Molten Machine 		
    [FourCC('I02W')]: FourCC('A073'),	// Summon - Mud Monster 		
    [FourCC('I034')]: FourCC('A07B'),	// Summon - Overgrown Hedge 	
    [FourCC('I038')]: FourCC('A07F'),	// Summon - Savage Shrub 		
    [FourCC('I035')]: FourCC('A07C'),	// Summon - Seige Engine 		
    [FourCC('I037')]: FourCC('A07E'),	// Summon - Critical Charger 	
    [FourCC('I036')]: FourCC('A07D'),	// Summon - Toxic Spider
    [FourCC('I031')]: FourCC('A078'),	// Summon - Tri Elemental 		
    [FourCC('I039')]: FourCC('A07G'),	// Summon - Vampire				
    [FourCC('I02V')]: FourCC('A072'),	// Summon - Wet Current			
    [FourCC('I030')]: FourCC('A077'),	// Summon - Wild Murlock		
    [FourCC('I033')]: FourCC('A07A'),	// Summon - Wraith
    [FourCC('I04M')]: FourCC('A092'),	// Master Summoning				
    [FourCC('I05L')]: FourCC('A0A1'),	// Advanced Summoning	
    [FourCC('I0AE')]: FourCC('A0EO'),	// Godly summoning
}