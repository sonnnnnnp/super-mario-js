import { canvas, ctx } from '../main.js';
import { ROWS, COLS, map } from './map.js';
import { SPRITE, mapSprite, spriteSheet } from './sprites.js';
import { BLOCK_SIZE } from './config.js';
import { camera } from './camera.js';
import { player } from './player.js';

let frameCount = 0; // アニメーションのフレームカウンター

export function draw() {
    ctx.fillStyle = "skyblue"
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  
    frameCount++;
    // はてなブロックのアニメーションフレーム計算
    const questionBlockFrame = Math.floor(frameCount / 12) % 4; // 8 -> 12フレームごとに更新
  
    // Draw map
    for (let row = 0; row < ROWS; row++) {
        for (let col = 0; col < COLS; col++) {
            const blockType = map[row][col];
            if (blockType !== 0) {
                let blockSprite;
                if (blockType === 3) {
                    // はてなブロックの場合、アニメーションフレームを使用
                    blockSprite = SPRITE.BLOCK[blockType][questionBlockFrame];
                } else {
                    // 通常のブロック
                    blockSprite = SPRITE.BLOCK[blockType];
                }
                
                ctx.drawImage(
                    mapSprite,
                    blockSprite.x,
                    blockSprite.y,
                    blockSprite.width,
                    blockSprite.height,
                    col * BLOCK_SIZE - camera.x,  // カメラ位置を引いて描画位置を調整
                    row * BLOCK_SIZE,
                    BLOCK_SIZE,
                    BLOCK_SIZE
                );
            }
        }
    }
  
    // Draw player
    let sprite;
    if (player.isWalking) {
        const walkFrames = player.direction === 'right' ? SPRITE.MARIO.WALK_RIGHT : SPRITE.MARIO.WALK_LEFT;
        sprite = walkFrames[Math.floor(player.animationFrame) % walkFrames.length];
    } else {
        sprite = player.direction === 'right' ? SPRITE.MARIO.STAND_RIGHT : SPRITE.MARIO.STAND_LEFT;
    }
    ctx.drawImage(
        spriteSheet,
        sprite.x,
        sprite.y,
        sprite.width,
        sprite.height,
        player.x - camera.x,
        player.y,
        player.width,
        player.height
    );
}
