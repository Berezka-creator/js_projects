
//DECLARE MAIN ELEMENTS
const alert = document.querySelector('.alert');
const form = document.querySelector('.grocery-form');
const groceryInput = document.getElementById('grocery');
const submitBtn = document.querySelector('.submit-btn');
//GROCERY CONTAINER
const groceryContainer = document.querySelector('.grocery-container');
const groceryList = document.querySelector('.grocery-list');
//BTN TO CLEAR CONTAINER
const clearBtn = document.querySelector('.clear-btn');

//edit options
let editElement;
let editFlag = false;
let editID = '';

//*************EVENT LISTENERS
//submit form
form.addEventListener('submit', addItem);

//clear container
clearBtn.addEventListener('click', clearContainer);
//delete item
//edit item

//****************FUNCTIONS

//add element to the list
function addItem(e){
    e.preventDefault();
    const value = groceryInput.value;
    const id = new Date().getTime().toString();

    if(value && !editFlag){
        //element that will contain each grocery item
        const element = document.createElement('article');
        element.classList.add('grocery-item');

        //unique attribute to each element
        const attr = document.createAttribute("data-id");
        attr.value = value;
        element.setAttributeNode(attr);
        console.log(element);

        //to set content for each item
        element.innerHTML = `
                <p class="title">${value}</p>
                <div class="btn-container">
                <button type="button" class="edit-btn">
                <i class="fas fa-edit"></i>
                </button>
                <button type="button" class="delete-btn">
                <i class="fas fa-trash"></i>
                </button>
                </div>`;
        //add element to the main container
        groceryList.appendChild(element);
        groceryContainer.classList.add('show-container');
        displayAlert("item added to the list", 'success');

        //add to local storage
        addToLocalStorage(id, value);

        //set back to default
        setBackToDefault();
    }
    else if(value && editFlag){
        console.log('editing');
    }
    else{
        //value is empty
        displayAlert("empty value", "danger");
    }
};

//display alert 
function displayAlert(text, action){

        alert.textContent = text;
        alert.classList.add(`alert-${action}`);

        setTimeout(function(){
            alert.textContent = '';
            alert.classList.remove(`alert-${action}`);
        }, 1000);
}

//set back to default
function setBackToDefault(){
    groceryInput.value = '';
    editFlag = false;
    editID ='';
    submitBtn.textContent = "submit";
};

//clear container with all ites
function clearContainer(){
    const items = document.querySelectorAll('.grocery-item');
    if(items.length > 0){
        items.forEach((item)=>{
            groceryList.removeChild(item);
        });

        groceryContainer.classList.remove('show-container');
        displayAlert("empty list", "danger");
};
} 

//***********************LOCAL STORAGE
function addToLocalStorage(){};

