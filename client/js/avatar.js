// Saving avatar customization in Firebase Realtime Database

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import { getDatabase, ref, set, get } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-database.js";

// Firebase config
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "yourproject.firebaseapp.com",
  projectId: "yourproject",
  storageBucket: "yourproject.appspot.com",
  messagingSenderId: "your_sender_id",
  appId: "your_app_id",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const saveAvatarBtn = document.getElementById('save-avatar-btn');

// Save avatar
saveAvatarBtn.addEventListener('click', () => {
  const avatarData = {
    head: document.getElementById('avatar-head').src,
    body: document.getElementById('avatar-body').src,
  };

  const userId = auth.currentUser.uid;
  set(ref(db, 'avatars/' + userId), avatarData)
    .then(() => {
      console.log('Avatar saved!');
    })
    .catch(error => {
      console.error('Error saving avatar:', error);
    });
});

// Load avatar
window.addEventListener('load', () => {
  const userId = auth.currentUser.uid;
  const avatarRef = ref(db, 'avatars/' + userId);
  get(avatarRef)
    .then(snapshot => {
      if (snapshot.exists()) {
        const avatarData = snapshot.val();
        document.getElementById('avatar-head').src = avatarData.head;
        document.getElementById('avatar-body').src = avatarData.body;
      } else {
        console.log("No avatar data available");
      }
    })
    .catch(error => {
      console.error("Error loading avatar:", error);
    });
});
