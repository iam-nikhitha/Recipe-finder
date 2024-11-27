
function checkAuth() {
    const token = localStorage.getItem('accessToken');
    const loginLink = document.querySelector('a[href="./assets/Auth/login.html"]');
    const registerLink = document.querySelector('a[href="./assets/Auth/register.html"]');
    const index = document.querySelector('a[href="../index.html"]')
    const customize = document.querySelector('a[href="./customize.html"]')
    const new_recipe = document.querySelector('a[href="./new-recipe.html"]')
    const feedback = document.querySelector('a[href="./feedback.html"]')
    const calender = document.querySelector('a[href="./calender.html"]')
    const mail = document.querySelector('a[href="./mail.html"]')
    const logoutBtn = document.getElementById('logoutBtn');

    if (token) {
        loginLink.style.display = 'none'; 
        registerLink.style.display = 'none'; 
        index.style.display = "block";
        customize.style.display = "block";
        new_recipe.style.display = "block";
        feedback.style.display = "block";
        calender.style.display = "block";
        mail.style.display = "block";
        logoutBtn.style.display = 'block'; 
       
    } else {
        loginLink.style.display = 'block'; 
        registerLink.style.display = 'block'; 
        index.style.display = "none";
        customize.style.display = "none";
        new_recipe.style.display = "none";
        feedback.style.display = "none";
        calender.style.display = "none";
        mail.style.display = "none";
        logoutBtn.style.display = 'none'; 
    }
    }

    function logout() {
    localStorage.removeItem('token');
    checkAuth();
    }

    document.addEventListener('DOMContentLoaded', () => {
    checkAuth();

    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', logout);
    }
    });