"use strict";

let cityStates = [{
    state: "California",
    stateAbbr: "CA",
    cities: ["Los Angeles", "San Francisco", "San Diego"],
},
{
    state: "Colorado",
    stateAbbr: "CO",
    cities: ["Aspen", "Boulder", "Denver", "Pagosa Springs"],
},
{
    state: "Texas",
    stateAbbr: "TX",
    cities: ["Austin", "Dallas", "Houston", "San Antonio"]
}
];

window.onload = function () {
    //load the states dropdown as soon as the page loads
    statesDropdownLoad();

    //connect an onchange event for the states dropdown
    const stateDropdown = document.getElementById("stateDropdown");
    stateDropdown.onchange = onStateDropdownChanged;
    //connect an onchange event for the cities dropdown
    const cityDropdown = document.getElementById("cityDropdown");
    cityDropdown.onchange = onCityDropdownChanged;


}

function statesDropdownLoad() {
    //find the state dropdown
    const stateDropdown = document.getElementById("stateDropdown");

    //create the default "select one..." option
    let selectOptionOne = document.createElement("option");
    selectOptionOne.textContent = "Select one...";
    selectOptionOne.value = " ";
    stateDropdown.appendChild(selectOptionOne);

    //loop through the array and
    //append all the options into dropdown
    for (let i = 0; i < cityStates.length; i++) {
        let stateOption = document.createElement("option");
        stateOption.textContent = cityStates[i].state;
        stateOption.value = cityStates[i].stateAbbr;
        stateDropdown.appendChild(stateOption);
    }

    //find city dropdown
    const cityDropdown = document.getElementById("cityDropdown");

    //add "select state first..." option
    selectOptionOne = document.createElement("option");
    selectOptionOne.textContent = "Select state first...";
    selectOptionOne.value = "";
    cityDropdown.appendChild(selectOptionOne);
}

function onStateDropdownChanged() {
    //find the city and state dropdowns
    const stateDropdown = document.getElementById("stateDropdown");
    const cityDropdown = document.getElementById("cityDropdown");

    //remove previous message (not written yet)
    const stateMessagePara = document.getElementById("stateMessagePara");
    stateMessagePara.innerHTML = " ";

    //remove city selection
    cityDropdown.length = 0;

    //find the selected state value
    let selectedState = stateDropdown.value;

    //did they pick "select one..."?
    if (selectedState == " ") {
        let selectOptionOne = document.createElement("option");
        selectOptionOne.textContent = "Select state first...";
        selectOptionOne.value = "";
        cityDropdown.appendChild(selectOptionOne);

        return;
    }
    //find the state in the array under the correct state code
    let matchingState = cityStates.find(arrayElement => arrayElement.stateAbbr == selectedState);

    //add "select state first..." option
    let selectOptionOne = document.createElement("option");
    selectOptionOne.textContent = "Select one...";
    selectOptionOne.value = "";
    cityDropdown.appendChild(selectOptionOne);

    //loop through the cities in the matching state
    //and append options for them in the city dropdown
    for (let i = 0; i < matchingState.cities.length; i++) {
        let cityOption = document.createElement("option");
        cityOption.textContent = matchingState.cities[i];
        cityDropdown.appendChild(cityOption);
    }
}

function onCityDropdownChanged() {
    //find the dropdowns for state and city
    const stateDropdown = document.getElementById("stateDropdown");
    const cityDropdown = document.getElementById("cityDropdown");

    //erase previous city message
    const stateMessagePara = document.getElementById("stateMessagePara");
    stateMessagePara.innerHTML = " ";

    //get selected city
    let selectedCity = cityDropdown.value;

    //if the selection is "select one..." exit function
    if (selectedCity == " ") {
        return;
    }

    //get selected state
    let selectedStateIndex = stateDropdown.selectedIndex;
    let selectedState = stateDropdown.options[selectedStateIndex].text;

    //display message
    let displayMessage = "State: " + selectedState + "<br><br>" +
        "City: " + selectedCity;
    stateMessagePara.innerHTML = displayMessage;
}