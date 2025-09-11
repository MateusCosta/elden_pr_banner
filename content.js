
console.log("Elden PR Banner content.js loaded!");

// pre-load the sound file
const soundUrl = chrome.runtime.getURL("assets/elden_ring_sound.mp3");

// dictionary of "Send" keywords in various languages
const keywords = ["Create pull request"];

// default settings
let soundEnabled = true;
let bannerColor = "yellow";

// load settings on startup
chrome.storage.sync.get(["soundEnabled", "bannerColor"], (prefs) => {
    soundEnabled = prefs.soundEnabled !== false;
    bannerColor = prefs.bannerColor || "yellow";
});

// update in real-time the settings if changed from the popup
chrome.storage.onChanged.addListener((changes) => {
    if (changes.soundEnabled) {
        soundEnabled = changes.soundEnabled.newValue !== false;
    }
    if (changes.bannerColor) {
        bannerColor = changes.bannerColor.newValue || "yellow";
    }
});


function showEldenRingBanner() {

    const banner = document.createElement('div');
    banner.id = 'elden-ring-banner';
    const imgPath = chrome.runtime.getURL(`assets/pr_created_${bannerColor}.png`);
    banner.innerHTML = `<img src="${imgPath}" alt="Email Sent">`;
    document.body.appendChild(banner);

    if (soundEnabled) {
        const audio = new Audio(soundUrl);
        audio.volume = 0.35;
        audio.play().catch(err => console.error("Errore nel suono:", err));
    }

    setTimeout(() => banner.classList.add('show'), 50);
    setTimeout(() => {
        banner.classList.remove('show');
        setTimeout(() => banner.remove(), 500);
    }, 3000);
}

// github observer
const githubObserver = new MutationObserver(() => {

    document.querySelectorAll('.hx_create-pr-button').forEach(btn => {

       const span = btn.children[0];
       const spanText = span ? (span.innerText || "").trim() : "";

        const isSendBtn = keywords.some(k =>
            spanText.toLowerCase().startsWith(k.toLowerCase())
        );

        if (isSendBtn && !btn.dataset.eldenRingAttached) {

            const DELAY_MS = 500;
          
            btn.addEventListener('click', (e) => {
              if (btn.dataset.skipInterceptor === '1') {
                delete btn.dataset.skipInterceptor;
                return;
              }
          
              e.stopImmediatePropagation();
          
              setTimeout(() => {
                showEldenRingBanner();
          
                btn.dataset.skipInterceptor = '1';
          
              }, DELAY_MS);

              setTimeout(() => {
                btn.click();
              }, 3000);
            }, true); 
          
            btn.dataset.eldenRingAttached = 'true';
          }
    });
});


githubObserver.observe(document.body, { childList: true, subtree: true });
