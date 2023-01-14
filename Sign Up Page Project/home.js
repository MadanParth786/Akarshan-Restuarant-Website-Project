// Logic for making 
window.addEventListener("load", (e) => {
    console.log(window.location.pathname);
    if (window.location.pathname == "/homepage.html" && window.localStorage.getItem("islogin") == null) {
        window.location.href = "/index.html"

    }
})