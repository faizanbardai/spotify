console.log("hi");
window.onload = loadingPage;

function loadingPage() {
    setTimeout(displayPage, 0 * 1000);
};

function displayPage() {
    document.querySelector("#spinner").classList.toggle("d-none");
    document.querySelector(".main-page").classList.toggle("d-none");
}

function updatePlaylist(num) {
    fetch("https://deezerdevs-deezer.p.rapidapi.com/artist/"+num, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
            "x-rapidapi-key": "986f49e8damsh99c9341f49f5e58p13eb47jsn7fef840e6245"
        }
    })
        .then(response => response.json())
        .then(function (album) {
            var albumDiv = document.createElement("div");
            var albumImg = document.createElement("img");
            albumImg.src = album.picture_big;
            albumDiv.append(albumImg);
            albumDiv.className="col-3";
            albumImg.innerText=album.name;
            document.querySelector(".playlist").innerHTML="";
            document.querySelector(".playlist").append(albumDiv);
        })
        .catch(err => {
            console.log(err);
        });

}