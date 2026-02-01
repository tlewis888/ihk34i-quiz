// firebase.js — EGYSZERŰ, COMPAT VERZIÓ (EZ KELL NEKED)

const firebaseConfig = {
  apiKey: "AIzaSyDi3eH4Km5Wh-eL-T2263BWTjt5wtxMa_Q",
  authDomain: "ihk34i-quiz.firebaseapp.com",
  projectId: "ihk34i-quiz",
  storageBucket: "ihk34i-quiz.firebasestorage.app",
  messagingSenderId: "760305016875",
  appId: "1:760305016875:web:45c1afa6a731e75c020a6e"
};

// Firebase indítás
firebase.initializeApp(firebaseConfig);

// Globális elérés
window.auth = firebase.auth();
window.db = firebase.firestore();

// Login állapot figyelése
auth.onAuthStateChanged(user => {
  const status = document.getElementById("authStatus");
  if (!status) return;

  if (user) {
    status.innerText = "Bejelentkezve: " + user.email;
  } else {
    status.innerText = "Nincs bejelentkezve.";
  }
});

// REGISZTRÁCIÓ
window.register = async function () {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!email || !password) {
    alert("Írd be az emailt és a jelszót.");
    return;
  }

  try {
    await auth.createUserWithEmailAndPassword(email, password);
    alert("Sikeres regisztráció!");
  } catch (e) {
    alert(e.message);
  }
};

// BELÉPÉS
window.login = async function () {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!email || !password) {
    alert("Írd be az emailt és a jelszót.");
    return;
  }

  try {
    await auth.signInWithEmailAndPassword(email, password);
  } catch (e) {
    alert(e.message);
  }
};

// KILÉPÉS
window.logout = async function () {
  await auth.signOut();
};
