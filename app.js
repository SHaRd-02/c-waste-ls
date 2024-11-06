import { challengesEn, challengesEs } from "./challenges.js";
import { translations } from "./translations.js";
//console.log(challengesEn, challengesEs);
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
const addChallengeError = document.getElementById("add-challenge-error-message");
const refreshBtn = document.getElementById("refresh-btn");
//temporary
const challengeIdInput = document.getElementById('challenge-id-input');
const taskIdInput= document.getElementById('task-id-input');
const deleteTaskBtn = document.getElementById('delete-task-btn');
const tempTabBtn = document.getElementById("placeholder-button");
const tempTab = document.getElementById("temp-tab");

// local storage variables
const language = localStorage.getItem("language");
const username = localStorage.getItem("name");
const email = localStorage.getItem("email");
//console.log(username, email)

// user variables
let userChallengesEn = JSON.parse(localStorage.getItem("challengesEn")) || [];
let userChallengesEs = JSON.parse(localStorage.getItem("challengesEs")) || [];
let  todayTasksEn = JSON.parse(localStorage.getItem("todayTasksEn")) || [];
let  todayTasksEs = JSON.parse(localStorage.getItem("todayTasksEs")) || [];
let userScore = 0;

//Date and time variables 
let currentDate = "";
let previousDate = localStorage.getItem("previousDate") || "";




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
    tempTab.classList.remove('hidden');

    tasksElement.classList.add('hidden');
    challengesElement.classList.add('hidden');
    infoElement.classList.add('hidden');
    tempTab.classList.add('hidden');
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
    tempTab.classList.remove('hidden');

    tasksElement.classList.add('hidden');
    challengesElement.classList.add('hidden');
    profileElement.classList.add('hidden');
    tempTab.classList.add('hidden');
}

function tempShow(){
    tempTab.classList.remove('hidden');

    tasksElement.classList.remove('hidden');
    challengesElement.classList.remove('hidden');
    infoElement.classList.remove('hidden');
    profileElement.classList.remove('hidden');

    tasksElement.classList.add('hidden');
    challengesElement.classList.add('hidden');
    infoElement.classList.add('hidden');
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
    currentDate = formattedDate;
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
    event.preventDefault();
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
    addChallengeError.classList.toggle('hidden');
    mainElement.classList.toggle('hidden');
    addChallengeDialog.close();
}

function addChallenge(event) {
    event.preventDefault();

    const challengeId = challenge.value;

    // Check if the challenge is already in userChallengesEn or userChallengesEs
    const isChallengeEnExists = userChallengesEn.some(item => item.id === challengeId);
    const isChallengeEsExists = userChallengesEs.some(item => item.id === challengeId);

    if (isChallengeEnExists || isChallengeEsExists) {
        language === 'es' ? addChallengeError.innerText = "Ya has aceptado ese desafio, favor de escoger otro" : addChallengeError.innerText = "Challenge already accepted, please choose another one";
        addChallengeError.classList.toggle('hidden');
        return; // Exit the function if challenge already exists
    }

    // Find the challenge object from the challengesEn and challengesEs arrays
    const challengeObjEn = challengesEn.find((item) => item.id === challengeId);
    const challengeObjEs = challengesEs.find((item) => item.id === challengeId);

    if (challengeObjEn) {
        challengeObjEn.startdate = currentDate;
        userChallengesEn.push(challengeObjEn);
        localStorage.setItem("challengesEn", JSON.stringify(userChallengesEn));
        console.log('ChallengesEn:', userChallengesEn);
    }

    if (challengeObjEs) {
        challengeObjEs.startdate = currentDate;
        userChallengesEs.push(challengeObjEs);
        localStorage.setItem("challengesEs", JSON.stringify(userChallengesEs));
        console.log('ChallengesEs:', userChallengesEs);
    }

    fillTodayTasks(); // Llama a fillTodayTasks después de añadir un nuevo desafío
    closeChallengeDialog();
    showChallenges();
};

function showChallenges() {
    challengesList.innerHTML = "";
    tasksList.innerHTML = ""; // Clear the tasks list

    if (language === "es") {
        //console.log("userChallengesEs:", userChallengesEs); // Debugging output
        userChallengesEs.filter(obj => obj && obj.title).forEach((object) => {
            //console.log("Processing challenge:", object); // Debugging output
            challengesList.innerHTML += `
                <li id="${object.id}">
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
        });

        try{
            // Display tasks from todayTasksEs
        todayTasksEs.filter(task => task && task.title).forEach((task) => {
            //console.log("Processing task:", task); // Debugging output
            tasksList.innerHTML += `
                 <li id="${task.id}">
                        <div class="challenges-icons">
                            <p><i class="fa-solid fa-flag fa-xl"></i></p>
                        </div>
                        <div class="tasks-info">
                            <p class="task-title">${task.title}</p>
                            <p class="task-challenge">${task.challengeTitle}</p>
                            <details class="task-details">
                                <summary class="task-summary">mostrar mas</summary>
                                <p class="task-description">${task.description}</p>
                                <p class="task-description">Status: ${task.status}</p>
                            </details>
                        </div>
                        <div class="task-checkbox-div">
                            <input type="checkbox" 
                                class="task-check-input" 
                                data-task-id="${task.id}" 
                                data-object-id="${object.id}">
                        </div>
                    </li>
            `;
        });
        }catch(error){
            console.log(error);
            tasksList.innerText = error;
        };

    } else {
        console.log("userChallengesEn:", userChallengesEn); // Debugging output
        userChallengesEn.filter(obj => obj && obj.title).forEach((object) => {
            //console.log("Processing challenge:", object); // Debugging output
            challengesList.innerHTML += `
                <li id="${object.id}">
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
            // Display tasks from todayTasksEn
            todayTasksEn.filter(task => task && task.title).forEach((task) => {
                //console.log("Processing task:", task); // Debugging output
                tasksList.innerHTML += `
                    <li id="${task.id}">
                        <div class="challenges-icons">
                            <p><i class="fa-solid fa-flag fa-xl"></i></p>
                        </div>
                        <div class="tasks-info">
                            <p class="task-title">${task.title}</p>
                            <p class="task-challenge">${task.challengeTitle}</p>
                            <details class="task-details">
                                <summary class="task-summary">show more</summary>
                                <p class="task-description">${task.description}</p>
                                <p class="task-description">Status: ${task.status}</p>
                            </details>
                        </div>
                        <div class="task-checkbox-div">
                            <input type="checkbox" 
                                class="task-check-input" 
                                data-task-id="${task.id}" 
                                data-object-id="${object.id}">
                        </div>
                    </li>
                `;
            });
        });
  
        
    }
};

function registerTaskCompletion(challengeId, taskId) {
    console.log("Tarea siendo registrada");

    // Función para actualizar el progreso del desafío
    const updateChallengeProgress = (challenge, tasksArray, lang) => {
        if (!challenge) return;

        // Encuentra la tarea dentro de todayTasks
        const taskIndex = tasksArray.findIndex(task => task.id === taskId);
        if (taskIndex === -1) return;

        // Elimina la tarea completada de todayTasks
        console.log(`Eliminando ${taskId}, indice ${taskIndex}`);
        tasksArray.splice(taskIndex, 1);

        // Calcula el nuevo progreso
        const newProgress = Math.min(challenge.progress + (100 / challenge.duration), 100);
        console.log(` nuevo progreso: ${newProgress}`);

        // Verifica si el progreso es 100% o más para marcar el desafío como completado
        if (newProgress >= 100) {
            challenge.status = "completed";
        }

        // Actualiza el progreso del desafío
        challenge.progress = newProgress;

        // Actualiza el almacenamiento local
        if (lang === 'en') {
            localStorage.setItem("todayTasksEn", JSON.stringify(todayTasksEn));
            localStorage.setItem("challengesEn", JSON.stringify(userChallengesEn));
        } else {
            localStorage.setItem("todayTasksEs", JSON.stringify(todayTasksEs));
            localStorage.setItem("challengesEs", JSON.stringify(userChallengesEs));
        }
    };

    // Actualiza el desafío en inglés
    userChallengesEn.forEach(challenge => {
        if (challenge.id === challengeId) {
            updateChallengeProgress(challenge, todayTasksEn, 'en');
        }
    });

    // Actualiza el desafío en español
    userChallengesEs.forEach(challenge => {
        if (challenge.id === challengeId) {
            updateChallengeProgress(challenge, todayTasksEs, 'es');
        }
    });

    // Refresca la visualización de desafíos
    showChallenges();
    console.log("today's tasks");
    console.log(todayTasksEs);
    console.log(todayTasksEn);
    console.log("user challenges");
    console.log(userChallengesEn);
    console.log(userChallengesEs);
};


function checkDay() {
    if (previousDate === "") {
        previousDate = currentDate;
        localStorage.setItem("previousDate", previousDate);
        return false;
    } else if (previousDate !== currentDate && currentDate !== "") {
        previousDate = currentDate;
        localStorage.setItem("previousDate", previousDate);
        fillTodayTasks(); // Llama a fillTodayTasks cuando es un nuevo día
        return true;
    } else {
        return false;
    }
};

function fillTodayTasks() {
    // Vaciar todayTasksEn y todayTasksEs antes de llenarlos nuevamente
    todayTasksEn = [];
    todayTasksEs = [];

    // Recorrer los desafíos en inglés
    userChallengesEn.forEach(item => {
        if (item.status !== "completed") {
            item.tasks.forEach(task => {
                todayTasksEn.push({
                    challengeId: item.id,
                    challengeTitle: item.title,
                    ...task
                });
            });
        }
    });
    localStorage.setItem("todayTasksEn", JSON.stringify(todayTasksEn));

    // Recorrer los desafíos en español
    userChallengesEs.forEach(item => {
        if (item.status !== "completed") {
            item.tasks.forEach(task => {
                todayTasksEs.push({
                    challengeId: item.id,
                    challengeTitle: item.title,
                    ...task
                });
            });
        }
    });
    localStorage.setItem("todayTasksEs", JSON.stringify(todayTasksEs));
};

// show user's challenges in html
//console.log(`userChallengesEn =`);
//console.log(userChallengesEn);
console.log('todayTasksEn: ',todayTasksEn);
console.log('todayTasksEs: ', todayTasksEs);
showChallenges();


// Initial update
updateDateTime();
checkDay();
// Update the time every minute
setInterval(updateDateTime, 60000);

profileButton.addEventListener("click", profileShow);
challengesButton.addEventListener("click", challengesShow);
tasksButton.addEventListener("click", tasksShow);
infoButton.addEventListener("click", infoShow);
tempTabBtn.addEventListener("click", tempShow);
addChallengeBtn.addEventListener("click", dialogChallenge);
closeChallengeDialogBtn.addEventListener("click", closeChallengeDialog);
submitChallenge.addEventListener("click", addChallenge);
refreshBtn.addEventListener("click", () =>{
    location.reload();
})
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

deleteTaskBtn.addEventListener('click', () => {
    const myTask = taskIdInput.value;
    const myChallenge = challengeIdInput.value;
    registerTaskCompletion(myTask, myChallenge);
})

document.addEventListener('DOMContentLoaded', () => {
    // Selecciona todos los checkboxes
    const checkboxes = document.querySelectorAll('.task-check-input');

    // Añade un event listener a cada checkbox
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', (event) => {
            if (event.target.checked) {
                // Obtiene los valores de data-task-id y data-object-id
                const taskId = event.target.getAttribute('data-task-id');
                const objectId = event.target.getAttribute('data-object-id');
                
                // Llama a registerTaskCompletion con los IDs
                registerTaskCompletion(taskId, objectId);
                console.log(`Tarea "${taskId}", de objeto ${objectId}`);
            }
        });
    });
});



