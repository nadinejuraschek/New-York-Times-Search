/***********************************
 VARIABLES
***********************************/
// API key and url
const APIkey = 'LyoHtWAdocofJU4Hx7Y10T0jIN8Igav2';
var queryURLBase =
  'https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=' + APIkey;

// input fields
var searchTerm = '';
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
    method: 'GET',
  }).then(function (response) {
    const articles = response.response.docs;

    const articleElements = [];

    for (let i = 0; i < recordNumber; i++) {
      const element = $('<div></div>')
        .addClass('card p-3 mb-2')
        .html(
          `<span>${articles[i].headline.main}</span><a href="${articles[i].uri}">Click to read</a>`
        );
      articleElements.push(element);
    }

    $('#results').append(articleElements);
  });
}
/***********************************
 EVENTS
***********************************/

$('#search-btn').on('click', function (event) {
  // store search term
  searchTerm = $('#search-term').val();
  // store record number
  recordNumber = $('#record-number').val();
  // store start year
  startYear = $('#start-year-input').val();
  // store end year
  endYear = $('#end-year-input').val();
  // add search term, record number, and start/end year to URL
  var queryURLFull =
    queryURLBase +
    '&q=' +
    searchTerm +
    '&begin_date=' +
    startYear +
    '0101&end_date=' +
    endYear +
    '0101';

  getInfo(recordNumber, queryURLFull);

  return false;
});

$('#clear-btn').on('click', function (event) {
  $('#results').html('');
});
