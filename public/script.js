const chatbotToggler = document.querySelector(".chatbot-toggler");
const closeBtn = document.querySelector(".close-btn");
const chatbox = document.querySelector(".chatbox");
const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");

let userMessage = null;
const API_KEY = "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";
const inputInitHeight = chatInput.scrollHeight;


const getBookList = async () => {

    let p = await fetch('/createSession')
    let response = await p.json()
    return response
}


const createChatLi = (message, className) => {
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat", `${className}`);
    let chatContent = className === "outgoing" ? `<p></p>` : `<span class="material-symbols-outlined">smart_toy</span><p></p>`;
    chatLi.innerHTML = chatContent;
    chatLi.querySelector("p").textContent = message;
    return chatLi;
}
let sessionId;
chatbotToggler.addEventListener("click", function () {
    document.body.classList.toggle("show-chatbot")
    const mainFunc = async () => {
        let session = await getBookList();
        sessionId = session.SessionID;
        console.log(session.SessionID);

        let options = {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            // body: JSON.stringify(sendData),
        }

        const url = "http://api.endlessmedical.com/v1/dx/AcceptTermsOfUse?SessionID="+sessionId+"&passphrase=I%20have%20read,%20understood%20and%20I%20accept%20and%20agree%20to%20comply%20with%20the%20Terms%20of%20Use%20of%20EndlessMedicalAPI%20and%20Endless%20Medical%20services.%20The%20Terms%20of%20Use%20are%20available%20on%20endlessmedical.com";
        let p = await fetch(url, options)
        let response = await p.json()
        console.log(response);
    }
    mainFunc();
});

const generateResponse = (chatElement, userMessage) => {

    let x;
    if(userMessage=="Headache")
        x="HeadacheFrontal";
    else
    if(userMessage=="Joints Pain")
        x="JointsPain"
    else
    if(userMessage=="Loss Of Consciousness")
        x="LossOfConsciousness"
    else
        x=userMessage
    
    const messageElement = chatElement.querySelector("p");

    const mainFunc = async () => {


        let options = {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            // body: JSON.stringify(sendData),
        }
        console.log(sessionId);
        const url = "http://api.endlessmedical.com/v1/dx/UpdateFeature?SessionID="+sessionId+"&name="+x+"&value=1";
        let p = await fetch(url, options)
        let response = await p.json()
        console.log(response);
    }
    mainFunc();

    let finalResponse;


    const mainFunc2 = async () => {


        // let options = {
        //     method: "POST",
        //     headers: {
        //         "Content-type": "application/json"
        //     },
        //     // body: JSON.stringify(sendData),
        // }
        // console.log(sessionId);
        const url = "http://api.endlessmedical.com/v1/dx/Analyze?SessionID="+sessionId+"";
        let p = await fetch(url)
        finalResponse = await p.json()
        console.log(finalResponse);
    }
    mainFunc2();
    
        messageElement.textContent = "Oops! Something went wrong. Please try again.";
    
}

const handleChat = () => {

    userMessage = chatInput.value.trim();










    if (!userMessage) return;



    chatInput.value = "";
    chatInput.style.height = `${inputInitHeight}px`;


    chatbox.appendChild(createChatLi(userMessage, "outgoing"));
    chatbox.scrollTo(0, chatbox.scrollHeight);

    setTimeout(() => {
        const incomingChatLi = createChatLi("Thinking...", "incoming");
        chatbox.appendChild(incomingChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);
        generateResponse(incomingChatLi, userMessage);
    }, 600);
}

chatInput.addEventListener("input", () => {

    chatInput.style.height = `${inputInitHeight}px`;
    chatInput.style.height = `${chatInput.scrollHeight}px`;
});

chatInput.addEventListener("keydown", (e) => {

    if (e.key === "Enter" && !e.shiftKey && window.innerWidth > 800) {
        e.preventDefault();
        handleChat();
    }
});

sendChatBtn.addEventListener("click", handleChat);
closeBtn.addEventListener("click", () => document.body.classList.remove("show-chatbot"));
// chatbotToggler.addEventListener("click", function () {
//     document.body.classList.toggle("show-chatbot")
//     const mainFunc = async () => {
//         let session = await getBookList();
//         // console.log(session.SessionID);

//         let options = {
//             method: "POST",
//             headers: {
//                 "Content-type": "application/json"
//             },
//             // body: JSON.stringify(sendData),
//         }

//         const url = "http://api.endlessmedical.com/v1/dx/AcceptTermsOfUse?SessionID="+session.SessionID+"&passphrase=I%20have%20read,%20understood%20and%20I%20accept%20and%20agree%20to%20comply%20with%20the%20Terms%20of%20Use%20of%20EndlessMedicalAPI%20and%20Endless%20Medical%20services.%20The%20Terms%20of%20Use%20are%20available%20on%20endlessmedical.com";
//         let p = await fetch(url, options)
//         let response = await p.json()
//         // console.log(response);
//     }
//     mainFunc();
// });