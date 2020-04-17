// import functions 
import quests from '../data/data.js';
import makeListItemLink from '../map/make-list-item-link.js';

// get items from the dom 

const ul = document.getElementById('list'); 

// for each quest, we want to run the makelistitemlink function

quests.forEach((quest) => { 

    const li = makeListItemLink(quest); 

    ul.appendChild(li);

});

