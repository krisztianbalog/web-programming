function init() {
    var button = document.getElementById("addButton");
    button.onclick = handleButtonClick;
}

function handleButtonClick(e) {
    var textInput = document.getElementById("songTextInput");
    var songName = textInput.value;

    if (songName == "") {
        alert("Please enter a song");
    }
    else {
        var li = document.createElement("li");
        li.innerHTML = songName;
        var ul = document.getElementById("playlist");
        ul.appendChild(li);
    }
}

window.onload = init;