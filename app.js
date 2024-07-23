import { challengesEn, challengesEs } from "./challenges.js";
console.log(challengesEn, challengesEs);
// DOM variables
const profileElement = document.getElementById('profile');
const challengesElement = document.getElementById('challenges');
const tasksElement = document.getElementById('tasks');
const infoElement = document.getElementById('info');
const profileButton = document.getElementById('profile-button');
const challengesButton = document.getElementById('challenges-button');
const tasksButton = document.getElementById('tasks-button');
const infoButton = document.getElementById('info-button');
const englishButton = document.getElementById('english-button');
const spanishButton = document.getElementById('spanish-button');
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const userInfoDialog = document.getElementById("user-info-dialog");
const dialogInfoBtn = document.getElementById("info-done-btn");
const nameElement = document.getElementById("userName");
const emailElement = document.getElementById("userEmail");
const noUserInfo = document.getAnimations("no-user-info");
const addChallengeBtn = document.getElementById("add-challenge-button");
const addChallengeDialog = document.getElementById("add-challenge-dialog");
const closeChallengeDialogBtn = document.getElementById("close-challenge-dialog");
const challenge = document.getElementById("challenge");
const submitChallenge = document.getElementById("submit-challenge");
const mainElement = document.querySelector('main');
const challengesList = document.getElementById("challenges-list");
const tasksList = document.getElementById("tasks-list");

// local storage variables
const language = localStorage.getItem("language");
const username = localStorage.getItem("name");
const email = localStorage.getItem("email");
console.log(username, email)

// user variables
let userChallengesEn = JSON.parse(localStorage.getItem("challengesEn")) || [];
let userChallengesEs = JSON.parse(localStorage.getItem("challengesEs")) || [];
let userTasksEn = JSON.parse(localStorage.getItem("userTasksEn")) || [];
let userTasksEs = JSON.parse(localStorage.getItem("userTasksEs")) || [];
let userScore = 0;



const translations = {
    en: {
        create_account: "Create an account!",
        full_name: "Full Name",
        email: "Email",
        password: "Password",
        sign_up: "Sign-up",
        login: "Login",
        already_have_account: "Already have an account?",
        sign_in_google: "Sign in with Google",
        profile: "Profile",
        tasks: "Tasks",
        challenges: "Challenges",
        info: "Info",
        logout: "Logout",

        profile_head: "Profile",
        name_head: "Name: ",
        email_head: "Email: ",
        lang_head: "Select the language",
        social_head: "Follow us on Social Media",

        r5_head: "What are the 5R's?",
        r5_info: "The five R's: reduce, reuse, recycle, rethink, and refuse are a great way to implement small changes into your daily life and live more environmentally friendly and conscious.",
        reduce_summary: "Reduce",
        reduce_text: "Reduce means to minimize the amount of waste we create. Here are some easy ways to reduce your waste.",

        reuse_summary: "Reuse",
        reuse_text: "Reuse refers to using items more once. Here are some things you might not have considered to reuse.",
        recycle_summary: "Recycle",
        recycle_text: "Recycling means putting a product to a new use instead of throwing it away.",
        rethink_summary: "Rethink",
        rethink_text: "Rethink is a more general term that just means to rethink your consumption habits to minimize waste. Here some things to think about to help you live a lifestyle that supports a sustainable future.",
        refuse_summary: "Refuse",
        refuse_text: "Refuse refers to the act of refusing items that don’t help you commit to a sustainable future.",

        add_challenge_button: "Add +",
        challenges_head: "Challenges",
        tasks_head:"Tasks",
        tasks_text:"Here are your daily tasks",


    },
    es: {
        create_account: "¡Crea una cuenta!",
        full_name: "Nombre completo",
        email: "Correo electrónico",
        password: "Contraseña",
        sign_up: "Registrarse",
        login: "Iniciar sesión",
        already_have_account: "¿Ya tienes una cuenta?",
        sign_in_google: "Iniciar sesión con Google",
        profile: "Perfil",
        tasks: "Tareas",
        challenges: "Desafíos",
        info: "Info",
        logout: "Cerrar sesión",
        
        profile_head: "Perfil",
        name_head: "Nombre: ",
        email_head: "Correo: ",
        lang_head: "Selecciona el lenguaje",
        social_head: "Siguenos en Redes Sociales",

        r5_head: "¿Que son las cinco R?",
        r5_info: "Las cinco R: reducir, reutilizar, reciclar, repensar y rechazar son una excelente manera de implementar pequeños cambios en tu vida diaria y vivir de manera más respetuosa y consciente con el medio ambiente.",
        reduce_summary: "Reducir",
        reduce_text: "Reducir significa minimizar la cantidad de residuos que generamos. A continuación se muestran algunas formas sencillas de reducir sus residuos.",

        reuse_summary: "Reutilizar",
        reuse_text: "Reutilizar se refiere a usar elementos más una vez. Aquí hay algunas cosas que quizás no hayas considerado reutilizar.",
        recycle_summary: "Reciclar",
        recycle_text: "Reciclar significa darle un nuevo uso a un producto en lugar de tirarlo.",
        rethink_summary: "Repensar",
        rethink_text: "Repensar es un término más general que simplemente significa repensar sus hábitos de consumo para minimizar el desperdicio. Aquí algunas cosas en las que pensar para ayudarle a vivir un estilo de vida que respalde un futuro sostenible.",
        refuse_summary: "Rechazar",
        refuse_text: "Rechazar se refiere al acto de rechazar artículos que no le ayudan a comprometerse con un futuro sostenible.",

        add_challenge_button: "Añadir +",
        challenges_head: "Desafíos",
        tasks_head:"Tareas",
        tasks_text:"Aquí estan tus tareas del día de hoy",
    }
};



if (language){
    setLanguage(language);
}
else{
    setLanguage('en');
}

if ( !username || !email){
    userInfoDialog.showModal();
}
else{
    nameElement.innerText = username;
    emailElement.innerText = email;
}





function profileShow(){
    profileElement.classList.remove('hidden');

    tasksElement.classList.remove('hidden');
    challengesElement.classList.remove('hidden');
    infoElement.classList.remove('hidden');

    tasksElement.classList.add('hidden');
    challengesElement.classList.add('hidden');
    infoElement.classList.add('hidden');
}

function challengesShow(){
    challengesElement.classList.remove('hidden');

    tasksElement.classList.remove('hidden');
    profileElement.classList.remove('hidden');
    infoElement.classList.remove('hidden');

    tasksElement.classList.add('hidden');
    profileElement.classList.add('hidden');
    infoElement.classList.add('hidden');
}

function tasksShow(){
    tasksElement.classList.remove('hidden');

    profileElement.classList.remove('hidden');
    challengesElement.classList.remove('hidden');
    infoElement.classList.remove('hidden');

    profileElement.classList.add('hidden');
    challengesElement.classList.add('hidden');
    infoElement.classList.add('hidden');
}

function infoShow(){
    infoElement.classList.remove('hidden');

    tasksElement.classList.remove('hidden');
    challengesElement.classList.remove('hidden');
    profileElement.classList.remove('hidden');

    tasksElement.classList.add('hidden');
    challengesElement.classList.add('hidden');
    profileElement.classList.add('hidden');
}

function updateDateTime() {
    const now = new Date();

    // Options for the date formatting
    const dateOptions = {  
        year: 'numeric', 
        month: 'numeric', 
        day: 'numeric' 
    };
    
    // Format the date
    const formattedDate = now.toLocaleDateString('en-US', dateOptions);

    // Get the time in hours and minutes
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const formattedTime = `${hours}:${minutes}`;

    // Update the HTML content
    document.getElementById('dateDisplay').textContent = formattedDate;
    document.getElementById('timeDisplay').textContent = formattedTime;
}


function setLanguage(lang) {
    loadTranslations(lang);
}

function loadTranslations(lang) {
    const currentTranslations = translations[lang];

   
    document.getElementById('profile-head').innerText=currentTranslations.profile_head;
    document.getElementById('lang-head').innerText = currentTranslations.lang_head;
    document.getElementById('social-head').innerText = currentTranslations.social_head;
    document.getElementById('name-head').innerText = currentTranslations.name_head;
    document.getElementById('email-head').innerText = currentTranslations.email_head;

    document.getElementById('r5-head').innerText=currentTranslations.r5_head;
    document.getElementById('r5-info').innerText=currentTranslations.r5_info;
    document.getElementById('reduce-summary').innerText=currentTranslations.reduce_summary;
    document.getElementById('reduce-text').innerText=currentTranslations.reduce_text;

    document.getElementById('reuse-summary').innerText=currentTranslations.reuse_summary;
    document.getElementById('recycle-summary').innerText=currentTranslations.recycle_summary;
    document.getElementById('rethink-summary').innerText=currentTranslations.rethink_summary;
    document.getElementById('refuse-summary').innerText=currentTranslations.refuse_summary;

    document.getElementById('reuse-text').innerText=currentTranslations.reuse_text;
    document.getElementById('recycle-text').innerText=currentTranslations.recycle_text;
    document.getElementById('rethink-text').innerText=currentTranslations.rethink_text;
    document.getElementById('refuse-text').innerText=currentTranslations.refuse_text;

    document.getElementById('add-challenge-button').innerText=currentTranslations.add_challenge_button;
    document.getElementById('challenges-head').innerText=currentTranslations.challenges_head;
    document.getElementById('tasks-head').innerText=currentTranslations.tasks_head;
    document.getElementById('tasks-text').innerText=currentTranslations.tasks_text;
}

function setNameEmail(event){
    event.preventDefault()
    if (nameInput.checkValidity() && emailInput.checkValidity()) {
        localStorage.setItem("name", nameInput.value);
        localStorage.setItem("email", emailInput.value);
        userInfoDialog.close();
    } else {
        noUserInfo.innerText = "Please enter yout information";
        // Enfocar el primer campo inválido si la validación falla
        if (!nameInput.checkValidity()) {
            nameInput.focus();
        } else {
            emailInput.focus();
        }
    }
}

function dialogChallenge(){
    mainElement.classList.toggle('hidden');
    addChallengeDialog.showModal();

}
function closeChallengeDialog() {
    mainElement.classList.toggle('hidden');
    addChallengeDialog.close();
}

function addChallenge(){
    const challengeObjEn = challengesEn.find((item) => item.id === challenge.value);
    userChallengesEn.push(challengeObjEn);
    localStorage.setItem("challengesEn", (JSON.stringify(userChallengesEn)));

    const challengeObjEs = challengesEs.find((item) => item.id === challenge.value);
    userChallengesEs.push(challengeObjEs);
    localStorage.setItem("challengesEs", (JSON.stringify(userChallengesEs)));
}

function showChallenges(){
    challengesList.innerHTML = "";
    tasksList.innerHTML = ""
    
    if (language === "es"){
        console.log("userChallengesEs:", userChallengesEs); // Debugging output
        userChallengesEs.filter(obj => obj && obj.title).forEach((object) => {
            console.log("Processing challenge:", object); // Debugging output
            challengesList.innerHTML += `
                <li>
                    <div class="challenges-icons">
                        <p><i class="fa-solid fa-rocket fa-2xl"></i></p>
                    </div>
                    <div class="challenges-info">
                        <p class="challenges-title">${object.title}</p>
                        <p class="challenges-date">Fecha de inicio: ${object.startdate}</p>
                        <progress max="100" min="0" class="challenges-progress-bar" value="${object.progress}">20%</progress>
                        <details>
                            <summary>mostrar mas</summary>
                            ${object.description}
                        </details>
                    </div>
                </li>
            `;

            object.tasks.filter(task => task && task.title).forEach((task) => {
                console.log("Processing task:", task); // Debugging output
                tasksList.innerHTML += `
                    <li>
                        <div class="challenges-icons">
                            <p><i class="fa-solid fa-flag fa-xl"></i></p>
                        </div>
                        <div class="tasks-info">
                            <p class="task-title" id=""> ${task.title} reutilizables</p>
                            <p class="task-challenge" id=""> ${object.title} </p>
                            <details class="task-details">
                                <summary class="task-summary">mostrar mas</summary>
                                <p class="task-description" id=""> ${task.description} </p>
                                <p class="task-description" id="">Status: ${task.status} </p>
                            </details>
                        </div>
                        <div class="task-checkbox-div">
                            <input type="checkbox" name="" id="" class="task-check-input">
                        </div>
                    </li>
                `;
            });
        });
  
    }else{
        console.log("userChallengesEn:", userChallengesEn); // Debugging output
        userChallengesEn.filter(obj => obj && obj.title).forEach((object) => {
            console.log("Processing challenge:", object); // Debugging output
            challengesList.innerHTML += `
                <li>
                    <div class="challenges-icons">
                        <p><i class="fa-solid fa-rocket fa-2xl"></i></p>
                    </div>
                    <div class="challenges-info">
                        <p class="challenges-title">${object.title}</p>
                        <p class="challenges-date">Start date: ${object.startdate}</p>
                        <progress max="100" min="0" class="challenges-progress-bar" value="${object.progress}">20%</progress>
                        <details>
                            <summary>show more</summary>
                            ${object.description}
                        </details>
                    </div>
                </li>
            `;
            object.tasks.filter(task => task && task.title).forEach((task) => {
                console.log("Processing task:", task); // Debugging output
                tasksList.innerHTML += `
                    <li>
                        <div class="challenges-icons">
                            <p><i class="fa-solid fa-flag fa-xl"></i></p>
                        </div>
                        <div class="tasks-info">
                            <p class="task-title" id=""> ${task.title} reutilizables</p>
                            <p class="task-challenge" id=""> ${object.title} </p>
                            <details class="task-details">
                                <summary class="task-summary">Show More</summary>
                                <p class="task-description" id=""> ${task.description} </p>
                                <p class="task-description" id="">Status: ${task.status} </p>
                            </details>
                        </div>
                        <div class="task-checkbox-div">
                            <input type="checkbox" name="" id="" class="task-check-input">
                        </div>
                    </li>
                `;
            });
        });
    }
};

function setTasks(){
    userChallengesEn.forEach(object => {
        userTasksEn.push
    })
}

// show user's challenges in html
console.log(`userChallengesEn =`);
console.log(userChallengesEn);
showChallenges();

// Initial update
updateDateTime();

// Update the time every minute
setInterval(updateDateTime, 60000);

profileButton.addEventListener("click", profileShow);
challengesButton.addEventListener("click", challengesShow);
tasksButton.addEventListener("click", tasksShow);
infoButton.addEventListener("click", infoShow);
addChallengeBtn.addEventListener("click", dialogChallenge);
closeChallengeDialogBtn.addEventListener("click", closeChallengeDialog);
submitChallenge.addEventListener("click", addChallenge);
dialogInfoBtn.addEventListener("click", setNameEmail);
englishButton.addEventListener("click", () => {
    localStorage.setItem("language" , "en");
    setLanguage('en');
    location.reload();
});
spanishButton.addEventListener("click", () => {
    localStorage.setItem("language" , "es");
    setLanguage('es');
    location.reload();
});


