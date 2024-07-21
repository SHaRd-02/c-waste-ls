import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider, signOut, signInWithPopup, updateProfile } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const auth = getAuth();
const provider = new GoogleAuthProvider();

const emailElement = document.getElementById('email');
const passwordElement = document.getElementById('password');
const buttonSignupElement = document.getElementById('buttonSignup');
const buttonLoginElement = document.getElementById('buttonLogin');
const buttonGoogleElement = document.getElementById('buttonGoogle');
const logoutElement = document.getElementById('logout');
const userNameElement = document.getElementById('userName');
const userEmailElement = document.getElementById('userEmail');
const signUpAndLoginElement = document.getElementById('signUpAndLogin');
const tasksElement = document.getElementById('tasks');
const mainElement = document.getElementById('main');
const navbarElement = document.getElementById('navbar');
const fullNameElement = document.getElementById('full-name');

const signUpButtonPressed = async (e) => {
    e.preventDefault();

    try {
        const userCredential = await createUserWithEmailAndPassword(
            auth,
            emailElement.value,
            passwordElement.value
        );

        // Update profile to add display name
        await updateProfile(userCredential.user, {
            displayName: fullNameElement.value
        });

        // Fetch the updated user data
        const updatedUser = getAuth().currentUser;

        console.log("User profile updated:", updatedUser.displayName);
        console.log(userCredential);

    } catch (error) {
        console.log(error.code);
    }
};

const loginButtonPressed = async (e) => {
    e.preventDefault();

    try {
        const userCredential = await signInWithEmailAndPassword(
            auth,
            emailElement.value,
            passwordElement.value
        );

        console.log(userCredential);

    } catch (error) {
        console.log(error.code);
    }
};

const googleSignInButtonPressed = async () => {
    try {
        const result = await signInWithPopup(auth, provider);
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        console.log(user);
    } catch (error) {
        console.log(error.code);
    }
};

const logoutButtonPressed = async () => {
    try {
        await signOut(auth);
        console.log('Sign-out successful.');
        mainElement.classList.add('hidden');
        navbarElement.classList.add('hidden');
        signUpAndLoginElement.classList.remove('hidden');
    } catch (error) {
        console.log(error.code);
    }
};

onAuthStateChanged(auth, (user) => {
    if (user) {
        // Usuario autenticado
        console.log('User signed in:', user.displayName);
        signUpAndLoginElement.classList.add('hidden');
        mainElement.classList.remove('hidden');
        navbarElement.classList.remove('hidden');
        userNameElement.innerText = user.displayName;
        userEmailElement.innerText = user.email;
    } else {
        // Usuario no autenticado
        console.log('No user signed in.');
    }
});

buttonSignupElement.addEventListener("click", signUpButtonPressed);
buttonLoginElement.addEventListener("click", loginButtonPressed);
buttonGoogleElement.addEventListener("click", googleSignInButtonPressed);
logoutElement.addEventListener("click", logoutButtonPressed);
