const sentence = "Raptors";
let delay = 50;
for (let i = 0; i < sentence.length - 1; i++) {
    setTimeout(() => {
        process.stdout.write(sentence[i]);
    }, delay);
    delay += 50;
}
setTimeout(() => {
    console.log(sentence[sentence.length-1]);
}, delay);