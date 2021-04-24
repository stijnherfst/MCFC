export const typeFamilies: Record<number, number> = { 
	// Archer
	[FourCC('H01S')]: 1, // Flying Archer
	[FourCC('H003')]: 1, // Archer
	[FourCC('H01G')]: 1, // Archer
	[FourCC('H01P')]: 1, // Archer

	// Bacon
	[FourCC('H027')]: 2, // Bacon
	[FourCC('H02B')]: 2, // Flying Bacon

	// Chaos
	[FourCC('H005')]: 3, // Chaos
	[FourCC('H01C')]: 3, // Chaos
	[FourCC('H01K')]: 3, // Chaos
	[FourCC('H01J')]: 3, // Chaotic Flyer

	// Dragon
	[FourCC('H02X')]: 4, // Dragon

	// Furbolg Mage, 
	[FourCC('H031')]: 5, // Furbolg Mage
	[FourCC('H033')]: 5, // Flying Furbolg Mage

	// Furbolg Warrior
	[FourCC('H032')]: 6, // Furbolg Warrior
	[FourCC('H035')]: 6, // Flying Furbolg Warrior

	// Furbolg Tracker 
	[FourCC('H030')]: 7, // Furbolg Tracker
	[FourCC('H034')]: 7, // Flying Furbolg Tracker

	// Heroic
	[FourCC('H008')]: 8, // Heroic
	[FourCC('H01B')]: 8, // Heroic
	[FourCC('H01L')]: 8, // Legendary
	[FourCC('H01T')]: 8, // Flying Hero

	// Killer Chicken
	[FourCC('H02W')]: 9, // Killer Chicken

	// Mage
	[FourCC('H006')]: 10, // Mage
	[FourCC('H01D')]: 10, // Mage
	[FourCC('H01M')]: 10, // Mage
	[FourCC('H01U')]: 10, // Flying Magician

	// Normal
	[FourCC('H002')]: 11, // Normal
	[FourCC('H01E')]: 11, // Normal
	[FourCC('H01N')]: 11, // Normal
	[FourCC('H01V')]: 11, // Flying

	// Ownage
	[FourCC('H007')]: 12, // Ownage
	[FourCC('H01F')]: 12, // Ownage
	[FourCC('H01O')]: 12, // Godly
	[FourCC('H01W')]: 12, // Flying Ownage

	// Panda
	[FourCC('H02Y')]: 13, // Panda
	[FourCC('H02Z')]: 13, // Flying Panda

	// Penguin
	[FourCC('H026')]: 14, // Killer Penguin

	// Satanic
	[FourCC('H028')]: 15, // Satanic

	//  Siege
	[FourCC('H004')]: 16, // Siege
	[FourCC('H01H')]: 16, // Siege
	[FourCC('H01Q')]: 16, // Siege
	[FourCC('H01X')]: 16, // Flying Sniper

	// Sniper
	[FourCC('H009')]: 17, // Sniper
	[FourCC('H01I')]: 17, // Sniper
	[FourCC('H01R')]: 17, // Sniper
	[FourCC('H01Y')]: 17, // Flying Sniper

	// Unarmed
	[FourCC('H001')]: 18, // Unarmed

	// Claw
	[FourCC('H03H')]: 19, // Claw (Normal)
	[FourCC('H03I')]: 19, // Claw (Divine)
	[FourCC('H03J')]: 19, // Claw (Fortified)
	[FourCC('H03K')]: 19 // Flying Claw (Flying)
}

export const typeToFortified:number[] = [
	-1,
	FourCC('H01G'), // Archer
	-1, // Bacon
	FourCC('H01C'), // Chaos
	-1, // Dragon
	-1,	// Furbolg Mage
	-1, // Furbolg Warrior
	-1,	// Furbolg Tracker
	FourCC('H01B'), // Heroic
	-1,	// Killer Chicken
	FourCC('H01D'), // Mage
	FourCC('H01E'), // Normal
	FourCC('H01F'), // Ownage
	-1, // Panda
	-1, // Killer Penguin
	-1, // Satanic
	FourCC('H01H'), // Siege
	FourCC('H01I'), // Sniper
	FourCC('H01E'), // Unarmed
	FourCC('H03J') // Claw
]

// set typeToFortified[1] = 'H01G'		// Archer
// set typeToFortified[2] = -1		// Bacon
// set typeToFortified[3] = 'H01C'		// Chaos

// set typeToFortified[4] = -1		// Dragon

// set typeToFortified[5] = -1		// Furbolg Mage

// set typeToFortified[6] = -1		// Furbolg Warrior

// set typeToFortified[7] = -1		// Furbolg Tracker

// set typeToFortified[8] = 'H01B'		// Heroic

// set typeToFortified[9] = -1			// Killer Chicken

// set typeToFortified[10] = 'H01D'	// Mage

// set typeToFortified[11] = 'H01E'	// Normal

// set typeToFortified[12] = 'H01F'	// Ownage

// set typeToFortified[13] = -1		// Panda

// set typeToFortified[14] = -1		// Killer Penguin

// set typeToFortified[15] = -1		// Satanic

// set typeToFortified[16] = 'H01H'	// Siege

// set typeToFortified[17] = 'H01I'	// Sniper
// set typeToFortified[18] = 'H01E'	// Unarmed
// set typeToFortified[19] = 'H03J'	// Claw

export const typeToDivine:number[] = [
	-1,
	FourCC('H01P'),
	-1,
	FourCC('H01K'),
	-1,
	-1,
	-1,
	-1,
	FourCC('H01L'),
	-1,
	FourCC('H01M'),
	FourCC('H01N'),
	FourCC('H01O'),
	-1,
	-1,
	-1,
	FourCC('H01Q'),
	FourCC('H01R'),
	FourCC('H01N'), // Unarmed
	FourCC('H03I') // Claw
]

export const typeToFlying:number[] = [
	-1,
	FourCC('H01S'),
	FourCC('H02B'),
	FourCC('H01J'),
	-1,
	FourCC('H033'),
	FourCC('H035'),
	FourCC('H034'),
	FourCC('H01T'),
	-1,
	FourCC('H01U'),
	FourCC('H01V'),
	FourCC('H01W'),
	FourCC('H02Z'),
	-1,
	-1,
	FourCC('H01X'),
	FourCC('H01Y'),
	FourCC('H01V'),
	FourCC('H03K') // Claw
]

// set typeToFlying[1] = FourCC('H01S')
// set typeToFlying[2] = FourCC('H02B')
// set typeToFlying[3] = FourCC('H01J')
// set typeToFlying[4] = -1
// set typeToFlying[5] = FourCC('H033')
// set typeToFlying[6] = FourCC('H035')
// set typeToFlying[7] = FourCC('H034')
// set typeToFlying[8] = FourCC('H01T')
// set typeToFlying[9] = -1
// set typeToFlying[1] = FourCC('H01U')
// set typeToFlying[1] = FourCC('H01V')
// set typeToFlying[1] = FourCC('H01W')
// set typeToFlying[1] = FourCC('H02Z')
// set typeToFlying[1] = -1
// set typeToFlying[1] = -1
// set typeToFlying[1] = FourCC('H01X')
// set typeToFlying[1] = FourCC('H01Y')

// set typeToFlying[1] = FourCC('H01V')
// set typeToFlying[1] = FourCC('H03K') // Claw