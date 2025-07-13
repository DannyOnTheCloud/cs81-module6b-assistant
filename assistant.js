
// Define the constructor for the assistant
function PersonalAssistant(name) {
  this.name = name;
  this.tasks = [];
  this.mood = "mentally rebooting..."; // Default startup mood
}

// Adds a task to the assistant's to-do list
PersonalAssistant.prototype.addTask = function(task) {
  this.tasks.push(task);
  console.log(`${this.name} added task: "${task}"`);
};

// Completes the first task in the list
PersonalAssistant.prototype.completeTask = function() {
  if (this.tasks.length === 0) {
    console.log(`${this.name} has no tasks left — time to relax?`);
    return;
  }
  const task = this.tasks.shift();
  console.log(`${this.name} completed task: "${task}"`);
};

// Reports the current mood
PersonalAssistant.prototype.reportMood = function() {
  console.log(`Mood: ${this.mood}`);
};

// Personal Assistant JavaScript Code
// This code creates a simple personal assistant that can manage tasks and report mood.

// Create assistant named 'Pal'
const pal = new PersonalAssistant("Pal");

console.log(`Hi! I'm ${pal.name}, your assistant.`);

// Mood before starting the day
pal.reportMood();

// Add tasks
pal.addTask("Study for Core 2");
pal.addTask("Don’t forget to do Miles IT training");
pal.addTask("Deadline Notices: Core 2 is in 6 days (~144 hours left)");

// Complete two tasks
pal.completeTask();
pal.completeTask();

// Update the mood based on how the day went
pal.mood = "running on 2 double A batteries and a dream";
pal.reportMood();
