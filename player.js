let buttons = $(".play");

console.log(buttons);

for(let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", playButtonClicked);
  console.log(buttons[i]);
}

let playing = false;

let current_track = document.createElement("audio");
let last_track_id;

function playButtonClicked(event) {
  //if this one that's clicked isn't the same as the last one then reset the the last one
  //otherwise crack on like normal
  if(last_track_id && last_track_id != event.target.id) {
    $("#" + last_track_id).removeClass("fa-pause").addClass("fa-play");
    playing = false;
  }

  current_track.src = "music/" + event.target.id + ".mp3";
  current_track.load();

  if(!playing) {
    $("#" + event.target.id).removeClass("fa-play").addClass("fa-pause");
    current_track.play();
    playing = true;
  } else {
    $("#" + event.target.id).removeClass("fa-pause").addClass("fa-play");
    current_track.pause();
    playing = false;
  }


  last_track_id = event.target.id;

}
