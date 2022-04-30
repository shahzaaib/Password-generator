
//Setting up the possible Characters
const inputEl = document.getElementById("input-el")

const outputs = document.querySelectorAll("#output")
const allChar = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()?~/|:'><"

console.log(outputs)

function showPassword(){
    // We're looping through all the '#output' elements and displaying randomPw()
    for(let i = 0; i < outputs.length; i++){
        outputs[i].textContent = randomPw()
    }
 }
function randomPw(){
    // Here we're gonna reassign pw, so we're using let instead of const
    let pw = ''
    for( i =0; i < inputEl.value ; i++){
        let randomPass = allChar[Math.floor(Math.random() * allChar.length)]
        pw += randomPass
    }
    return pw
 }

