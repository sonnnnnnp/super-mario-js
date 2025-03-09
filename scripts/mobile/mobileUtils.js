
// mobile判別
function isMobile() {
    return /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent) 
        || window.innerWidth <= 768 
        || ('ontouchstart' in window || navigator.maxTouchPoints > 0);
}
export function removeController() {
    if (!isMobile()) document.querySelector('.controller-wrap').style.display = 'none';
}

// ズーム防止 (androidおかしくなるけど)
let lastTouch = 0;
export function preventDoubleTapZoom() {
    document.addEventListener('touchstart', (e) => {
    const now = Date.now();
    if (now - lastTouch <= 300) { // 300ms以内に2回タップされた場合
        e.preventDefault();  // ズームを無効化
    }
    lastTouch = now;
    }, { passive: false });
}
