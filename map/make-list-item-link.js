// need to create a for loop to create my static list items in vanilla javascript 

export default function makeListItemLink(questData){ 

    const li = document.createElement('li'); 
    li.classList.add('quest-item');
    const a = document.createElement('a'); 
    a.href = `../quest/?id=${questData.id}`; 
    a.textContent = questData.title; 

    li.appendChild(a); 

    return li; 
}