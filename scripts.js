// Calorie Counter Logic
let totalCalories = 0;

function addFood() {
    const foodSelect = document.getElementById("foodItem");
    const selectedFood = foodSelect.options[foodSelect.selectedIndex];
    const calories = parseInt(selectedFood.getAttribute("data-calories"));
    
    totalCalories += calories;
    document.getElementById("totalCalories").textContent = totalCalories;

    const foodList = document.getElementById("foodList");
    const listItem = document.createElement("li");
    listItem.textContent = selectedFood.text;
    foodList.appendChild(listItem);
}

// Chatbot Logic
function sendMessage() {
    const userInput = document.getElementById("userInput").value;
    const chatOutput = document.getElementById("chatOutput");

    const userMessage = document.createElement("div");
    userMessage.textContent = "You: " + userInput;
    chatOutput.appendChild(userMessage);

    const botMessage = document.createElement("div");
    botMessage.textContent = "Bot: How can I assist you with your fitness goals?";
    chatOutput.appendChild(botMessage);

    document.getElementById("userInput").value = '';
}

// Personalized Fitness Plan
function generatePlan() {
    const weight = document.getElementById("weight").value;
    const height = document.getElementById("height").value;
    const goalWeight = document.getElementById("goalWeight").value;

    const plan = `Based on your current weight of ${weight} kg and your goal weight of ${goalWeight} kg, 
    we recommend a balanced diet and regular exercise.`;

    document.getElementById("fitnessPlan").textContent = plan;
}

// Workout Streak Logic
let streakCount = 0;

function incrementStreak() {
    streakCount += 1;
    document.getElementById("streakCount").textContent = streakCount;
}
