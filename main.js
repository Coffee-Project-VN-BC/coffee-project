"use strict"

//this is putting the names of the coffees together:
function renderCoffee(coffee) {
    var html = '<div class="coffee">';
    html += '<h2>' + coffee.name + '</h2>';
    html += '<p>' + coffee.roast + '</p>';
    html += '</div>';

    return html;
}


//this is listing all of the coffees from the coffees variable below, converts the above into a string, and loops through all of the coffees in ascending ID order
function renderCoffees(coffees) {
    var html = '';
    for(var i = 0; i < coffees.length; i++) {
        html += renderCoffee(coffees[i]); //same as: html = html + renderCoffee(coffees[i])
    }
    return html;
}

// function renderCoffees(coffees) {
//     var html = '';
//     for(var i = coffees.length - 1; i >= 0; i--) {
//         html += renderCoffee(coffees[i]);
//     }
//     return html;
// }

// this is the search engine function for the select
function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = []; //has to create an empty array so it can push whatever the selected value is
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }  else if(roastSelection.value === 'all') {
            filteredCoffees.push(coffee);
        }
    });
    coffeeList.innerHTML = renderCoffees(filteredCoffees);
    //innerHTML is the content within the open/close tags
}

// this is for the Searchbox
function searchCoffees() {
    var searchRoast = searchBox.value.toUpperCase(); //can be upper or lower case so it can detect all words inserted
    var filteredCoffees = []; //has to create an empty array so it can push whatever the search value is
    coffees.forEach(function(coffee) {
        if (coffee.name.toUpperCase().includes(searchRoast)) {
            filteredCoffees.push(coffee);
            console.log(filteredCoffees);
        }
    });
    coffeeList.innerHTML = renderCoffees(filteredCoffees);
}

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

// The querySelector() allows you to find the first element that matches one or more CSS selectors.
var coffeeList = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
var searchBox = document.querySelector('#input-blend');

//These are the events:
coffeeList.innerHTML = renderCoffees(coffees);
submitButton.addEventListener('click', updateCoffees);
searchBox.addEventListener('keyup', searchCoffees);