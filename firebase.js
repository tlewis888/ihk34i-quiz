// firebase.js — COMPAT (GitHub Pages / sima <script> módban működik)

const firebaseConfig = {
  apiKey: "AIzaSyDi3eH4Km5Wh-eL-T2263BWTjt5wtxMa_Q",
  authDomain: "ihk34i-quiz.firebaseapp.com",
  projectId: "ihk34i-quiz",
  storageBucket: "ihk34i-quiz.appspot.com",
  messagingSenderId: "760305016875",
  appId: "1:760305016875:web:45c1afa6a731e75c020a6e"
};

// Ne inicializáld kétszer!
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();
const db = firebase.firestore();

window.auth = auth;
window.db = db;

function setAuthStatus(text, ok = true) {
  const el = document.getElementById("authStatus");
  if (!el) return;
  el.textContent = text;
  el.classList.toggle("bad", !ok);
}

auth.onAuthStateChanged(user => {
  if (user) {
    setAuthStatus("✅ " + user.email, true);
  } else {
    setAuthStatus("🔒 nicht eingeloggt (lokal)", true);
  }
});

// REGISZTRÁCIÓ
window.register = async function () {
  const email = document.getElementById("email")?.value.trim();
  const password = document.getElementById("password")?.value.trim();

  if (!email || !password) return alert("Bitte Email + Passwort eingeben.");
  if (password.length < 6) return alert("Passwort: mindestens 6 Zeichen.");

  try {
    await auth.createUserWithEmailAndPassword(email, password);
    alert("✅ Registrierung erfolgreich!");
  } catch (e) {
    alert(e.message);
  }
};

// BELÉPÉS
window.login = async function () {
  const email = document.getElementById("email")?.value.trim();
  const password = document.getElementById("password")?.value.trim();

  if (!email || !password) return alert("Bitte Email + Passwort eingeben.");

  try {
    await auth.signInWithEmailAndPassword(email, password);
  } catch (e) {
    alert(e.message);
  }
};

// KILÉPÉS
window.logout = async function () {
  try {
    await auth.signOut();
  } catch (e) {
    alert(e.message);
  }
};

/* -------------------------------------------------------
   Firestore helper: eredmények mentése user alá
   ------------------------------------------------------- */
window.saveAttemptToCloud = async function (attempt) {
  const user = auth.currentUser;
  if (!user) return false;

  // attempt: { mode, score, total, percent, durationSec, categoryBreakdown, ts }
  const ref = db.collection("users").doc(user.uid).collection("attempts");
  await ref.add(attempt);
  return true;
};

window.loadAttemptsFromCloud = async function (limit = 50) {
  const user = auth.currentUser;
  if (!user) return [];

  const snap = await db
    .collection("users").doc(user.uid)
    .collection("attempts")
    .orderBy("ts", "desc")
    .limit(limit)
    .get();

  return snap.docs.map(d => d.data());
};
