export const fetchResource = (resourceName, query) => {
    const {
        REACT_APP_API_URL, REACT_APP_API_KEY, REACT_APP_PROXY 
    } = process.env;

    const url = REACT_APP_PROXY + REACT_APP_API_URL + resourceName;
    
    return fetch(`${url}?${query}`, {
        headers: {
            'Api-Token': REACT_APP_API_KEY,
            'Access-Control-Allow-Origin': REACT_APP_PROXY
        }
    })
    .then(res => res.json())
    .catch(e => { throw new Error(e); });
}

export default fetchResource;