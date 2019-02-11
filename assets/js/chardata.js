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

const database = firebase.database();

let data = "";
let charP = [];





//Checks that element has a non empty name and value property
const isValidElement = element => {
    return element.name && element.value;
};
//Checks if an input is a checkbox with/or multiple seletions
const isCheckbox = element => element.type === 'checkbox';
const isMultiSelect = element => element.options && element.multiple;

//Checks if checkboxes/radios are clicked
const isValidValue = element => {
    return (!['checkbox', 'radio'].includes(element.type) || element.checked);
};

//Retriees the selected ioptions from a multi-select as an array.
const getSelectValues = options => [].reduce.call(options, (values, option) => {
    return options.selected ? values.concat(option.value) : values;
}, []);

//Retrives input data from form and returns it as JSON obj
const formtoJSON = elements => [].reduce.call(elements, (data, element) => {

    //Makes sure element has required properties
    if (isValidElement(element) && isValidValue(element)) {

        //Passing to check if fields have more than one value, stores as array
        if (isCheckbox(element)) {
            data[element.name] = (data[element.name] || []).concat(element.value);
        } else if (isMultiSelect(element)) {
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

    //Gathering data from form, turning into JSON.
    const data = formtoJSON(form.elements);
    console.log(data)
//Accessing data JSON, structuring data
    let playerName = data.playername;
    let characterName = data.charactername;
    //Allowing all data to be sent to Firebase, storing as boolean to allow null info to pass.
    let charSV = {
        strSV: Boolean(data.strSV),
        dexSV: Boolean(data.dexSV),
        conSV: Boolean(data.conSV),
        wisSV: Boolean(data.wisSV),
        intSV: Boolean(data.intSV),
        chaSV: Boolean(data.chaSV)
    }
    //Storing the Ability Scores into one object
    let abilityMods= {
        STR: data.str,
        DEX: data.dex,
        CON: data.con,
        WIS: data.wis,
        INT: data.int,
        CHA: data.cha,
    }
    //Giving an "OR" to each aspect, so "undefined" can pass
    let charP ={
        Athl: data.athl || "",
        Acro: data.acro || "", 
        Slei: data.slei || "", 
        Stea: data.stea || "",
        Arca: data.arca || "",
        Hist: data.hist || "",
        Inve: data.inve || "",
        Natu: data.natu || "",
        Reli: data.reli || "",
        Anim: data.anim || "", 
        Insi: data.insi || "", 
        Medi: data.medi || "", 
        Perc: data.perc || "", 
        Surv: data.surv || "", 
        Dece: data.dece || "", 
        Inti: data.inti || "",
        Perf: data.perf || "", 
        Pers: data.pers || ""
    };
    let charRace={
        Race: data.racetype,
        Subrace: data.subracename
    }

    const dataUse = JSON.stringify(data);
    let charCore = {
        Player: playerName,
        Campaign: data.campaignname,
        Name: characterName,
        Race: charRace,
        Class: data.classname,
        SubClass: data.subclassname,
        Level: data.classlevel,
        HP: data.HP,
        AC: data.AC,
        Ability: abilityMods,
        SV: charSV,
        Prof: charP
    }
    //Pushing the Form info to database
    database.ref('Players/' + playerName).child('Character/' + characterName).set(charCore);
};

const form = document.getElementsByClassName('charcreate')[0];
form.addEventListener("submit", handleFormSubmit);