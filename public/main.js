import { player } from "./scripts/player.js";
import { gravity, jumpStrength } from "./scripts/config.js";
import { BLOCK_SIZE } from "./scripts/config.js";
import { checkCollision, preventOutOfBounds } from "./scripts/physics.js"
import { updateCamera } from "./scripts/camera.js";
import { draw } from "./scripts/render.js";
import { handleInput } from "./scripts/input.js";
import { removeController, preventDoubleTapZoom } from "./scripts/mobile/mobileUtils.js";

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = BLOCK_SIZE * 16;  // キャンバスの幅 16ブロック
canvas.height = BLOCK_SIZE * 13; // キャンバスの高さ 15-2(見えない下の部分)ブロック

function update() {
    //プレイヤー位置更新
    player.velocityY += gravity;
    player.x += player.velocityX;
    player.y += player.velocityY;
    
    // アニメーション更新
    if (Math.abs(player.velocityX) > 0) {
        player.isWalking = true;
        player.animationFrame += 0.15; // アニメーション速度調整
    } else {
        player.isWalking = false;
        player.animationFrame = 0;
    }
    
    checkCollision();
    updateCamera();
    
    preventOutOfBounds(); // 画面外に出ないように制限
}

function gameLoop() {
    update();
    draw();
    requestAnimationFrame(gameLoop);
}
gameLoop();

handleInput();  // キーボード、タッチ操作を監視する
removeController();     // PCの場合コントーラーを削除
preventDoubleTapZoom(); // ダブルタップによるズームを無効化

export { canvas, ctx };
export const CANVAS_WIDTH = canvas.width;
