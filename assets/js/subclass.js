//Function to call specific Sub Class groups by option value
function displaySC() {
    var selectorSC = document.getElementById("classname");
    var classSel = selectorSC.options[selectorSC.selectedIndex].id;
    switch (classSel) {
        case "bnSC":
            bnSC();
            break;
        case "bdSC":
            bdSC();
            break;
        case "ccSC":
            ccSC();
            break;
        case "ddSC":
            ddSC();
            break;
        case "frSC":
            frSC();
            break;
        case "mkSC":
            mkSC();
            break;
        case "pnSC":
            pnSC();
            break;
        case "rrSC":
            rrSC();
            break;
        case "reSC":
            reSC();
            break;
        case "srSC":
            srSC();
            break;
        case "wkSC":
            wkSC();
            break;
        case "wdSC":
            wdSC();
            break;

    }
};
//Barbarian
function bnSC() {
    document.getElementById("subclassname").innerHTML = "<optgroup id=\"bnsc\" label=\"Barbarian\">" +
        "<option>Barbarian</option>" +
        "<option>Path of the Ancestral Guardian</option>" +
        "<option>Path of the Battlerager</option>" +
        "<option>Path of the Berserker</option>" +
        "<option>Path of the Storm Herald</option>" +
        "<option>Path of the Totem Warrior</option>" +
        "</optgroup>"
};
//Bard
function bdSC() {
    document.getElementById("subclassname").innerHTML = "<optgroup id=\"bdsc\" label=\"Bard\">" +
        "<option>Bard</option>" +
        "<option>College of Glamour</option>" +
        "<option>College of Lore</option>" +
        "<option>College of Swords</option>" +
        "<option>College of Valor</option>" +
        "<option>College of Whispers</option>" +
        "</optgroup>"
};
//Cleric
function ccSC() {
    document.getElementById("subclassname").innerHTML = "<optgroup id=\"ccsc\" label=\"Cleric\">" +
        "<option>Cleric</option>" +
        "<option id=\"ccarca\">Arcana Domain</option>" +
        "<option>Death Domain</option>" +
        "<option>Forge Domain</option>" +
        "<option>Grave Domain</option>" +
        "<option>Knowledge Domain</option>" +
        "<option>Life Domain</option>" +
        "<option>Light Domain</option>" +
        "<option>Nature Domain</option>" +
        "<option id=\"cctempe\">Tempest Domain</option>" +
        "<option>Trickery Domain</option>" +
        "<option>War Domain</option>" +
        "</optgroup>"
}
//Druid
function ddSC() {
    document.getElementById("subclassname").innerHTML = "<optgroup id=\"ddsc\" label=\"Druid\">" +
        "<option>Druid</option>" +
        "<option>Circle of Dreams</option>" +
        "<option>Cirle of the Land</option>" +
        "<option>Cirle of the Moon</option>" +
        "<option>Cirle of the Shepherd</option>" +
        "<option>Cirle of the Spores</option>" +
        "<option>Cirle of the Twilight</option>" +
        "</optgroup>"
}
//Fighter
function frSC() {
    document.getElementById("subclassname").innerHTML = "<optgroup id=\"fr\" label=\"Fighter\">" +
        "<option>Fighter</option>" +
        "<option>Arcane Archer</option>" +
        "<option id=\"frbatl\">Battle Master</option>" +
        "<option>Cavalier</option>" +
        "<option>Champion</option>" +
        "<option>Eldritch Knight</option>" +
        "<option>Samurai</option>" +
        "</optgroup>"
}
//Monk
function mkSC() {
    document.getElementById("subclassname").innerHTML = "<optgroup id=\"mksc\" label=\"Monk\">" +
        "<option>Monk</option>" +
        "<option>Way of the Drunken Master</option>" +
        "<option>Way of the Four Elements</option>" +
        "<option>Way of the Kensei</option>" +
        "<option>Way of the Long Death</option>" +
        "<option>Way of the Open Hand</option>" +
        "<option>Way of the Shadow</option>" +
        "<option>Way of the Sun Soul</option>" +
        "</optgroup>"
}
//Paladin
function pnSC() {
    document.getElementById("subclassname").innerHTML =
        "<optgroup id=\"pnsc\" label=\"Paladin\">" +
        "<option>Paladin</option>" +
        "<option id=\"pnanci\">Oath of the Ancients</option>" +
        "<option>Oath of Conquest</option>" +
        "<option>Oath of the Crown</option>" +
        "<option>Oath of Devotion</option>" +
        "<option>Oath of Redemption</option>" +
        "<option>Oath of Vengeance</option>" +
        "<option>Oathbreaker</option>" +
        "</optgroup>"
}
//Ranger
function rrSC() {
    document.getElementById("subclassname").innerHTML =
        "<optgroup id=\"rrsc\" label=\"Ranger\">" +
        "<option>Ranger</option>" +
        "<option>Beast Master</option>" +
        "<option>Gloom Stalker</option>" +
        "<option>Horizon Walker</option>" +
        "<option>Hunter</option>" +
        "<option>Monster Slayer</option>" +
        "</optgroup>"
}
//Rogue
function reSC() {
    document.getElementById("subclassname").innerHTML =
        "<optgroup id=\"resc\" label=\"Rogue\">" +
        "<option>Rogue</option>" +
        "<option>Arcane Trickster</option>" +
        "<option>Assassin</option>" +
        "<option>Inquisitive</option>" +
        "<option id=\"remast\">Mastermind</option>" +
        "<option>Scout</option>" +
        "<option>Swashbuckler</option>" +
        "<option>Thief</option>" +
        "</optgroup>"
}
//Sorcerer
function srSC() {
    document.getElementById("subclassname").innerHTML =
        "<optgroup id=\"srsc\" label=\"Sorcerer\">" +
        "<option>Sorcerer</option>" +

        "<option>Divine Soul</option>" +
        "<option>Draconic Bloodline</option>" +
        "<option>Shadow Magic</option>" +
        "<option>Stone Sorcery</option>" +
        "<option>Storm Sorcery</option>" +
        "<option>Wild Magic</option>" +
        "</optgroup>"
}
//Warlock
function wkSC() {
    document.getElementById("subclassname").innerHTML =
        "<optgroup id=\"wksc\" label=\"Warlock\">" +
        "<option>Warlock</option>" +
        "<option>The Archfey</option>" +
        "<option>The Celestial</option>" +
        "<option>The Fiend</option>" +
        "<option>The Great Old One</option>" +
        "<option>The Hexblade</option>" +
        "<option>The Undying</option>" +
        "</optgroup>"
}
//Wizard
function wdSC() {
    document.getElementById("subclassname").innerHTML =
        "<optgroup id=\"wdsc\" label=\"Wizard\">" +
        "<option>Wizard</option>" +
        "<option>Bladesinging</option>" +
        "<option>School of Abjuration</option>" +
        "<option>School of Conjuration</option>" +
        "<option>School of Divination</option>" +
        "<option>School of Enchantment</option>" +
        "<option>School of Evocation</option>" +
        "<option>School of Illusion</option>" +
        "<option>School of Necromancy</option>" +
        "<option>School of Transmutation</option>" +
        "<option id=\"wdwarm\">War Magic</option>" +
        "</optgroup>"
}

//Switch case to display different Subraces
function displaySR() {
    var selectorSR = document.getElementById("racetype");
    var raceSel = selectorSR.options[selectorSR.selectedIndex].id;
    switch (raceSel) {
        case "noSR":
            noSR();
            break;
        case "arSR":
            arSR();
            break;
        case "dnSR":
            dnSR();
            break;
        case "dfSR":
            dfSR();
            break;
        case "efSR":
            efSR();
            break;
        case "giSR":
            giSR();
            break;
        case "geSR":
            geSR();
            break;
        case "hgSR":
            hgSR();
            break;
        case "hfSR":
            hfSR();
            break;
        case "hSR":
            hSR();
            break;
        case "tgSR":
            tgSR();
            break;

    }
};
//If the Race has no subrace, call this Function
function noSR() {
    document.getElementById("subracename").innerHTML =
        "<optgroup id=\"noSR\" label=\"No Subraces Available\">" +
        "<option value=\"-\" selected>No Subraces Available</option>" +
        "</optgroup>"
}
//Aasimar
function arSR() {
    document.getElementById("subracename").innerHTML =
        "<optgroup id=\"arSR\" label=\"Aasimar\">" +
        "<option value=\"Protector\">Protector</option>" +
        "<option value=\"Scourge\">Scourge</option>" +
        "<option value=\"Fallen\">Fallen</option>" +
        "</optgroup>"
}
//Dragonborn
function dnSR() {
    document.getElementById("subracename").innerHTML =
        "<optgroup id=\"arSR\" label=\"Dragonborn\">" +
        "<option value=\"Black\">Black</option>" +
        "<option value=\"Blue\">Blue</option>" +
        "<option value=\"Brass\">Brass</option>" +
        "<option value=\"Bronze\">Bronze</option>" +
        "<option value=\"Copper\">Copper</option>" +
        "<option value=\"Gold\">Gold</option>" +
        "<option value=\"Gold\">Gold</option>" +
        "<option value=\"Green\">Green</option>" +
        "<option value=\"Red\">Red</option>" +
        "<option value=\"Silver\">Silver</option>" +
        "<option value=\"White\">White</option>" +
        "</optgroup>"
}
//Dwarf
function dfSR() {
    document.getElementById("subracename").innerHTML =
        "<optgroup id=\"dfSR\" label=\"Dwarf\">" +
        "<option value=\"Hill\">Hill</option>" +
        "<option value=\"Mountain\">Mountain</option>" +
        "<option value=\"Duergar\">Duergar</option>" +
        "</optgroup>"
}
//Elf
function efSR() {
    document.getElementById("subracename").innerHTML =
        "<optgroup id=\"arSR\" label=\"Elf\">" +
        "<option value=\"Drow\">Drow</option>" +
        "<option value=\"Eladrin\">Eladrin</option>" +
        "<option value=\"High Elf\">High Elf</option>" +
        "<option value=\"Sea Elf\">Sea Elf</option>" +
        "<option value=\"Shadar-Kai\">Shadar-Kai</option>" +
        "<option value=\"Wood Elf\">Wood Elf</option>" +
        "</optgroup>"
}
//Genasi
function giSR() {
    document.getElementById("subracename").innerHTML =
        "<optgroup id=\"gi\" label=\"Genasi\">" +
        "<option value=\"Air\">Air</option>" +
        "<option value=\"Earth\">Earth</option>" +
        "<option value=\"Fire\">Fire</option>" +
        "<option value=\"Water\">Water</option>" +
        "</optgroup>"
}
//Gnome
function geSR() {
    document.getElementById("subracename").innerHTML =
        "<optgroup id=\"geSR\" label=\"Gnome\">" +
        "<option value=\"Deep\">Deep</option>" +
        "<option value=\"Forest\">Forest</option>" +
        "<option value=\"Rock\">Rock</option>" +
        "</optgroup>"
}
//Halfling
function hgSR() {
    document.getElementById("subracename").innerHTML =
        "<optgroup id=\"hgSR\" label=\"Halfling\">" +
        "<option value=\"Lightfoot\">Lightfoot</option>" +
        "<option value=\"Stout\">Stout</option>" +
        "<option value=\"Ghostwise\">Ghostwise</option>" +
        "</optgroup>"
}
//Half Elf
function hfSR() {
    document.getElementById("subracename").innerHTML =
        "<optgroup id=\"hfSR\" label=\"Half-Elf\">" +
        "<option value=\"None\">None</option>" +
        "<option value=\"Protector\">Drow</option>" +
        "<option value=\"Scourge\">High Elf</option>" +
        "<option value=\"Fallen\">Sea Elf</option>" +
        "<option value=\"Protector\">Wood Elf</option>" +
        "</optgroup>"
}
//Human
function hSR() {
    document.getElementById("subracename").innerHTML =
        "<optgroup id=\"hSR\" label=\"Human\">" +
        "<option value=\"Human\">Human</option>" +
        "<option value=\"Variant Human\">Variant Human</option>" +
        "</optgroup>"
}
//Tiefling
function tgSR() {
    document.getElementById("subracename").innerHTML =
        "<optgroup id=\"tgSR\" label=\"Tiefling\">" +
        "<option value=\"Tiefling\">Tiefling/ Asmodeus</option>" +
        "<option value=\"Feral\">Feral</option>" +
        "<option value=\"Devil's Tongue\">Devil's Tongue</option>" +
        "<option value=\"Winged\">Winged</option>" +
        "<option value=\"Baalzebul\">Baalzebul</option>" +
        "<option value=\"Dispater\">Dispater</option>" +
        "<option value=\"Fierna\">Fierna</option>" +
        "<option value=\"Glasya\">Glasya</option>" +
        "<option value=\"Levistus\">Levistus</option>" +
        "<option value=\"Mammon\">Mammon</option>" +
        "<option value=\"Mephistopheles\">Mephistopheles</option>" +
        "<option value=\"Zariel\">Zariel</option>" +
        "</optgroup>"
}


//Makes checkbox for Expertise if applicable
//Bug!! Does not go away if unclicked
function makeExp(div, name, value) {
    document.getElementById(div).innerHTML = "<input type=\"checkbox\" name=" + name + " value=" + value + ">" + "<span>Expertise</span>";
}