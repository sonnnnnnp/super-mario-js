import { BLOCK_SIZE } from "./config.js";

export const player = {
    x: BLOCK_SIZE * 2.5, //初期スポーンx座標
    y: BLOCK_SIZE * 7,   //初期スポーンy座標
    width: BLOCK_SIZE,
    height: BLOCK_SIZE * 2,
    velocityY: 0,
    velocityX: 0,
    speed: 10,
    isJumping: false,
    direction: 'right',  // キャラクターの向きを追加
    isWalking: false,
    animationFrame: 0,
    animationTimer: 0,
};
