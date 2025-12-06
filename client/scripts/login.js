const loginSection = document.getElementById("login");
const resetPasswordSection = document.getElementById("forgot-password");

function showResetPassword() {
    loginSection.style.display = "none";
    resetPasswordSection.style.display = "block";
}

const loginForm = document.getElementById("login-form");
const errorEl = document.getElementById("error");

loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    errorEl.innerHTML = "";

    const formData = {
        email: e.target.email.value,
        password: e.target.password.value,
    };

    try {
        const postResponse = await axios.post(
            "http://localhost:3000/user/login",
            formData
        );

        if (postResponse.status == 200) {
            localStorage.setItem("token", postResponse.data.token);
        }
        loginForm.reset();
    } catch (error) {
        loginForm.reset();

        if (error.response.status != 200) {
            errorEl.innerHTML = JSON.stringify(error.response.data.message);
        }
    }
});
