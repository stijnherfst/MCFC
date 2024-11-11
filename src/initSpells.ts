import { initBarrier } from "./Spells/barrier"
import { initDharoksRage } from "./Spells/dharoksRage"
import { initLightning } from "./Spells/lightning"
import { initFullHeal } from "./Spells/fullHeal"
import { initMinorHeal } from "./Spells/minorHeal"
import { initFire } from "./Spells/fire"
import { initGenericSummoning } from "./Spells/genericSummoning";
import { initAdvancedSummoning } from "./Spells/advancedSummoning"
import { initMasterSummoning } from "./Spells/masterSummoning"
import { initGodlySummoning } from "./Spells/godlySummoning"
import { initUltima } from "./Spells/ultima";
import { initCircleOfDeath } from "./Spells/circleOfDeath";
import { initSoulDrain } from "./Spells/soulDrain";
import { initWakeOfFire } from "./Spells/wakeOfFire";
import { initMetallicEruption } from "./Spells/metallicEruption";
import { initDeathblow } from "./Spells/deathblow";
import { initRipTide } from "./Spells/ripTide";
import { initMegaFlare } from "./Spells/megaFlare";
import { initMegaMagic } from "./Spells/megaMagic";
import { initSuperHex } from "./Spells/superHex";
import { initLightningFury } from "./Spells/lightningFury";
import { initAutoHeal } from "./Spells/autoHeal";
import { initIceQuake } from "./Spells/iceQuake";
import { initSunStorm } from "./Spells/sunStorm";
import { initHyperBurn } from "./Spells/hyperBurn";
import { initExpBooster } from "./Spells/expBooster";
import { initDevilBooster } from "./Spells/devilBooster";
import { initEchoBlast } from "./Spells/echoBlast";
import { initChronoSphere } from "./Spells/chronoSphere";
import { initMegaShard } from "./Spells/megaShard";

// This is not inlined into main because w3ts generates code for imports using locals
// And we then at some point hit the 200 locals limit of Lua
export function initSpells() {
    initBarrier();
    initDharoksRage()
    initLightning()
    initFullHeal()
    initMinorHeal()
    initFire()
    initGenericSummoning()
    initAdvancedSummoning()
    initMasterSummoning()
    initGodlySummoning()
    initUltima()
    initSoulDrain()
    initCircleOfDeath()
    initWakeOfFire()
    initMetallicEruption()
    initDeathblow()
    initRipTide()
    initMegaFlare()
    initMegaMagic()
    initSuperHex()
    initLightningFury()
    initAutoHeal()
    initIceQuake()
    initSunStorm()
    initHyperBurn()
    initExpBooster()
    initDevilBooster()
    initEchoBlast()
    initChronoSphere()
    initMegaShard()
}