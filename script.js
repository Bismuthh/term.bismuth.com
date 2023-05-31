const outputElement = document.getElementById('output');
const inputElement = document.getElementById('input');

function handleInput(event) {
  if (event.key === 'Enter') {
    const command = inputElement.value;
    inputElement.value = '';

    const output = processCommand(command);

    outputElement.textContent += '> ' + command + '\n' + output + '\n';
    outputElement.scrollTop = outputElement.scrollHeight;
  }
}

document.addEventListener('DOMContentLoaded', function() {
  const inputElement = document.getElementById('input');
  const outputElement = document.getElementById('output');

  inputElement.addEventListener('keydown', handleInput);

  function handleInput(event) {
    if (event.key === 'Enter') {
      const command = inputElement.value;
      inputElement.value = '';

      const output = processCommand(command);
      outputElement.textContent += '> ' + command + '\n' + output + '\n';

      if (command === 'clear') {
        clearOutput();
      }
    }
  }

  function processCommand(command) {
    switch (command) {
        case 'help':
            return 'Available commands: help, info, socials, whois, whoami, projects, clear, date, repo, changelog'

        case 'info':
            return "This is a terminal-like website that I created for fun and as a valuable opportunity to learn coding. However, I plan to utilize it as part of my future portfolio.";
        case 'socials':
            return 'Twitter: @xxbismuthh, Discord: Bismuth#2166';

        case 'projects':
            return "I don't have any projects planned at the moment.";

        case 'whois':
            return "My name is Bismuth, I'm a British Male who is curious about coding. I'm a beginner and I'm excited to learn more.";
         case 'repo':
            return "https://github.com/Bismuthh/termbismuth-website";

        case 'clear':
            outputElement.textContent = '';
            return '';

        case 'changelog':
            return 'for v1.0.7\n' +
            "- Added a new command 'repo'\n" +
            "- Slight Changes to the Interface\n" +
            "- Removed the 'refresh' command"

         case 'hello':
            return 'Hello.';

         case 'whoami':
            return 'Guest.'
         
            case 'date':
         return getDateInfo();

         default:
            return 'Command not recognized. Type "help" to see available commands.';
    }
}

function getDateInfo() {
   const currentDate = new Date();
   const date = currentDate.toLocaleDateString();
   const time = currentDate.toLocaleTimeString();
   const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
 
   return `Current date: ${date}\nCurrent time: ${time}\nTimezone: ${timezone}`;
 }

 function scrollToBottom() {
   outputElement.scrollTop = outputElement.scrollHeight;
}


  function clearOutput() {
    outputElement.textContent = '';
  }
});

function typeText(text, element) {
  let index = 0;
  const speed = 50;

  function type() {
    if (index < text.length) {
      element.textContent += text.charAt(index);
      index++;
      setTimeout(type, speed);
    }
  }

  type();
}
document.getElementById('input-text').addEventListener('keydown', function(event) {
   if (event.key === 'Enter') {
     event.preventDefault();
     var command = this.textContent.trim();
     this.textContent = '';
 
     processCommand(command);
   }
 });
 
 function processCommand(command) {
   var output = '';
 
   var outputLine = '> ' + command + '\n' + output + '\n';
   var outputElement = document.getElementById('output');
   outputElement.textContent += outputLine;
 
   scrollToBottom();
 }
 
 function scrollToBottom() {
   var outputElement = document.getElementById('output');
   outputElement.scrollTop = outputElement.scrollHeight;
 }