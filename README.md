# README from the original repository
# 📜 _Email Sent_ - Elden Ring Extension
An Elden Ring–inspired Chrome extension that makes sending emails more epic.  
When you hit **Send** in Gmail or Outlook Web, a dramatic banner appears with sound, just like in the Lands Between. ⚔️

---

## 🚀 Features
- 📨 Works on **Gmail** and **Outlook Web**  
- 📜 Elden Ring–style banner on email sent  
- 🎵 Sound effect included  
- 🗡 Custom medieval-style icon
- 🎨 Choose the color of your banner

---

<img width="1440" height="678" alt="Screenshot 2025-08-26 at 10 44 48" src="https://github.com/user-attachments/assets/9527aa19-a714-4f5b-af28-ae552a788465" />

---

## 🔧 Installation

> ⚠️ **Recommended:**  
> You can easily install Elden Email directly from the [Chrome Web Store](https://chromewebstore.google.com/detail/elden-email/bjaildeadgclghcjhocdbginfpjihmgm) or other browser extension stores. 
> This way, you’ll automatically receive updates and bug fixes.

> **Manual installation (not recommended):**  
> If you prefer to install it locally (for development or curiosity), follow these steps:

1. **Download** this project (clone or `.zip` extract).
2. Open your browser and go to: `chrome://extensions/`
3. Enable **Developer Mode** (top right toggle).
4. Click **Load unpacked** and select the project folder.
5. Done! Try sending an email.

> **Note:**  
> Manually installed extensions do not receive automatic updates. For the best experience, use the official store version.

---

## 📂 Project Structure
├── manifest.json       # Extension manifest<br>
├── content.js          # Core script (banner logic)<br>
├── style.css           # Styles for banner<br>
├── popup.html          # Pop up <br>
├── popup.css           # Pop up style <br>
├── popup.js            # Pop up logic <br>
├── privacy_policy.md   # Privacy <br>
├── README.md           # Rules and info <br>
└── assets/             # Icons and sound<br> 

---

## 🌍 Language Support
As promised, now the extension supports the following languages for the Send button:

- 🇮🇹 Italian (`Invia`)
- 🇬🇧 English (`Send`)
- 🇨🇳 Chinese (`发送` / `傳送`)
- 🇯🇵 Japanese (`送信`)
- 🇰🇷 Korean (`보내기`)
- 🇪🇸 Spanish (`Enviar`)
- 🇩🇪 German (`Senden`)
- 🇫🇷 French (`Envoyer`)
- 🇷🇺 Russian (`Отправить`)
- 🇸🇦 Arabic (`إرسال`)
- 🇹🇭 Thai (`ส่ง`)
- 🇸🇪 Swedish (`Skicka`)

If your language isn’t listed, don't hesitate to contact me!

---

## 🖥️ Browser Compatibility & Installation

Elden Email is designed to work not only on Chrome, but also on the most popular browsers thanks to their support for Chrome extensions and the WebExtensions standard.

### 🌐 Chrome
- **Recommended:** Search for “Elden Email” on the Chrome Web Store and install in one click.
- **Manual:** See instructions above, but the official store version is preferred for automatic updates.

### 🟦 Edge
- **Compatibility:** Microsoft Edge supports Chrome extensions almost 100%.
- **How to Install:**  
  - Visit [Microsoft Edge Add-ons](https://microsoftedge.microsoft.com/addons).
  - Search for “Elden Email” and install directly from the store.

### 🟥 Opera
- **Compatibility:** Opera supports Manifest V2/V3 extensions.
- **How to Install:**  
  - Go to [Opera Add-ons](https://addons.opera.com).
  - Search for “Elden Email” and install from the store.

### 🟧 Firefox
- **Compatibility:** Firefox uses the “WebExtensions” system, very similar to Chrome’s.
- **How to Install:**  
> easier steps will come!! just need to bring everything to mozilla!
  - Visit [Firefox Add-ons](https://addons.mozilla.org).
  - Search for “Elden Email” and install from the store.
  - If you are publishing, note:
    - Some APIs differ (`chrome.*` → `browser.*`).
    - Images must be listed in `web_accessible_resources` with a slightly different format.
    - Some functions may need a [webextension-polyfill](https://github.com/mozilla/webextension-polyfill).
    - If you get errors, consult the [MDN migration guide](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities).

### 🟩 Brave, Vivaldi, and other Chromium Browsers
- **Compatibility:** Full support for Chrome extensions.
- **How to Install:**  
  - Search for “Elden Email” on the Chrome Web Store and install directly.
  - No manual installation required.


> **Note:**  
> For all supported browsers, once the extension is published in their respective stores, you should always install it from the official store to receive updates and the best experience.  
> Manual installation via ZIP is only recommended for development or testing and does **not** provide automatic updates.

---

## ⚠️ Known Issues
You may need to refresh the page when you leave it open for a long time before it works. 

---

## 🛡️ Privacy
Elden Email does **not** collect, transmit, or share any personal information.  
User preferences for banner color and sound are saved only locally (using Chrome storage).  
No email contents, personal data, or browsing history are accessed or stored.

See the [Privacy Policy](./PRIVACY_POLICY.md) for more details.

---

## 💖 Support the Project
If you enjoy this little project and want to support its development, consider buying me a coffee <3 it would be insanely appreciated.  
Your support helps me add more languages, sounds, and customization features!

[![Donate via Ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/mettignis)

---

## ✨ Credits
Inspired by **Elden Ring** (FromSoftware).<br>
Thanks to https://rezuaq.be/new-area/image-creator/ for the images.

Created just for fun.  

