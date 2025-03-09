import { BLOCK_SIZE } from "./config.js";
import { player } from "./player.js";
import { COLS } from "./map.js";
import { canvas } from "../main.js";
// カメラの位置を調整
export const camera = {
    x: 0,
    leftBoundary: BLOCK_SIZE * 4,    // 画面の左から4ブロック
    rightBoundary: BLOCK_SIZE * 8,   // 画面の左から8ブロック
};

export function updateCamera() {
    // プレイヤーが右の境界を超えたら
    if (player.x - camera.x > camera.rightBoundary) {
        camera.x = player.x - camera.rightBoundary;
    }
    // プレイヤーが左の境界を超えたら
    if (player.x - camera.x < camera.leftBoundary) {
        camera.x = player.x - camera.leftBoundary;
    }
    
    // カメラが左端より左に行かないように
    if (camera.x < 0) {
        camera.x = 0;
    }
    // カメラが右端より右に行かないように
    const maxCameraX = (BLOCK_SIZE * COLS) - canvas.width;
    if (camera.x > maxCameraX) {
        camera.x = maxCameraX;
    }
}
