const fs = require("fs");
const path = require("path");

const data = fs.readFileSync(path.join(__dirname, "data.json"));
const responses = JSON.parse(data);

const reply = (message) => {
  const response = responses[message];
  if (response) {
    return response;
  } else {
    return "I don't know what you mean.";
  }
};

const main = () => {
  console.log("Hello, I am a GHOST!");
  console.log("What can I do for you?");

  const input = process.stdin.readLine();
  console.log(reply(input));
};

main();
