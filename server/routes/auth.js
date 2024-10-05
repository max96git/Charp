// Import Firebase
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { firebaseConfig } from '../../database/config';

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Handle Login
document.getElementById('login-form')?.addEventListener('submit', async (event) => {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorDiv = document.getElementById('login-error');

    try {
        await signInWithEmailAndPassword(auth, email, password);
        window.location.href = 'dashboard.html';
    } catch (error) {
        errorDiv.textContent = error.message;
    }
});

// Handle Sign Up
document.getElementById('signup-form')?.addEventListener('submit', async (event) => {
    event.preventDefault();
    
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const errorDiv = document.getElementById('signup-error');

    try {
        await createUserWithEmailAndPassword(auth, email, password);
        // Redirect to dashboard or other page after signup
        window.location.href = 'dashboard.html';
    } catch (error) {
        errorDiv.textContent = error.message;
    }
});
