const getLocation = int => {
    // eslint-disable-next-line
    return ( (int>>>24) +'.' + (int>>16 & 255) +'.' + (int>>8 & 255) +'.' + (int & 255) );
};

export default getLocation;