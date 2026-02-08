import { initAuth, changeMyName } from './auth.js';
import { sendMsg, listenMessages } from './chat.js';

let currentUser = null;

initAuth((user) => {
    currentUser = user;
    // Kullanıcı giriş yapınca 'genel' kanalı dinlemeye başla
    listenMessages("genel#0001", (msgs) => {
        renderMessages(msgs); // Mesajları ekrana basan fonksiyonun
    });
});

// Kullanıcı adı değiştirme butonu tetikleyicisi
document.getElementById('saveProfileBtn').addEventListener('click', () => {
    const newName = document.getElementById('newUserNameInput').value;
    changeMyName(newName);
});

