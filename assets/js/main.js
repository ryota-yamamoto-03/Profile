// ハンバーガーメニュー
document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.getElementById("hamburger");
    const nav = document.getElementById("nav");
    const navLinks = document.querySelectorAll(".nav-menu ul li a");

    // ハンバーガーメニューの開閉
    hamburger.addEventListener("click", function() {
        this.classList.toggle("open");
        nav.classList.toggle("open");
    });

    // メニューリンクをクリックしたら自動的に閉じる
    navLinks.forEach(link => {
        link.addEventListener("click", function() {
            hamburger.classList.remove("open");
            nav.classList.remove("open");
        });
    });
});

// 自己紹介画像切替
function showImage(button) {
    const pastBtn = document.querySelector('.toggle-btn[onclick="showImage(\'past\')"]');
    const nowBtn = document.querySelector('.toggle-btn[onclick="showImage(\'now\')"]');

    if (button === 'past') {
        document.getElementById('image1').style.display = 'block';
        document.getElementById('image2').style.display = 'none';
        pastBtn.classList.add("active");
        nowBtn.classList.remove("active");
    } else {
        document.getElementById('image1').style.display = 'none';
        document.getElementById('image2').style.display = 'block';
        nowBtn.classList.add("active");
        pastBtn.classList.remove("active");
    }
}

// 時間帯によってメッセージの内容が変わる
// 現在の時間を取得
const now = new Date();
const hours = now.getHours();
let greetingMessage = "";

// 時間帯ごとのメッセージを設定
if (hours >= 5 && hours < 12) {
    greetingMessage = "おはようございます！";
} else if (hours >= 12 && hours < 18) {
    greetingMessage = "こんにちは！";
} else {
    greetingMessage = "こんばんは！";
}

// HTMLに表示
document.getElementById("greeting-message").textContent = greetingMessage;


// 画像の保存を無効にする
document.addEventListener("DOMContentLoaded", function() {
    // 画像の右クリックを無効化
    document.addEventListener("contextmenu", function(event) {
        if (event.target.tagName === "IMG") {
            event.preventDefault();
        }
    });

    // 画像のドラッグ＆ドロップを無効化
    document.querySelectorAll("img").forEach(img => {
        img.addEventListener("dragstart", function(event) {
            event.preventDefault();
        });
    });
});

// カーソルを丸が追尾する
document.addEventListener("mousemove", function(event) {
    const cursor = document.querySelector(".cursor");

    // マウスの位置に追従させる
    cursor.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
});

// XとLINEに共有する
document.addEventListener("DOMContentLoaded", function () {
    const currentUrl = encodeURIComponent(window.location.href);
    const text = encodeURIComponent("山本涼太のポートフォリオ");

    // X（旧 Twitter）で共有
    document.getElementById("share-x").addEventListener("click", function () {
        window.open(`https://twitter.com/intent/tweet?text=${text}&url=${currentUrl}`, "_blank");
    });

    // LINE で共有
    document.getElementById("share-line").addEventListener("click", function () {
        window.open(`https://line.me/R/msg/text/?${text}%0D%0A${currentUrl}`, "_blank");
    });
});

// TOPに戻る
document.addEventListener("DOMContentLoaded", function () {
    const scrollTopBtn = document.getElementById("scrollTopBtn");

    // ボタンをクリックするとトップへスムーズにスクロール
    scrollTopBtn.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});

// メニュー内のリンクをクリックしたらスムーズスクロール＆メニューを閉じる
navLinks.forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault(); // デフォルトのリンク動作を防ぐ
        const targetId = this.getAttribute("href").substring(1); // リンクのIDを取得
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({ behavior: "smooth" }); // スムーズスクロール
        }

        // メニューを閉じる
        hamburger.classList.remove("open");
        nav.classList.remove("open");
        blurOverlay.classList.remove("open");
    });
});
