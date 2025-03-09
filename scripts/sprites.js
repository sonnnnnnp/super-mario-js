// スプライト画像の読み込み
export const spriteSheet = new Image();
spriteSheet.src = './img/characters.gif';  // マリオのスプライトシート
export const mapSprite = new Image();
mapSprite.src = './img/tiles-8.png';      // マップのスプライトシート

// スプライトの座標定義
export const SPRITE = {
    MARIO: {
        STAND_RIGHT: { x: 258, y: 0, width: 16, height: 32 },
        STAND_LEFT: { x: 239, y: 0, width: 16, height: 32 },
    },
    BLOCK: {
        1: { x: 0, y: 16, width: 16, height: 16 }, // 地面のブロック
        2: { x: 0, y: 33, width: 16, height: 16 }, // ブロック
        3: [                                       // はてなブロック
            { x: 298, y: 78, width: 16, height: 16 },
            { x: 298, y: 78, width: 16, height: 16 },
            { x: 315, y: 78, width: 16, height: 16 },
            { x: 332, y: 78, width: 16, height: 16 },
        ],
        4: { x: 349, y: 78, width: 16, height: 16 }, //取得済みのブロック
        5: { x: 17, y: 16, width: 16, height: 16 }, //壊せるブロック
        6: { x: 119, y: 196, width: 16, height: 16 }, //土管の上部 左
        7: { x: 136, y: 196, width: 16, height: 16 }, //土管の上部 右
        8: { x: 119, y: 213, width: 16, height: 16 }, //土管の下部 左
        9: { x: 136, y: 213, width: 16, height: 16 }, //土管の下部 右
    }
};