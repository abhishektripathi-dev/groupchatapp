const signupForm = document.getElementById("signup-form");

signupForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = {
        name: e.target.name.value,
        email: e.target.email.value,
        phone: e.target.phone.value,
        password: e.target.password.value,
    };

    try {
        const postResponse = await axios.post(
            "http://localhost:3000/user/signup",
            formData
        );

        if (postResponse.status == 200) {
            window.location.href = "login.html";
        }

        signupForm.reset();
    } catch (error) {
        signupForm.reset();
        if (error.response.status != 200) {
            document.getElementById("error").innerHTML = JSON.stringify(
                err.response.data.message
            );
        }
    }
});
