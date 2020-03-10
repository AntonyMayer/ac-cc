// import mockData from './mockData.json';
// export const fetchResource = () => ({ contacts: mockData })

export const fetchResource = resourceName => {
    const {
        REACT_APP_API_URL, REACT_APP_API_KEY, REACT_APP_PROXY 
    } = process.env;
    
    return fetch(REACT_APP_PROXY + REACT_APP_API_URL + resourceName, {
        headers: {
            'Api-Token': REACT_APP_API_KEY,
            'Access-Control-Allow-Origin': REACT_APP_PROXY
        }
    })
    .then(res => res.json())
    .catch(e => { throw new Error(e); });
}
