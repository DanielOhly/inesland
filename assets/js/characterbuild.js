
//Gathers characters for specific log in
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        displayName = user.displayName;
        var email = user.email;
        var emailVerified = user.emailVerified;
        var photoURL = user.photoURL;
        var uid = user.uid;
        var phoneNumber = user.phoneNumber;
        var providerData = user.providerData;
        user.getIdToken().then(function(accessToken) {
          let playerRef = database.ref("Players/" + displayName);
          playerRef.on("child_added", snap => {
            const playerHolder = document.getElementById("playerholder");
            let player = displayName;
            console.log(player)
            let $div = document.createElement("div");
            $div.innerHTML = player;
            $div.setAttribute = ("child-key", snap.key);
            $div.addEventListener("click", playerClicked)
            $div.id = (player)
            playerHolder.append($div)
        });
        });
      } else {
        // User is signed out.
        document.getElementById('sign-in-status').textContent = 'Signed out';
        document.getElementById('sign-in').textContent = 'Sign in';
        document.getElementById('account-details').textContent = 'null';
      }
    }, function(error) {
      console.log(error);
    });


let rootRef = firebase.database().ref();
let player = "";
let charStat = "";
let svCheck = ""
let displayName=""



//Appends Player names to the page, allows them to be clicked to load their individual characters

//Appends Individual player's characters to the page, will soon append their character's individual data to the page.
function playerClicked(e) {
    var playerID = e.target.getAttribute("id");
    const charRef = rootRef.child('Players/' + playerID + '/Character').orderByKey();
    const charInfo = document.getElementById("charholder");
    charInfo.innerHTML = "";
    charRef.on("child_added", snap => {
        console.log(playerID)
        var $div = document.createElement("div");
        let charBlock = snap.val();
        let charName = charBlock.Name
        console.log(charName);
        charInfo.append($div)
        $div.innerHTML = charName;
        $div.addEventListener("click", charClicked)
        $div.setAttribute = ("child-key", snap.key);
        $div.className = playerID;
        $div.id = charName
        charInfo.append($div)
    });
};
// Loads the Character's data/stats to the page
function charClicked(e) {
    var playerID = e.target.getAttribute("class");
    var charID = e.target.getAttribute("id")
    var charDetail = document.getElementById("charerrata")
    charDetail.innerHTML = ""
    const charStatRef = firebase.database().ref('Players/' + playerID + '/Character/' + charID).orderByKey();
    charStatRef.on("value", snap => {
        var $div = document.createElement("div");
        let charData = snap.val();


        //Getting Ability modifiers based on ability scores as per Player's Handbook
        let abilityScore = charData.Ability;
        let abilityMods = {};
        for (var key in abilityScore) {
            switch (abilityScore[key]) {
                case "1":
                    abilityMods[key] = -5;
                    break;
                case "2":
                case "3":
                    abilityMods[key] = -4;
                    break;
                case "4":
                case "5":
                    abilityMods[key] = -3;
                    break;
                case "6":
                case "7":
                    abilityMods[key] = -2;
                    break;
                case "8":
                case "9":
                    abilityMods[key] = -1;
                    break;
                case "10":
                case "11":
                    abilityMods[key] = 0;
                    break;
                case "12":
                case "13":
                    abilityMods[key] = 1;
                    break;
                case "14":
                case "15":
                    abilityMods[key] = 2;
                    break;
                case "16":
                case "17":
                    abilityMods[key] = 3;
                    break;
                case "18":
                case "19":
                    abilityMods[key] = 4;
                    break;
                case "20":
                case "21":
                    abilityMods[key] = 5;
                    break;
                case "22":
                case "23":
                    abilityMods[key] = 6;
                    break;
                case "24":
                case "25":
                    abilityMods[key] = 7;
                    break;
                case "26":
                case "27":
                    abilityMods[key] = 8;
                    break;
                case "28":
                case "29":
                    abilityMods[key] = 9;
                    break;
                case "30":
                    abilityMods[key] = 10;
                    break;
            }
        }

        //Proficiency Amount Switch Case, determining Proficiency amount by values in PHB
        let classLvl = charData.Level
        let proficiency = "";
        switch (classLvl) {
            case "1":
            case "2":
            case "3":
            case "4":
                proficiency = 2
                break
            case "5":
            case "6":
            case "7":
            case "8":
                proficiency = 3
                break;
            case "9":
            case "10":
            case "11":
            case "12":
                proficiency = 4
                break;
            case "13":
            case "14":
            case "15":
            case "16":
                proficiency = 5
                break;
            case "17":
            case "18":
            case "19":
            case "20":
                proficiency = 6
                break;
            default:
                console.log("womp womp")

        }

        //Taking out false keys for Ability Score SV's and pushing them to Object
        let checkSV = charData.SV;
        for (var key in checkSV) {
            if (checkSV[key] === false) {
                checkSV[key]= 0;
            } else {
                checkSV[key]= proficiency;
            }
        };

        //Substituting boolean for numerical values based on Ability Modifiers and Proficiency
        for (var key in checkSV){
            switch(key){
                case "strSV":
                checkSV[key]= checkSV[key]+abilityMods.STR
                break;
                case "dexSV":
                checkSV[key]= checkSV[key]+abilityMods.DEX
                break;
                case "conSV":
                checkSV[key]= checkSV[key]+abilityMods.CON
                break;
                case "intSV":
                checkSV[key]= checkSV[key]+abilityMods.INT
                break;
                case "wisSV":
                checkSV[key]= checkSV[key]+abilityMods.WIS
                break;
                case "chaSV":
                checkSV[key]= checkSV[key]+abilityMods.CHA
                break;
            }
        }

        //Check proficiency for null data, assign it to a numerical value for holding
        let checkProf = charData.Prof;
        for (var key in checkProf) {
            if (checkProf[key] === "") {
                checkProf[key]=0;
                checkProf[key] = checkProf[key];
            } else {
                checkProf[key] = checkProf[key];
            }
        };
        //Changing Proficiency and Expertise checks to numerical values
        for (var key in checkProf) {
            if (checkProf[key].length === 2) {
                checkProf[key] = proficiency + proficiency
            } else if (checkProf[key].length === 1)  {
                checkProf[key] = proficiency
            } else {
                checkProf[key] = 0
            }
        }

         //Adding Proficincy values to Ability Score Modifiers
        for (var key in checkProf){
            switch (key) {
                case "Athl":
                checkProf[key]=checkProf[key]+abilityMods.STR
                break;
                case "Acro":
                case "Slei":
                case "Stea":
                checkProf[key]=checkProf[key]+abilityMods.DEX
                break;
                case "Arca":
                case "Hist":
                case "Inve":
                case "Natu":
                case "Reli":
                checkProf[key]=checkProf[key]+abilityMods.INT
                break;
                case "Anim":
                case "Insi":
                case "Medi":
                case "Perc":
                case "Surv":
                checkProf[key]=checkProf[key]+abilityMods.WIS
                break;
                case "Dece":
                case "Inti":
                case "Perf":
                case "Pers":
                checkProf[key]=checkProf[key]+abilityMods.CHA
                break;

            }
        }


        

        console.log(charData)







    });
};