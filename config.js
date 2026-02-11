// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
    // Your Valentine's name that will appear in the title
    valentineName: "Enu",

    // The title that appears in the browser tab
    pageTitle: "Will You Be My Valentine Baby? 💝",

    // Floating emojis that appear in the background
    floatingEmojis: {
        hearts: ['❤️', '💖', '💝', '💗', '💓'],
        bears: ['🧸', '🐻']
    },

    // Updated Questions (Option 1 added here)
    questions: {
        first: {
            text: "When did you first start liking me? 😊",
            yesBtn: "From the start 💕",
            noBtn: "Later 😌",
            secretAnswer: "Honestly… I fell for you instantly ❤️"
        },
        second: {
            text: "What makes you smile the most about us? 🥰",
            startText: "Everything about you!",
            nextBtn: "Next 💖"
        },
        third: {
            text: "Will you stay with me forever? 💍",
            yesBtn: "Always ❤️",
            noBtn: "Still thinking 😜"
        }
    },

    // Love meter messages
    loveMessages: {
        extreme: "WOOOOW You love me that much?? 🥰🚀💝",
        high: "To infinity and beyond! 🚀💝",
        normal: "And beyond! 🥰"
    },

    // Celebration message
    celebration: {
        title: "Yay! I'm the luckiest person in the world! 🎉💝💖💝💓",
        message: "Now come get your gift, a big warm hug and a huge kiss!",
        emojis: "🎁💖🤗💝💋❤️💕"
    },

    // Color scheme
    colors: {
        backgroundStart: "#ffafbd",
        backgroundEnd: "#ffc3a0",
        buttonBackground: "#ff6b6b",
        buttonHover: "#ff8787",
        textColor: "#ff4757"
    },

    // Animation settings
    animations: {
        floatDuration: "15s",
        floatDistance: "50px",
        bounceSpeed: "0.5s",
        heartExplosionSize: 1.5
    },

    // Background Music
    music: {
        enabled: true,
        autoplay: true,
        musicUrl: "https://res.cloudinary.com/dncywqfpb/video/upload/v1738399057/music_qrhjvy.mp3",
        startText: "🎵 Play Music",
        stopText: "🔇 Stop Music",
        volume: 0.5
    }
};

// Don't modify anything below this line
window.VALENTINE_CONFIG = CONFIG;

