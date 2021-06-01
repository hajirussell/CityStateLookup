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


}

function onCityDropdownChanged() {

}