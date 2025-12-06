const BASE_URL = "http://localhost:3000/user";

const forgotPassForm = document.getElementById("forgot-password-form");

forgotPassForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = {
        email: e.target.email.value,
    };

    try {
        const postResponse = await axios.post(
            `${BASE_URL}/resetPassword`,
            formData
        );
        alert(postResponse.data.message || "Password reset email sent!");
        forgotPassForm.reset();
    } catch (error) {
        loginForm.reset();

        if (error.response.status != 200) {
            errorEl.innerHTML = JSON.stringify(error.response.data.message);
        }
    }
});
