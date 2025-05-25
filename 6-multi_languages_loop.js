const messages = ["C is fun", "Python is cool", "JavaScript is amazing"];
let result = "";
for(let i=0; i < messages.length; i++) {
    result += messages[i];
    if (i < messages.length -1) {
        result += "\n";
    }
}
  console.log(result);
