import { player } from "./player.js";
import { BLOCK_SIZE } from "./config.js";
import { map, COLS } from "./map.js";
import { canvas } from "../main.js";

export function checkCollision() {
    const playerLeft = Math.floor(player.x / BLOCK_SIZE);
    const playerRight = Math.floor((player.x + player.width - 1) / BLOCK_SIZE);
    const playerTop = Math.floor(player.y / BLOCK_SIZE);
    const playerBottom = Math.floor((player.y + player.height - 1) / BLOCK_SIZE);

    // 下方向の衝突判定
    if (player.velocityY > 0) {
        if (map[playerBottom]?.[playerLeft] > 0 || map[playerBottom]?.[playerRight] > 0) {
            player.y = playerBottom * BLOCK_SIZE - player.height;
            player.velocityY = 0;
            player.isJumping = false;
        }
    }
    
    // 上方向の衝突判定
    if (player.velocityY < 0) {
        if (map[playerTop]?.[playerLeft] > 0 || map[playerTop]?.[playerRight] > 0) {
            player.y = (playerTop + 1) * BLOCK_SIZE;
            player.velocityY = 0;
        }
    }
    
    // 左右の衝突判定
    const nextPlayerLeft = Math.floor((player.x + player.velocityX) / BLOCK_SIZE);
    const nextPlayerRight = Math.floor((player.x + player.velocityX + player.width - 1) / BLOCK_SIZE);
    const checkY1 = Math.floor(player.y / BLOCK_SIZE);
    const checkY2 = Math.floor((player.y + player.height - 1) / BLOCK_SIZE);

    if (player.velocityX > 0) {
        if (map[checkY1]?.[nextPlayerRight] > 0 || map[checkY2]?.[nextPlayerRight] > 0) {
            player.x = nextPlayerRight * BLOCK_SIZE - player.width;
            player.velocityX = 0;
        }
    } else if (player.velocityX < 0) {
        if (map[checkY1]?.[nextPlayerLeft] > 0 || map[checkY2]?.[nextPlayerLeft] > 0) {
            player.x = (nextPlayerLeft + 1) * BLOCK_SIZE;
            player.velocityX = 0;
        }
    }
}

export function preventOutOfBounds() {
    if (player.x < 0) player.x = 0;
    if (player.x > BLOCK_SIZE * COLS - player.width) {
        player.x = BLOCK_SIZE * COLS - player.width;
    }
    if (player.y > canvas.height - player.height) {
        player.y = canvas.height - player.height;
    }
}