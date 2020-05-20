const states = ["z0", "z1", "z2"];
let state = 0;

// The states that the word can end in to be successful
let finalStates = ["z2"];

let stateHistory = [];

function parseLetter(letter){
    let oldState = state;
    if(letter === "a"){
        //division with remainder
        state = (state + 1) % 3;
    }
    else if(letter !== "b"){
        return false;
    }
    stateHistory.push(`Буква: ${letter}, Текущо Състояние: ${states[oldState]}, Ново Състояние: ${states[state]}`);
    return true;
}

function run(word) {
    state = 0;
    stateHistory = [];

    const letters = word.split("");
    
    for(let i = 0; i < letters.length; i++) {
        if(!parseLetter(letters[i])) {
            //error
            return { success: false, stateHistory };
        }
    }
    
    for(let i = 0; i < finalStates.length; i++) {
        if(states[state] === finalStates[i]) {
            return { success: true, stateHistory };
        }
    }

    return { success: false, stateHistory };
}

// const words = ["bbbaaaaa"];

// for(let i = 0; i < words.length; i++) {
// 	console.log(words[i] + " " + run(words[i]));
// }

// console.log("b", run("b"));

//module.exports.run = run;