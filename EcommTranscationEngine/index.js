const  queryGenerator = new Promise((resolve, reject) => {

    const words = ["cars", "ice-cream", "money", "villas", "mansions"];

    const randomIndex = Math.floor(Math.random() * words.length);
    const selectedWord = words[randomIndex];

    if(selectedWord) resolve(selectedWord);
    else reject("error failed");
});

queryGenerator
.then((success) => console.log("success: ", success))
.catch((error) => console.log("error: ", error));