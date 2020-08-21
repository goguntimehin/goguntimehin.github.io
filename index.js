    var numberOfButton = document.querySelectorAll(".click-button").length;
    for (var i = 0; i < numberOfButton; i++) {
        document.querySelectorAll(".click-button")[i].addEventListener("click", function () {

            var myButtonInnerHTML = this.innerHTML;

            switch (myButtonInnerHTML) {
                case "Click Dad's Song":
                    var king = new Audio("sound\\King_Sunny_Ade_-_King_Sunny_Ade_His_African_Beats_-_Baba_Orun_A_Mbe_O_Latest_Yoruba_JuJu_Song_2020_.mp3");
                    king.play();
                    break;


                case "Click Dad Song":
                    var audio = new Audio("sound\\Tope_Alabi_-_Tope_Alabi_-_Olorun_Gbangba_Angel_Mi_Latest_Yoruba_Gospel_Song_2020_.mp3");
                    audio.play();
                    break;

                default:


            }



        });
    }








