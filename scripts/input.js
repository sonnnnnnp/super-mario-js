import { player } from "./player.js";
import { jumpStrength } from "./config.js";

export function handleInput() {
    // =======================
    //      ボタンの状態管理
    // =======================
    const buttonStates = {
        left: false,
        right: false,
        jump: false
    };

    // ====================================
    //      タッチ/キーボードイベントの処理
    // ====================================
    function handleButtonPress(buttonType, isPressed) {
        buttonStates[buttonType] = isPressed;
    
        // ボタンが押された時の処理
        if (buttonType === 'left' && isPressed) {
            player.velocityX = -player.speed;
            player.direction = 'left';
        } else if (buttonType === 'right' && isPressed) {
            player.velocityX = player.speed;
            player.direction = 'right';
        } else if (buttonType === 'jump' && isPressed && !player.isJumping) {
            player.velocityY = jumpStrength;
            player.isJumping = true;
        }
        // ボタンが離された時の処理
        if (!buttonStates.left && !buttonStates.right) {
            player.velocityX = 0;
        }
    }
    
    // =====================
    //      keyboard処理
    // =====================
    document.addEventListener("keydown", (event) => {
        if (event.code === "Space" && !player.isJumping) {
            handleButtonPress('jump', true);
        }
        if (event.code === "ArrowRight") {
            handleButtonPress('right', true);
        }
        if (event.code === "ArrowLeft") {
            handleButtonPress('left', true);
        }
    });
    document.addEventListener("keyup", (event) => {
        if (event.code === "ArrowRight") {
            handleButtonPress('right', false);
        }
        if (event.code === "ArrowLeft") {
            handleButtonPress('left', false);
        }
    });
    
    // ========================
    //         touch処理
    // ========================
    
    // ====================十字ボタン======================

    // const crossUp = document.querySelector('.cross-up');
    const crossLeft = document.querySelector('.cross-left');
    // const crossMiddle = document.querySelector('.cross-middle');
    const crossRight = document.querySelector('.cross-right');
    // const crossDown = document.querySelector('.cross-bottom');

    crossRight.addEventListener('touchstart', () => {
        handleButtonPress('right', true);
        crossRight.style.backgroundColor = 'gray';
    }, { passive: true });

    crossRight.addEventListener('touchend', () => {
        handleButtonPress('right', false);
        crossRight.style.backgroundColor = '';
    }, { passive: true });

    crossLeft.addEventListener('touchstart', () => {
        handleButtonPress('left', true);
        crossLeft.style.backgroundColor = 'gray';
    }, { passive: true });

    crossLeft.addEventListener('touchend', () => {
        handleButtonPress('left', false);
        crossLeft.style.backgroundColor = '';
    });


    // ====================A,Bボタン======================
    const btnA = document.querySelector('.btn-a');
    const btnB = document.querySelector('.btn-b');

    btnA.addEventListener('touchstart', () => {
        handleButtonPress('jump', true);
        btnA.style.backgroundColor = 'gray';
    }, { passive: true });

    btnA.addEventListener('touchend', () => {
        btnA.style.backgroundColor = '';
    });
}    
