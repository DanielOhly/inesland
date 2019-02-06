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
        case "pdSC":
            pdSC();
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




function bnSC() {
    document.getElementById("subclassname").innerHTML = "<optgroup id=\"bnsc\" label=\"Barbarian\">" +
        "<option>Path of the Ancestral Guardian</option>" +
        "<option>Path of the Battlerager</option>" +
        "<option>Path of the Berserker</option>" +
        "<option>Path of the Storm Herald</option>" +
        "<option>Path of the Totem Warrior</option>" +
        "</optgroup>"
};

function bdSC() {
    document.getElementById("subclassname").innerHTML = "<optgroup id=\"bdsc\" label=\"Bard\">" +
        "<option>College of Glamour</option>" +
        "<option>College of Lore</option>" +
        "<option>College of Swords</option>" +
        "<option>College of Valor</option>" +
        "<option>College of Whispers</option>" +
        "</optgroup>"
};

function ccSC() {
    document.getElementById("subclassname").innerHTML = "<optgroup id=\"ccsc\" label=\"Cleric\">" +
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

function ddSC() {
    document.getElementById("subclassname").innerHTML = "<optgroup id=\"ddsc\" label=\"Druid\">" +
        "<option>Circle of Dreams</option>" +
        "<option>Cirle of the Land</option>" +
        "<option>Cirle of the Moon</option>" +
        "<option>Cirle of the Shepherd</option>" +
        "<option>Cirle of the Spores</option>" +
        "<option>Cirle of the Twilight</option>" +
        "</optgroup>"
}

function frSC() {
    document.getElementById("subclassname").innerHTML = "<optgroup id=\"fr\" label=\"Fighter\">" +
        "<option>Arcane Archer</option>" +
        "<option id=\"frbatl\">Battle Master</option>" +
        "<option>Cavalier</option>" +
        "<option>Champion</option>" +
        "<option>Eldritch Knight</option>" +
        "<option>Samurai</option>" +
        "</optgroup>"
}

function mkSC() {
    document.getElementById("subclassname").innerHTML = "<optgroup id=\"mksc\" label=\"Monk\">" +
        "<option>Way of the Drunken Master</option>" +
        "<option>Way of the Four Elements</option>" +
        "<option>Way of the Kensei</option>" +
        "<option>Way of the Long Death</option>" +
        "<option>Way of the Open Hand</option>" +
        "<option>Way of the Shadow</option>" +
        "<option>Way of the Sun Soul</option>" +
        "</optgroup>"
}

function pdSC() {
    document.getElementById("subclassname").innerHTML =
        "<optgroup id=\"pnsc\" label=\"Paladin\">" +
        "<option id=\"pnanci\">Oath of the Ancients</option>" +
        "<option>Oath of Conquest</option>" +
        "<option>Oath of the Crown</option>" +
        "<option>Oath of Devotion</option>" +
        "<option>Oath of Redemption</option>" +
        "<option>Oath of Vengeance</option>" +
        "<option>Oathbreaker</option>" +
        "</optgroup>"
}

function rrSC() {
    document.getElementById("subclassname").innerHTML =
        "<optgroup id=\"rrsc\" label=\"Ranger\">" +
        "<option>Beast Master</option>" +
        "<option>Gloom Stalker</option>" +
        "<option>Horizon Walker</option>" +
        "<option>Hunter</option>" +
        "<option>Monster Slayer</option>" +
        "</optgroup>"
}

function reSC() {
    document.getElementById("subclassname").innerHTML =
        "<optgroup id=\"resc\" label=\"Rogue\">" +
        "<option>Arcane Trickster</option>" +
        "<option>Assassin</option>" +
        "<option>Inquisitive</option>" +
        "<option id=\"remast\">Mastermind</option>" +
        "<option>Scout</option>" +
        "<option>Swashbuckler</option>" +
        "<option>Thief</option>" +
        "</optgroup>"
}

function srSC() {
    document.getElementById("subclassname").innerHTML =
        "<optgroup id=\"srsc\" label=\"Sorcerer\">" +
        "<option>Divine Soul</option>" +
        "<option>Draconic Bloodline</option>" +
        "<option>Shadow Magic</option>" +
        "<option>Stone Sorcery</option>" +
        "<option>Storm Sorcery</option>" +
        "<option>Wild Magic</option>" +
        "</optgroup>"
}

function wkSC() {
    document.getElementById("subclassname").innerHTML =
        "<optgroup id=\"wksc\" label=\"Warlock\">" +
        "<option>The Archfey</option>" +
        "<option>The Celestial</option>" +
        "<option>The Fiend</option>" +
        "<option>The Great Old One</option>" +
        "<option>The Hexblade</option>" +
        "<option>The Undying</option>" +
        "</optgroup>"
}

function wdSC() {
    document.getElementById("subclassname").innerHTML =
        "<optgroup id=\"wdsc\" label=\"Wizard\">" +
        "<option>Bladesinging</option>" +
        "<option>School of Abjuration</option>"+
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