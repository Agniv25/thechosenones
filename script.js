function sendMessage() {
    const userInput = document.getElementById('userInput').value;
    displayMessage(userInput, 'user');
  
    const response = generateResponse(userInput);
  
    displayMessage(response, 'chatbot');
    document.getElementById('userInput').value = '';
}
  
function displayMessage(message, sender) {
    const chatbox = document.getElementById('chatbox');
    const messageDiv = document.createElement('div');
    messageDiv.classList.add(sender);
    messageDiv.innerHTML = message;
    chatbox.appendChild(messageDiv);
}
  
function generateResponse(userInput) {
    if (userInput==1){
        let str=    `Hello this is your personal assistant <br/> Enter the number for the following:<br/>
        A:To Book Clinic Appointment <br/> B:To Book Home Appointment <br/> C:Further Consultancy <br/>`
        return str;   
    }
    else if(userInput=="A"){
        str=`click here to book appointment`
        return str;
    }
    else if(userInput=="B"){
        str=`Click here to Book Home appointment`
        return str;
    }
    else if(userInput=="C")
        str=`Enter your Health Issue `
        // const disease =generateHealth(str);
        return  str;
  }

  function firstbotmessage(){
   const response= generateResponse(1)
    displayMessage(response, 'chatbot');
    // document.getElementById('userInput').value = '';
  }
  firstbotmessage();