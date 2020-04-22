function presentOptions(){
    start();
    responsiveVoice.speak("Welcome, please select an option from the list on the left");
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
recognition.continuous = true;
recognition.onresult = function(event) {
    var last = event.results.length - 1;
    var command = event.results[last][0].transcript;
    // message.textContent = 'Voice Input: ' + command + '.';
    if(command.toLowerCase() === 'withdraw'){
        // alert("hello underdogs");
        responsiveVoice.speak("You have selected the withdrawal option, please provide a withdrawal amount, your options are listed below");
        addWithdrawalOptions();
    }
    else if(command.toLowerCase() === 'cancel'){
        document.getElementById("withdrawalAmmounts").style.display = "none";
        responsiveVoice.speak("You have chosen to cancel your transaction. Please wait while you're redirected");
    }
    else if(command.toLowerCase() === '50'){
        responsiveVoice.speak("Your withdrawal amount of 50 rand is being processed");
        document.getElementById("defaultCheck1").checked = true;
    }
    else{
        responsiveVoice.speak("The command you've supplied is unknown. Please try again");
    }  
};

recognition.onspeechend = function() {
    recognition.stop();
    // start();
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

function addWithdrawalOptions(){
    document.getElementById("withdrawalAmmounts").style.display = "block";
    recognition.start();
}