import { Group, MapPlayer, Rectangle, Unit } from "w3ts"
import { Players } from "w3ts/globals/index"

export function initMisc() {
    // AddSpecialEffectTarget("war3mapImported\\NSRPG_sword_lightblade.mdx", gg_unit_h02P_0347, "hand,right")
    // AddSpecialEffectTarget("war3mapImported\\RuneSphere.mdx", gg_unit_h02S_0351, "hand,right")

    SetPlayerState(Player(11), PLAYER_STATE_GIVES_BOUNTY, 1)
    SetDefaultDifficulty(MAP_DIFFICULTY_INSANE);

    // SetDestructableInvulnerable(gg_dest_B000_1013, true)
    ModifyGateBJ(bj_GATEOPERATION_OPEN, gg_dest_LTg1_16732)
    ModifyGateBJ(bj_GATEOPERATION_OPEN, gg_dest_B004_13629)

    Players.forEach(player => {
        bj_lastCreatedFogModifier = CreateFogModifierRect(player.handle, FOG_OF_WAR_VISIBLE, gg_rct_Overworld, true, false)
        FogModifierStart(bj_lastCreatedFogModifier)
        bj_lastCreatedFogModifier = CreateFogModifierRect(player.handle, FOG_OF_WAR_MASKED, gg_rct_Dungeons, false, false)
        FogModifierStart(bj_lastCreatedFogModifier)
    });

    Group.create().enumUnitsInRect(Rectangle.getWorldBounds(), Filter(() => {
        let unit = Group.getEnumUnit()
        unit.getItemInSlot(0).setDropOnDeath(false)
        unit.getItemInSlot(1).setDropOnDeath(false)
        unit.getItemInSlot(2).setDropOnDeath(false)
        unit.getItemInSlot(3).setDropOnDeath(false)
        unit.getItemInSlot(4).setDropOnDeath(false)
        unit.getItemInSlot(5).setDropOnDeath(false)
        return false;
    }))

    PanCameraToTimed(GetRectCenterX(gg_rct_revive), GetRectCenterY(gg_rct_revive), 0)
    SetCameraField(CAMERA_FIELD_TARGET_DISTANCE, 2300, 3)

    BlzChangeMinimapTerrainTex("war3mapMinimap.blp")

    // SetCameraBoundsToRect(gg_rct_Overworld)
}