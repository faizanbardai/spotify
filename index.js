console.log("hi");
window.onload=loadingPage;

function loadingPage() {
    setTimeout(displayPage,0*1000);
};

function displayPage() {
    document.querySelector("#spinner").classList.toggle("d-none");
    document.querySelector(".main-page").classList.toggle("d-none");
}