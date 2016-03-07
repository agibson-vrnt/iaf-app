var mockedData = [
  {
    "product": {
      "id": "premium",
      "text": "Premium in-depth coverage"
    },
    "term": {
      "id": "24",
      "text": "2 years"
    },
    "price": "121.33",
    "id": "d027bf09-b2be-4998-91a6-3f6a332cf420",
    "when": "2016-02-26T08:08:53.330Z"
  }
];
var REQUEST_URL = "http://10.78.48.178:9080/quotes";

function fetchQuotes( callback ) {

	fetch(REQUEST_URL, { headers: { "Accept": "application/json" } })
      .then((response) => response.json())
      .then((responseData) => callback( null, responseData ))
      .catch( e => console.log( e ))
      .done();

}
export default {

	mockedData,
	fetchQuotes

};
