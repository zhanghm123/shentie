let countdown;
const TARGET_DATE = new Date('2026-12-31T23:59:59');

function updateDisplay(timeDiff) {
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
    
    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

// 页面加载时立即开始倒计时
window.onload = function() {
    const now = new Date();
    const timeDiff = TARGET_DATE - now;
    
    if (timeDiff <= 0) {
        alert('深铁阅云境交房时间到！');
        return;
    }
    
    updateDisplay(timeDiff);
    
    countdown = setInterval(() => {
        const now = new Date();
        const timeDiff = TARGET_DATE - now;
        
        if (timeDiff <= 0) {
            clearInterval(countdown);
            alert('深铁阅云境交房时间到！');
            return;
        }
        
        updateDisplay(timeDiff);
    }, 1000);
}; 