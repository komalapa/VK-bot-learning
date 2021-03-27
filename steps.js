 const steps = {
    "":{
        question: `You are the boss of our space farm. Our farm was attacked by cats-warriors!`,
        btns:[
            {msg: 'Make a selfie', next: 'Final 1'},
            {msg: 'Feed them', next: 'Brunch cats 1'},
            {msg: 'You are afraid! RUN OFF', next: 'Final 2'},
        ]
    },
    "Brunch cats 1":{
        question: `They gave you a space ship!`,
        btns:[
            {msg: 'Make a selfie', next: 'Final 1'},
            {msg: 'You sell it', next: 'Final 3'},
        ]
    },
    "Final 1":{
        question: `You became very famous!`,
        btns:[
            {msg: 'play again', next: ''},
        ]
    },
    "Final 2":{
        question: `Your frends are angry/ You are alone`,
        btns:[
            {msg: 'play again', next: ''},
        ]
    },
    "Final 2":{
        question: `You are very rich!`,
        btns:[
            {msg: 'play again', next: ''},
        ]
    },
}

module.exports = steps