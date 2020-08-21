
var numberButton = document.querySelectorAll(".click-button").length;

for (var i=0; i<numberButton; i++){
    document.querySelector(".click-button").addEventListener("click", function () {
        var audio = new Audio("sound\\King_Sunny_Ade_-_King_Sunny_Ade_His_African_Beats_-_Baba_Orun_A_Mbe_O_Latest_Yoruba_JuJu_Song_2020_.mp3");
        audio.play();
    });

}






