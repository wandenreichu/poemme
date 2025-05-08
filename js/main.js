// Add floating emojis
const emojis = ['✨', '🌸', '🌟', '💫', '🌺', '🎨'];
for (let i = 0; i < 10; i++) {
    const emoji = document.createElement('div');
    emoji.className = 'floating-emoji';
    emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    emoji.style.left = Math.random() * 100 + 'vw';
    emoji.style.top = Math.random() * 100 + 'vh';
    emoji.style.animationDelay = Math.random() * 2 + 's';
    document.body.appendChild(emoji);
} 