const buttonShowLogin = document.getElementById('buttonShowLogin');
const buttonShowSignup = document.getElementById('buttonShowSignup');
const headerSignup = document.getElementById('headerSignup');
const loginText = document.getElementById('loginText');
const signupText = document.getElementById('signupText');
const buttonSignup = document.getElementById('buttonSignup');
const buttonLogin = document.getElementById('buttonLogin');
const userNameElement = document.getElementById('userName');
const profileElement = document.getElementById('profile');
const challengesElement = document.getElementById('challenges');
const tasksElement = document.getElementById('tasks');
const infoElement = document.getElementById('info');
const profileButton = document.getElementById('profile-button');
const challengesButton = document.getElementById('challenges-button');
const tasksButton = document.getElementById('tasks-button');
const infoButton = document.getElementById('info-button');
const fullNameElement = document.getElementById('full-name');
const englishButton = document.getElementById('english-button');
const spanishButton = document.getElementById('spanish-button');

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

        add_challenge_button: "Add a Challenge",
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

        add_challenge_button: "Añadir desafío",
        challenges_head: "Desafíos",
        tasks_head:"Tareas",
        tasks_text:"Aquí estan tus tareas del día de hoy",
    }
};


function showLogin() {
    headerSignup.innerText = "Please Login";
    loginText.classList.add("hidden");
    signupText.classList.remove("hidden");
    buttonSignup.classList.add("hidden");
    buttonLogin.classList.remove("hidden");
    fullNameElement.classList.add("hidden");
}

function showSignup() {
    headerSignup.innerText = "Create an account!";
    loginText.classList.remove("hidden");
    signupText.classList.add("hidden");
    buttonSignup.classList.remove("hidden");
    buttonLogin.classList.add("hidden");
    fullNameElement.classList.remove("hidden");
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
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
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

    document.getElementById('headerSignup').textContent = currentTranslations.create_account;
    document.getElementById('full-name').placeholder = currentTranslations.full_name;
    document.getElementById('email').placeholder = currentTranslations.email;
    document.getElementById('password').placeholder = currentTranslations.password;
    document.getElementById('buttonSignup').textContent = currentTranslations.sign_up;
    document.getElementById('buttonLogin').textContent = currentTranslations.login;
    document.getElementById('loginText').innerHTML = `<p class="center">${currentTranslations.already_have_account} <button id="buttonShowLogin">${currentTranslations.login}</button> then</p>`;
    document.getElementById('buttonGoogle').innerHTML = `<i class="fa-brands fa-google fa-xl" style="color: #4633d1;"></i>  ${currentTranslations.sign_in_google}`;
    document.querySelector('#profile-nav p').textContent = currentTranslations.profile;
    document.querySelector('#tasks-nav p').textContent = currentTranslations.tasks;
    document.querySelector('#challenges-nav p').textContent = currentTranslations.challenges;
    document.querySelector('#info-nav p').textContent = currentTranslations.info;
    document.getElementById('logout').innerHTML = `${currentTranslations.logout} <i class="fa-solid fa-right-to-bracket" style="color: #ededed;"></i>`;

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




// Initial update
updateDateTime();

// Update the time every minute
setInterval(updateDateTime, 60000);

buttonShowLogin.addEventListener("click", showLogin);
buttonShowSignup.addEventListener("click", showSignup);
profileButton.addEventListener("click", profileShow);
challengesButton.addEventListener("click", challengesShow);
tasksButton.addEventListener("click", tasksShow);
infoButton.addEventListener("click", infoShow);
englishButton.addEventListener("click", () => setLanguage('en'));
spanishButton.addEventListener("click", () => setLanguage('es'));


