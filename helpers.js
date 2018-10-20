/**
* Perform fetch of a provided URL
* Executes callback function on completion
*
* @param {string} urlString - URL of data to get
* @param {function} callback - Callback function to be called upon success
*/
function fetchJSON(url, callback) {
    if (typeof url !== "string") {
        // if url is not a string, instead it is an object which combines path and params
        url = getUrlWithParams(url.path, url.params);
    }
    fetch(url)
        // .then(validateResponse)
        .then(readResponseAsJSON)
        .then(callback)
    // .catch(logError);
}

/**
 *
 *
 * @param {Promise} response - Response promise
 *
 * @returns {URLSearchParams}
 */
function getUrlWithParams(urlString, urlParams) {
    // created the initial link
    let url = new URL(urlString);
    // add search string beginning with '?'
    url.search = new URLSearchParams(urlParams);
    return url;
}

/**
 * Process the response and return JSON
 *
 * @param {Promise} response - Response promise
 *
 * @returns {Object}
 */
function readResponseAsJSON(response) {
    return response.json();
}

