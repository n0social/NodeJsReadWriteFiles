//This will create and write into a message file.

const fs = require("fs");

fs.writeFile("message.txt", "Hello From NodeJS", (err) => {
    if (err) throw err;
    console.log("File has been Saved.")
    
});


//This will read the file
//And will display a message
//The utf8 displays the output as text instead of a bunch of numbers and letters
fs.readFile('message.txt', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);
  });

  //This will re-write the file with a new given message
  fs.writeFile("message.txt", "Hello From Skyler", (err) => {
    if (err) throw err;
    console.log("File has been Changed.")
});