  
// quests[0].choices[0].description; ==> 'negotiate with them'

// for Joe Exotic 
const joeexotic = { 
    id: 'joeexotic', 
    title: 'Joe Exotic', 
    map: {
        top: '89%', 
        left: '44%'
    }, 
    image: 'joeexotic.jpg', 
    description: 
        'Description: This is a description of Joe Exotic and what happens on this page', 
    choices: [{
        id: 'negotiate', 
        description: 'Negotiate with them', 
        result: 
            'A crazy result stating that you recieved 35 tigers in all through some crazy scenario for later', 
        hp: 0, 
        tigers: 35,
    }, {
        id: 'fight', 
        description: 'Fight with them', 
        result: 
            'A crazy result stating that you recieved 30 hp damage and 50 tigers in all through some crazy scenario for later', 
        hp: -30, 
        tigers: 50,
    }, {
        id: 'run', 
        description: 'Run Away!', 
        result: 
            'A crazy result stating that you recieved 20 hp damage and no tigers in all through some crazy scenario for later', 
        hp: -20, 
        tigers: 0,
    }]
};

// for Carol Baskin
const carolbaskin = { 
    id: 'carolbaskin', 
    title: 'Joe Exotic', 
    map: {
        top: '89%', 
        left: '44%'
    }, 
    image: 'carolbaskin.jpg', 
    description: 
        'Description: This is a description of Carol Baskin and what happens on this page', 
    choices: [{
        id: 'negotiate', 
        description: 'Negotiate with them', 
        result: 
            'A crazy result stating that you recieved 35 tigers in all through some crazy scenario for later', 
        hp: 0, 
        tigers: 35,
    }, {
        id: 'fight', 
        description: 'Fight with them', 
        result: 
            'A crazy result stating that you recieved 30 hp damage and 50 tigers in all through some crazy scenario for later', 
        hp: -30, 
        tigers: 50,
    }, {
        id: 'run', 
        description: 'Run Away!', 
        result: 
            'A crazy result stating that you recieved 20 hp damage and no tigers in all through some crazy scenario for later', 
        hp: -20, 
        tigers: 0,
    }]
};



// for Doc Antle

const docantle = { 
    id: 'docantle', 
    title: 'Doc Antle', 
    map: {
        top: '89%', 
        left: '44%'
    }, 
    image: 'docantle.jpg', 
    description: 
        'Description: This is a description of Doc Antle and what happens on this page', 
    choices: [{
        id: 'negotiate', 
        description: 'Negotiate with them', 
        result: 
            'A crazy result stating that you recieved 35 tigers in all through some crazy scenario for later', 
        hp: 0, 
        tigers: 35,
    }, {
        id: 'fight', 
        description: 'Fight with them', 
        result: 
            'A crazy result stating that you recieved 30 hp damage and 50 tigers in all through some crazy scenario for later', 
        hp: -30, 
        tigers: 50,
    }, {
        id: 'run', 
        description: 'Run Away!', 
        result: 
            'A crazy result stating that you recieved 20 hp damage and no tigers in all through some crazy scenario for later', 
        hp: -20, 
        tigers: 0,
    }]
};


// for Don Lewis (secret mission)

const donlewis = { 
    id: 'donlewis', 
    title: 'Don Lewis', 
    map: {
        top: '89%', 
        left: '44%'
    }, 
    image: 'donlewis.jpg', 
    description: 
        'Description: This is a description of Doc Antle and what happens on this page', 
    choices: [{
        id: 'negotiate', 
        description: 'Negotiate with them', 
        result: 
            'A crazy result stating that you recieved 35 tigers in all through some crazy scenario for later', 
        hp: 0, 
        tigers: 35,
    }, {
        id: 'fight', 
        description: 'Fight with them', 
        result: 
            'A crazy result stating that you recieved 30 hp damage and 50 tigers in all through some crazy scenario for later', 
        hp: -30, 
        tigers: 50,
    }, {
        id: 'run', 
        description: 'Run Away!', 
        result: 
            'A crazy result stating that you recieved 20 hp damage and no tigers in all through some crazy scenario for later', 
        hp: -20, 
        tigers: 0,
    }]
};



const quests = [
    joeexotic, 
    carolbaskin,
    donlewis,
    docantle
];

export default quests;