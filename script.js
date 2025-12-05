// script.js

// --- 1. 語言切換功能 ---
function toggleLanguage() {
    document.body.classList.toggle('chinese');
}

// --- 2. 專業認證清單切換功能 (平滑展開/收起) ---
function toggleCerts(button) {
    // 獲取 cert-list 容器
    const certList = button.nextElementSibling;
    
    // 切換 'visible' class
    certList.classList.toggle('visible');

    // 更改箭頭圖標
    const icon = button.querySelector('.fas');
    if (icon) {
        // 使用 fa-chevron-down 和 fa-chevron-up 進行切換
        icon.classList.toggle('fa-chevron-down');
        icon.classList.toggle('fa-chevron-up');
    }
}

// --- 3. 滾動動畫 (Intersection Observer - 實現 Fade-In 效果) ---
document.addEventListener('DOMContentLoaded', function() {
    
    // 設置 Intersection Observer 監聽器
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // 如果元素進入視窗
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // 一旦元素可見，停止觀察，以避免重複觸發
                observer.unobserve(entry.target); 
            }
        });
    }, {
        // 元素 20% 可見時觸發
        threshold: 0.2, 
    });

    // 選擇所有需要淡入效果的區塊
    const fadeElements = document.querySelectorAll('.fade-in');

    // 遍歷並觀察每個元素
    fadeElements.forEach(element => {
        observer.observe(element);
    });
});