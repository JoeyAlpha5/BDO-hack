function presentOptions(){
    // start();
    responsiveVoice.speak("Welcome, please provide your banking bot I.D");
}

//
var message = document.querySelector('#message');
var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;
var grammar = '#JSGF V1.0;'
var recognition = new SpeechRecognition();
var speechRecognitionList = new SpeechGrammarList();
speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;
recognition.lang = 'en-US';
recognition.interimResults = false;
// recognition.continuous = true;
recognition.onresult = function(event) {
    var last = event.results.length - 1;
    var command = event.results[last][0].transcript;
    // message.textContent = 'Voice Input: ' + command + '.';
    if(command.toLowerCase() === 'banking bot'){
        // alert("hello underdogs");
        responsiveVoice.speak("Processing");
        document.getElementById("spinner").style.display = 'block';
        setTimeout(()=>{
            document.location= "home.html";
        },2000);
    }
    else{
        responsiveVoice.speak("Invalid Banking Bot I.D, Please try again");
    }  
};

recognition.onspeechend = function() {
    recognition.stop();
};

recognition.onerror = function(event) {
    message.textContent = 'Error occurred in recognition: ' + event.error;
}        

// document.querySelector('#btnGiveCommand').addEventListener('click', function(){
//     recognition.start();

// });


function start(){
    recognition.start();
}
