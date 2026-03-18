var words = ["Wonderful", "Joyful", "Happiness", "Time", "Task", "Apple"];
var result = [];

var regex = /^[^aA]{6,}$/;

for (var i = 0; i < words.length; i++) {
    if (regex.test(words[i])) {
        result.push(words[i]);
    }
}

console.log(result);