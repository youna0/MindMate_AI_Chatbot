
let messages = document.getElementById("messages");

function sendMessage() {
    const input = document.getElementById("userInput").value;
    if(input){
        messages.innerHTML += "<div>User: " + input + "</div>";
        chatbotResponse(input);
        document.getElementById("userInput").value = "";
    }
}

function chatbotResponse(input){
    let response = "Take care of yourself!";
    if(input.includes("sad")) response = "I'm here for you. Consider a short walk or talk to a friend.";
    else if(input.includes("happy")) response = "Great to hear! Keep smiling!";
    else if(input.includes("stress")) response = "Try deep breathing for 5 minutes.";

    messages.innerHTML += "<div>Bot: " + response + "</div>";
}

let moodData = [];
function updateMood() {
    const mood = document.getElementById("moodSelect").value;
    if(mood){
        moodData.push(mood);
        renderChart();
    }
}

function renderChart(){
    const ctx = document.getElementById('moodChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: moodData.map((_, i) => i + 1),
            datasets: [{
                label: 'Mood Over Time',
                data: moodData,
                borderColor: 'rgba(75, 192, 192, 1)',
                fill: false
            }]
        }
    });
}
