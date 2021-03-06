//Add to do item
document.getElementById('addItem').addEventListener('click',()=>{
    let activityName = document.getElementById('activity').value;
    
    if(activityName){
        addTxt(activityName);
        document.getElementById('activity').value = '';
    }
    else{
        alert('Please enter an activity');
    }
    
})



function addTxt(activityName){
    
    //Create list element
    let listElement = document.createElement('li');
    
    //Select todo list
    let incompleteSection = document.getElementById('todo');

    //Add activity name to list element
    listElement.innerText = activityName;

    //Create buttons inside the list element
    let button = document.createElement('div');
    button.classList = 'buttons'

    //Create completed button
    let completed = document.createElement('button');
    let completedSVG = '<svg version="1.1"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 22 22" style="enable-background:new 0 0 22 22;" xml:space="preserve"><rect y="0" class="noFill" width="22" height="22"/><g><path class="fill" d="M9.7,14.4L9.7,14.4c-0.2,0-0.4-0.1-0.5-0.2l-2.7-2.7c-0.3-0.3-0.3-0.8,0-1.1s0.8-0.3,1.1,0l2.1,2.1l4.8-4.8c0.3-0.3,0.8-0.3,1.1,0s0.3,0.8,0,1.1l-5.3,5.3C10.1,14.3,9.9,14.4,9.7,14.4z"/></g></svg>'
    completed.innerHTML = completedSVG;
    completed.classList= 'completed';
    completed.addEventListener('click',changeState)

    //Create remove button
    let remove = document.createElement('button');
    let removeSVG = '<svg version="1.1"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 22 22" style="enable-background:new 0 0 22 22;" xml:space="preserve"><rect y="0" class="noFill" width="22" height="22"/><g><g><path class="fill" d="M16.1,3.6h-1.9V3.3c0-1.3-1-2.3-2.3-2.3h-1.7C8.9,1,7.8,2,7.8,3.3v0.2H5.9c-1.3,0-2.3,1-2.3,2.3v1.3c0,0.5,0.4,0.9,0.9,1v10.5c0,1.3,1,2.3,2.3,2.3h8.5c1.3,0,2.3-1,2.3-2.3V8.2c0.5-0.1,0.9-0.5,0.9-1V5.9C18.4,4.6,17.4,3.6,16.1,3.6z M9.1,3.3c0-0.6,0.5-1.1,1.1-1.1h1.7c0.6,0,1.1,0.5,1.1,1.1v0.2H9.1V3.3z M16.3,18.7c0,0.6-0.5,1.1-1.1,1.1H6.7c-0.6,0-1.1-0.5-1.1-1.1V8.2h10.6L16.3,18.7L16.3,18.7z M17.2,7H4.8V5.9c0-0.6,0.5-1.1,1.1-1.1h10.2c0.6,0,1.1,0.5,1.1,1.1V7z"/></g><g><g><path class="fill" d="M11,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8c0-0.4,0.3-0.6,0.6-0.6s0.6,0.3,0.6,0.6v6.8C11.6,17.7,11.4,18,11,18z"/></g><g><path class="fill" d="M8,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8C7.4,10.2,7.7,10,8,10c0.4,0,0.6,0.3,0.6,0.6v6.8C8.7,17.7,8.4,18,8,18z"/></g><g><path class="fill" d="M14,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8c0-0.4,0.3-0.6,0.6-0.6c0.4,0,0.6,0.3,0.6,0.6v6.8C14.6,17.7,14.3,18,14,18z"/></g></g></g></svg>'; 
    remove.innerHTML = removeSVG;
    remove.classList = 'remove';
    remove.addEventListener('click',removeItem)

    button.appendChild(remove);
    button.appendChild(completed);

    listElement.appendChild(button);

    incompleteSection.insertBefore(listElement,incompleteSection.firstChild);
}


function removeItem(){
    let listParent = this.parentNode.parentNode.parentNode;

    let listElement = this.parentNode.parentNode;

    listParent.removeChild(listElement);

}

function changeState(){
    let listParent = this.parentNode.parentNode.parentNode;
    
    let listElement = this.parentNode.parentNode;
    
    listParent.removeChild(listElement);

   let parentId = listParent.id;
   
    if(parentId=='todo'){
        let completedList = document.getElementById('completed');
        completedList.insertBefore(listElement,completedList.firstChild);
    }else{
        let todoList = document.getElementById('todo');
        todoList.insertBefore(listElement,todoList.firstChild);
    }
}