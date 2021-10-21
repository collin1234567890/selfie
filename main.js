var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function(event) {

    console.log(event) 

        var Content = event.results[0][0].transcript;

        document.getElementById("textbox").innerHTML = Content;
        console.log(Content);
        if (Content =="take my selfie")
        {
            console.log("takeing selfie --- ");
speak();
        }
}
function speak(){
    var synth = window.speechSynthesis;

    speech_data ="takeing your selfy in 5 seconds";

    var utterThis = new SpeechSynthesisUtterance(speech_data);

    synth.speek (utterThis);
    Webcam.attach(camera);
}
Webcam.set({
    width:360,
    height:250,
    image_format : 'png',
    png_quality:90
})
camera=document.getElementById("camera")