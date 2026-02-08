import { db } from './firebase-config.js';
import { 
    collection, 
    addDoc, 
    query, 
    orderBy, 
    onSnapshot, 
    serverTimestamp 
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// Mesaj Gönder
export async function sendMsg(channelId, senderName, text) {
    await addDoc(collection(db, "messages"), {
        channelId: channelId,
        author: senderName,
        text: text,
        timestamp: serverTimestamp()
    });
}

// Mesajları Dinle (Anlık Eşitleme)
export function listenMessages(channelId, callback) {
    const q = query(
        collection(db, "messages"), 
        orderBy("timestamp", "asc")
    );
    
    onSnapshot(q, (snapshot) => {
        const msgs = [];
        snapshot.forEach((doc) => {
            if(doc.data().channelId === channelId) {
                msgs.push(doc.data());
            }
        });
        callback(msgs);
    });
}


