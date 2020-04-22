function presentOptions(){
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
// recognition.continuous = true;
recognition.onresult = function(event) {
    var last = event.results.length - 1;
    var command = event.results[last][0].transcript;
    if(command.toLowerCase() === 'withdraw' || command.toLowerCase() == "withdrawal"){
        // alert("hello underdogs");
        responsiveVoice.speak("You have selected the withdrawal option, please provide a withdrawal amount, your options are listed below");
        addWithdrawalOptions();
    }
    else if(command.toLowerCase() === 'exit'){
        document.getElementById("withdrawalAmmounts").style.display = "none";
        document.getElementById("prepaidOpt").style.display = 'none';
        document.getElementById("confirmDeposit").style.display = "none";
        // responsiveVoice.speak("You have chosen to cancel your transaction.");
        document.getElementById("spinner").style.display = 'block';
        setTimeout(()=>{
            document.location= "index.html";
        },2000);
    }
    else if(command.toLowerCase() === 'back'){
        document.getElementById("spinner").style.display = 'block';
        document.getElementById("prepaidOpt").style.display = 'none';
        document.getElementById("confirmDeposit").style.display = "none";
        setTimeout(()=>{
            document.getElementById("withdrawalAmmounts").style.display = "none";
            document.getElementById("spinner").style.display = 'none';

        },2000);
    }
    else if(command.toLowerCase() === 'deposit'){
        responsiveVoice.speak("You have selected the deposit option, please deposit your amount and confirm when completed");
        document.getElementById("confirmDeposit").style.display = "block";
    }
    else if(command.toLowerCase() === 'confirm deposit'){
        document.getElementById("spinner").style.display = 'block';
        document.getElementById("prepaidOpt").style.display = 'none';
        responsiveVoice.speak("Deposit confirmed");
        document.getElementById("confirmDeposit").style.display = "none";
        setTimeout(()=>{
            document.getElementById("spinner").style.display = 'none';

        },2000);
    }
    else if(command.toLowerCase() === '50'){
        document.getElementById("confirmDeposit").style.display = "none";
        document.getElementById("prepaidOpt").style.display = 'none';
        responsiveVoice.speak("Your withdrawal amount of 50 rand is being processed");
        document.getElementById("defaultCheck1").checked = true;
        document.getElementById("defaultCheck2").checked = false;
        document.getElementById("defaultCheck3").checked = false;

    }
    else if(command.toLowerCase() === '100'){
        document.getElementById("confirmDeposit").style.display = "none";
        document.getElementById("prepaidOpt").style.display = 'none';
        responsiveVoice.speak("Your withdrawal amount of 100 rand is being processed");
        document.getElementById("defaultCheck2").checked = true;
        document.getElementById("defaultCheck1").checked = false;
        document.getElementById("defaultCheck3").checked = false;
    }
    else if(command.toLowerCase() === '200'){
        document.getElementById("confirmDeposit").style.display = "none";
        document.getElementById("prepaidOpt").style.display = 'none';
        responsiveVoice.speak("Your withdrawal amount of 200 rand is being processed");
        document.getElementById("defaultCheck2").checked = false;
        document.getElementById("defaultCheck1").checked = false;
        document.getElementById("defaultCheck3").checked = true;
    }
    else if(command.toLowerCase() === 'prepaid'){
        responsiveVoice.speak("Please see available prepaid options below");
        document.getElementById("prepaidOpt").style.display = 'block';
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
}