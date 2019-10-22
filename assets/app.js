/***********************************
 VARIABLES
***********************************/
// API key and url
const APIkey = "LyoHtWAdocofJU4Hx7Y10T0jIN8Igav2";
var queryURLBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + APIkey;

// input fields
var searchTerm = "";
var recordNumber = 0;
var endYear = 0;
var startYear = 0;

var articleCounter = 0;

/***********************************
 FUNCTIONS
***********************************/
// store ajax call
function getInfo(recordNumber, queryURL) {
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        // TEST
        console.log(response);
    });
}
/***********************************
 EVENTS
***********************************/

$("#search-btn").on("click", function (event) {
    // store search term
    searchTerm = $("#search-term").val();
    // TEST
    console.log(searchTerm);
    // store record number
    recordNumber = $("#record-number").val();
    // TEST
    console.log(recordNumber);
    // store start year
    startYear = $("#start-year-input").val();
    // store end year
    endYear = $("#end-year-input").val();
    // add search term, record number, and start/end year to URL
    var queryURLFull = queryURLBase + "&q=" + searchTerm + "&begin_date=" + startYear + "0101&end_date=" + endYear + "0101";
    // TEST
    console.log(queryURLFull);
    getInfo(recordNumber, queryURLFull);
    return false;
});

$("#clear-btn").on("click", function (event) {

});

/***********************************
 MAIN CODE

 // Example APIkey:
 // https://api.nytimes.com/svc/search/v2/articlesearch.json?q= + searchTerm + &api-key=LyoHtWAdocofJU4Hx7Y10T0jIN8Igav2;

***********************************/
// get and store user inputs

// create queryURL with user inputs

// ajax call for search button

// display articles

// set up clear button