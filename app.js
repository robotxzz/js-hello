// app.js

// A simple Greeter App demonstrating core JavaScript features

function greet(name) {
  console.log(`Hello, ${name}!`);
}

function greetAll(names) {
  if (!Array.isArray(names)) {
    console.error("Expected an array of names.");
    return;
  }

  names.forEach((name, index) => {
    console.log(`${index + 1}. Hello, ${name}!`);
  });
}

function greetWithTime(name) {
  const hour = new Date().getHours();
  let timeOfDay = "day";

  if (hour < 12) {
    timeOfDay = "morning";
  } else if (hour < 18) {
    timeOfDay = "afternoon";
  } else {
    timeOfDay = "evening";
  }

  console.log(`Good ${timeOfDay}, ${name}!`);
}

function greetUserProfile(user) {
  if (!user.name || !user.age) {
    console.warn("Incomplete user data.");
    return;
  }

  console.log(`Hello, ${user.name}! You are ${user.age} years old.`);
}

function generateGreetingMessage(name, mood = "happy") {
  return `Hello, ${name}! You seem ${mood} today.`;
}

function main() {
  console.log("=== Basic Greeting ===");
  greet("World");

  console.log("\n=== Greet a Group ===");
  const names = ["Alice", "Bob", "Charlie", "Diana"];
  greetAll(names);

  console.log("\n=== Greet With Time of Day ===");
  greetWithTime("Krish");

  console.log("\n=== Greet User Profiles ===");
  const user = { name: "Charu", age: 21 };
  greetUserProfile(user);

  console.log("\n=== Generate Custom Greeting Message ===");
  const msg = generateGreetingMessage("Gladiatorii", "energetic");
  console.log(msg);
}

main();
