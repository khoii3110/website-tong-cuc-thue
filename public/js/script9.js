function generateCaptcha() {
    const canvas = document.getElementById('captchaCanvas');
    const ctx = canvas.getContext('2d');

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let captcha = '';

    for (let i = 0; i < 6; i++) {
        const character = characters.charAt(Math.floor(Math.random() * characters.length));
        captcha += character;

        const x = 20 + i * 30;
        const y = 30 + Math.random() * 10;
        ctx.font = '24px Arial';
        ctx.fillText(character, x, y);
    }

    // Lưu CAPTCHA vào một biến global
    window.captcha = captcha;
}

function checkCaptcha() {
    const input = document.getElementById('captchaInput').value;

    if (input === window.captcha) {
        alert('Mã Xác Nhận Đúng');
    } else {
        alert('Mã Xác Nhận Sai');
    }
}

window.onload = function () {
    generateCaptcha();
};