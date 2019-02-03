// Initialize Firebase
var config = {
    apiKey: "AIzaSyDTfRaqpHHlLBE24_vEJyDkIgr2tMZZUNA",
    authDomain: "inesland-granimingul.firebaseapp.com",
    databaseURL: "https://inesland-granimingul.firebaseio.com",
    projectId: "inesland-granimingul",
    storageBucket: "",
    messagingSenderId: "630585231717"
  };
  firebase.initializeApp(config);

database= firebase.database();

//Checks that element has a non empty name and value property
const isValidElement = element => {
    return element.name && element.value;
};
//Checks if an input is a checkbox with/or multiple seletions
const isCheckbox = element => element.type === 'checkbox';
const isMultiSelect = element => element.options && element.multiple;

//Checks if checkboxes/radios are clicked
const isValidValue = element=> {
    return (!['checkbox', 'radio'].includes(element.type) || element.checked);
};

//Retriees the selected ioptions from a multi-select as an array.
const getSelectValues = options => [].reduce.call(options, (values, option) => {
    return options.selected ? values.concat(option.value) : values;
}, []);

//Retrives input data from form and returns it as JSON obj
const formtoJSON = elements=> [].reduce.call(elements,(data, element) => {
    
    //Makes sure element has required properties
    if(isValidElement(element) && isValidValue(element)){
        
        
        //Passing to check if fields have more than one value, stores as array
        if (isCheckbox(element)) {
            data[element.name] = (data[element.name] || []).concat(element.value);
        } else if( isMultiSelect(element)){
            data[element.name] = getSelectValues(element);
        } else {
            data[element.name] = element.value;
        }   
    }
    return data
}, {});

// Handler function to prevent default submissions and run script./
const handleFormSubmit = event => {
   //Stop the form from submitting, holding for AJAX 
    event.preventDefault();

    //TODO: Call our function to get the form data.
    const data=formtoJSON(form.elements);
    database.ref('Players/' + data.playername).push({
        CharacterName: data.characterfirstname+ " " + data.characterepithet+" " + data.characterlastname})
        ;
    //AS DEMO: Print the form data onscreen as a formatted JSON obj.
    const dataContainer = document.getElementsByClassName("results__display")[0];
    //Use JSON.Stringify() to make the output valid, human readable JSON
    dataContainer.textContent = JSON.stringify(data, null, " ");
};

const form = document.getElementsByClassName('charcreate')[0];
form.addEventListener("submit", handleFormSubmit);

//Adding Data to page
var charName= database.ref("Torg")


// database.ref().on("child_added", function(snapshot){
//     document.getElementsByName("results__display");
// })







