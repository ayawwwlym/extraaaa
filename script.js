
/*
1. Split message words and store it in an array.
2. Display in CONSOLE the number of elements in the array and the most frequent word in the array
*/



// Random phrases and its pictures (represented as an array of objects)
const randomPhrasesAndPictures = [
    {
        phrase: "A wizard is never late, nor is he early. He arrives precisely when he means to. (c) Gandalf The Grey",
        imageURL: "https://i.chzbgr.com/full/6552757504/h76E7221C/a-wizard-is-never-late-nor-is-he-early-he-arrives-precisely-when-he-means-to"
    },
    {
        phrase: "We must all face the choice between what is right and what is easy. (c) Albus Dumbledore",
        imageURL: "https://www.magicalquote.com/wp-content/uploads/2020/02/We-must-all-face-the-choice-between-what-is-right-and-what-is-easy.jpg"
    },
    {
        phrase: "You are a wizard, Harry (c) Hagrid",
        imageURL: "https://thejapanhobbyist.files.wordpress.com/2017/03/64013553.jpg"
    }
]


function split(message) {
    let arr = [];
    let tmp = "";
    for (var i = 0; i < message.length; i++) {
        if (message.charAt(i) == " " || message.charAt(i) == "." || message.charAt(i) == ',' || message.charAt(i) == "\n" || message.charAt(i) == "\t" || message.charAt(i) == "\r") {
            if (tmp !== "") {
                arr.push(tmp);
            }
            tmp = "";
        } else {
            tmp += message.charAt(i);
        }
    }
    if (tmp !== "") {
        arr.push(tmp);
    }
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].toLowerCase();
    }
    return arr;
}

function clear(phrase, picture, result) {
    phrase.innerHTML = "";
    result.innerHTML = "";
    result.value = "";
    picture.removeAttribute('src');
    picture.removeAttribute("height");
    picture.removeAttribute("width");
}

function handleSubmit() {

    const phrase = document.getElementById("phrase");
    const picture = document.getElementById("picture");
    const result = document.getElementById("result");
    const message = document.getElementById("message").value;
    
    clear(phrase, picture, result);
    const splittedMessage = split(message);
    if (splittedMessage.length == 0) {
        let randomChoose = Math.floor(Math.random() * 100) % randomPhrasesAndPictures.length;
        phrase.innerHTML = randomPhrasesAndPictures[randomChoose].phrase;
        picture.src = randomPhrasesAndPictures[randomChoose].imageURL;
        phrase.style.textAlign = "center";
        picture.style.margin = "0 auto";
        picture.style.display="block";
        
        picture.setAttribute("width", "400px");
        picture.setAttribute("height", "280px");
        return;
    }
    if (message.length < 20) {
        result.innerHTML = `The length of the message is less than 20!`; 
        return;
    }
    
    let mx = 0;
    let theMostFrequentWord = '';
    for (let i = 0; i < splittedMessage.length; i++) {
        let tmp = 0;
        for (let j = 0; j < splittedMessage.length; j++) {
            if (splittedMessage[i] == splittedMessage[j]) {
                tmp++;
            }
        }
        if (tmp > mx) {
            mx = tmp;
            theMostFrequentWord = splittedMessage[i];
        }
    }
    console.log(`The most frequent word of the message is "${theMostFrequentWord}"`)
    console.log(`The number of words in the message is ${splittedMessage.length}`)

    result.innerHTML = `The most frequent word of the message is "${theMostFrequentWord}" <br> The number of words in the message is ${splittedMessage.length}`; 
}

document.getElementById('submit').addEventListener("click", handleSubmit);


