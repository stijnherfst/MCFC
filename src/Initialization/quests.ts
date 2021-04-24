export function initQuest() {
    DisplayTimedTextToPlayer(GetLocalPlayer(), 0, 0, 40.00, `Welcome to Master Crafters Final Conquest`);
    
    CreateQuestBJ(bj_QUESTTYPE_REQ_DISCOVERED, "Welcome",
`Master Crafters Final Conquest

the final map in the master crafter saga is here! just in case your not following the trilogy it went Master crafters then Elemental RPG and now Master Crafters Final Conquest is the last map in this trilogy

The rogue elementals fought and fell bravely defeating 9 Gods! God damn! shortly after koronas death a portal opened and out come the God of Time. The last remaining elementals could not defeat him but theres still a few Master Crafters left... is there still hope for this world?`
    , "war3mapPreview.tga")

    CreateQuestBJ(bj_QUESTTYPE_REQ_DISCOVERED, "Continuation",
`Master Crafters Final Conquest
But not the final version!. As of writing the date is 15-03-2017.
After 6.5, Psytox took over, after 6.8 Eejin took over.
See the changelog for the changes.`
    , "war3mapPreview.tga")

    CreateQuestBJ(bj_QUESTTYPE_REQ_DISCOVERED, "Equipment",
`Types of equipment:
Weapons - changes your attack type
shields - can't use a shield with a 2 handed weapon
gloves - Turns your hands different colors oooo aaaaa
helms - you should never play war 3 w/ out head protection
wings - ! omg wings wooho
spell book - u can carry 1 spell book or accessory or quest item at a time (unless i fixed it this version not sure)
You can only carry 1 kind of each class of weapon AND thx to all the bastards that traded soulflys and everything and took advantage of every single last exploit possible (u know who u jerks r) from my last preivious games you can no longer share items and you can't use duplicate items so ha! now u have to hack the map to get items easiely`
    , "ReplaceableTextures\\WorldEditUI\\Editor-Force.blp")

    CreateQuestBJ(bj_QUESTTYPE_REQ_DISCOVERED, "Spells",
`Your start with no spells! sometimes when you kill a monster a spell book will drop click on it to learn that spell if you want to unlearn a spell simply type in -remove "spell name" (capitals matter)
if your spells are missing pick up a different weapon to refresh your hero type, if you have less than 7 but game says u have more u need to -removeall to remove all your spells and then remake the game you'll start with no spells but you'll be able to learn 7 again`
    , "ReplaceableTextures\\CommandButtons\\BTNScatterRockets.blp")

    CreateQuestBJ(bj_QUESTTYPE_REQ_DISCOVERED, "Commands",
`-str/agi/int (number or "all") to spend skill points
-inventory - brings you to your inventory
-suicide - go kill yourself
-save - gives you your save code
-load (save code) - loads your char
-removeall - removes all your spells
-remove (Spell Name) - removes a specific spell (capitols matter)
-challenge calls out a challenge for the arena
-accept accept some 1's arena challenge
-movespeed displays your units movespeed
-attackspeed displays your units attackspeed
-zoom number (like 2000 or 2500)`
    , "ReplaceableTextures\\CommandButtons\\BTNControlMagic.blp")

    CreateQuestBJ(bj_QUESTTYPE_REQ_DISCOVERED, "Weapon Enchancements",
`its possible to enchance most weapons in this game i've changed the drop rates from old version everything is more common except these weapon enchancement scrolls which are:
1/100 chance from lv 100 monsters
1/1000 chance from lv 40-99 monsters
1/10,000 chance from lv 1-39 monsters
just in case you see one you'll know how epic of a drop it is`
    , "ReplaceableTextures\\CommandButtons\\BTNHumanMissileUpTwo.blp")

    CreateQuestBJ(bj_QUESTTYPE_REQ_DISCOVERED, "Arena",
`Every 20 minutes there will be an arena free for all battle players are worth good exp so kill em all! An arena brawler will spawn every arena fight he'll be equiped w/ random items and have a randon level. If you defeate the arena master the arena battles will stop

P v P
type in -challenge to fight some one in the arena anyone may type -accept to accept your challenge the winner of the fight will face a random monster according to the level of player he just defeated
lv 1-100 weak arena monster - crappy prizes can be won here
lv 101-300 moderately strong arena monster - good stuff 2 win here
301-500 strong arena monster - some damn good stuff here
501+ eilite arena monster - defeating these monsters can get you some of the best items in the game
-note: spells that use a hidden caster and summons wont work in the arena`
    , "ReplaceableTextures\\CommandButtons\\BTNHeroBlademaster.blp")

    CreateQuestBJ(bj_QUESTTYPE_REQ_DISCOVERED, "Rare Monsters",
`occasionaly a monster will respawn as a rare monster it will have a random ability/buff theres a 10% chance that a rare monster will spawn with a rare weapon if you can defeat it the item will drop (when the corpse disapears) rare items from monster level:
1-10 treasure finding shoval
11-20 ellusive zebra cane
21-30 maleficent knave
31-40 pristine beast crest
41-50 living weapon
51-60 kinematic viscosity
61-70 arctic wrath bringer
71-80 yataghen
81-91 forbidden malefaction
91-99 pre sanctified celestial malinger
100 ubiquitous profligate`
    , "ReplaceableTextures\\CommandButtons\\BTNDeepLordRevenant.blp")

    CreateQuestBJ(bj_QUESTTYPE_REQ_DISCOVERED, "Item Drops",
`monsters:

exp chicken
10% - Gold
10% - get-o sord

spirit bacon
5% - bacon

basic elemental
2% - Summon - Basic Elemental
2.5% - Short Sword
2.5% - Get-o Wand
2% - Spell - Fire
2% - Spell - Minor Heal
1.67% - Hat
1.33% - Shoulder Guards

lit lizard
0.25% - Electric Sword
1% - Spiked Shield
1% - Electric Arrows
2% - Summon - Lightning Lizard
2.5% - Small Axe
3.33% - Spell - Lightning
2% - Hat
1.67% - Shoulder Guards

hippy
1% - Spell - Auto Heal
2% - Summon - Hippy
2% - Spell - Minor Heal
1.3% - Spell - Hyper Heal
1.67% - Bow
1.67% - Wooden Arrows
2.5% - Get-o Wand
2% - Hat
1.67% - Shoulder Guards

toxic spider
1.33% - Stinger
2% - Summon - Toxic Spider
2.22% - Short Sword
2% - Bow
1.67% - Poison Arrows

evil tree
0.8% - Unholy Wings
1% - Sturdy Shield
2% - Summon - Evil Tree
2.5% - Small Axe
2% - Bow
2% - Wooden Arrows

steam being
1% - Long Sword
1% - Short Sword
0.8% - Unholy Wings
1% - Magic Hat
1% - Summon - Steam Being
1.33% - Magic Cap
2% - `
    , "ReplaceableTextures\\WorldEditUI\\Editor-ItemSet.blp")

    CreateQuestBJ(bj_QUESTTYPE_REQ_DISCOVERED, "Credits",
`People that helped! thx alot guys!
-U the fans who actually like my work and inspire me 2 do this all
-topaz - a korean that i'm sure doesnt even speak english. The map dark lineage owen .003 was genious and inspired this mimic combat/spell system in this map
-Matt1965 - for incredibly badass terrain! seriously this terrain is some original pimped out stuff way cool cause i'm to lazy to do terrain
-Wrapter - for being a total badass as usual
-Taco-taco-taco - got me loading screen mini map pics and mdx. files totaly awesome stuff
-tal0n - pre load function (no more typingcodes)
-all the hackers that helped me steal the needed files
-all the jerk offs i stole mdx. files from that want credit haha losers
-SomeWhiteGuy -  me... for being the biggest loser on the planet and spending about a million hours to make this incredibly awesome game GL HF ENJOY!`
    , "ReplaceableTextures\CommandButtons\BTNCloakOfFlames.blp")

    CreateQuestBJ(bj_QUESTTYPE_REQ_DISCOVERED, "Changelog",
`Ha there used to be something here but not anymore.
Go here for a changelog: https://discord.gg/jRaWAGj 
Its the only place I have friends.`
    , "war3mappreview.tga")

    CreateQuestBJ(bj_QUESTTYPE_REQ_DISCOVERED, "Saving Tips",
`this is now irrelevant thanks to leet haxors who made the save code paste into warcraft 3 directory`
    , "ReplaceableTextures\\WorldEditUI\\DoodadPlaceholder.blp")

    CreateQuestBJ(bj_QUESTTYPE_REQ_DISCOVERED, "Other Maps",
`the wc3 legacy of me...
mtg td quad spiral - (i can't even find this map anymore)
universal conquest - my first real map its like this one
master crafters - a game like binders with more modes
newer version was renamed master breeders
elemental rpg - the second game in the master crafter trilogy
master crafters final conquest - this game!
warcraft tribute - has all the mdx files of this map in it
legendary monsters - this map is legendary...
epic craft - a remake of this map from the ground up`
    , "ReplaceableTextures\\WorldEditUI\\Editor-Force.blp")

    CreateQuestBJ(bj_QUESTTYPE_REQ_DISCOVERED, "Help!",
`SomeWhiteGuy needs your help!!!

he has a shitty job and no money so he can't get any pussy!!! I need your rich ass to send me a 10 million dollar donation so i will be motivated into making another awesome war 3 map 4 u!
Dont have 10 million $? thats ok i need 20$ just as much
and for your donation i'm making you your own personalized weapon that only your account name can use! also it will turn your hero into the legendary Ownage Type!
50% of your donation will go towards helping my little sister raise enough money to have the 3rd breast removed from her forhead before my parents decide to sell her to a traveling freak show so please dont wait!
(quest was 2 funny 2 remove the real me is SomeWhiteGuy on US west realm)`
    , "ReplaceableTextures\\CommandButtons\\BTNHeroPaladin.blp")

    CreateQuestBJ(bj_QUESTTYPE_OPT_DISCOVERED, "The Lonely God",
`The rogue elementals (from elemental rpg) practicly did your job for you, only 1 god remains... the lord of time, best not give him the time he needs to do whatever he's planning, go quickly finish off the last god and be free from this mortal plane of existance forever`
    , "ReplaceableTextures\\CommandButtons\\BTNKeeperGhostBlue.blp")
}