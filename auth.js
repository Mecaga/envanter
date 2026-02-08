
import { auth } from './firebase-config.js';
import { 
    signInWithEmailAndPassword, 
    createUserWithEmailAndPassword, 
    updateProfile, 
    onAuthStateChanged 
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// Kullanıcı Adı Güncelleme Fonksiyonu
export async function changeMyName(newName) {
    if (auth.currentUser) {
        try {
            await updateProfile(auth.currentUser, { displayName: newName });
            alert("Kullanıcı adınız güncellendi!");
            location.reload(); // Arayüzü yenile
        } catch (error) {
            console.error("Hata:", error);
        }
    }
}

// Giriş Durumu Takibi
export function initAuth(callback) {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            document.getElementById('authScreen').style.display = 'none';
            document.getElementById('mainApp').style.display = 'flex';
            document.getElementById('displayUserName').textContent = user.displayName || user.email;
            callback(user);
        } else {
            document.getElementById('authScreen').style.display = 'flex';
            document.getElementById('mainApp').style.display = 'none';
        }
    });
}
