prediction_1 = "";
prediction_2 = "";

Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot() {
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="' + data_uri + '"/>';
    });
}

console.log('ml5 version:', ml5.version);

classifer = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/O5kqkE_lb/model.json", modelLoaded);
prediction
function modelLoaded() {
    console.log('Model Loaded');
}

function speak() {
    var synth = window.speechSynthesis;
    speak_data_1 = "The first prediction is " + prediction_1;
    speak_data_2 = "And the second prediction is " + prediction_2;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
    synth.speak(utterThis);
}

function check() {
    img = document.getElementById('captured_image');
    classifer.classify(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.error(error);
    }
    else {
        console.log(results);
        document.getElementById("result_gesture_name").innerHTML = results[0].label;
        document.getElementById("result_gesture_name2").innerHTML = results[1].label;
        prediction_1 = results[0].label;
        prediction_2 = results[1].label;
        speak();
        
        if (results[0].label == "Thumbsup") {
            document.getElementById("update_gesture").innerHTML = "&#128077;";
        }
        if (results[0].label == "Peace Sign") {
            document.getElementById("update_gesture").innerHTML = "&#9996;";
        }
        if (results[0].label == "Ok Symbol") {
            document.getElementById("update_gesture").innerHTML = "&#128076;";
        }
        if (results[0].label == "High-Five") {
            document.getElementById("update_gesture").innerHTML = "&#128079;";
        }
        if (results[0].label == "Rock Sign") {
            document.getElementById("update_gesture").innerHTML = "&#129304;";
        }
        if (results[1].label == "Thumbsup") {
            document.getElementById("update_gesture").innerHTML = "&#128077;";
        }
        if (results[1].label == "Peace Sign") {
            document.getElementById("update_gesture").innerHTML = "&#9996;";
        }
        if (results[1].label == "Ok Symbol") {
            document.getElementById("update_gesture").innerHTML = "&#128076;";
        }
        if (results[1].label == "High-Five") {
            document.getElementById("update_gesture").innerHTML = "&#128079;";
        }
        if (results[1].label == "Rock Sign") {
            document.getElementById("update_gesture").innerHTML = "&#129304;";
        }
    }
}