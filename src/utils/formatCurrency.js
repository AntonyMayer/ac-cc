const formatCurrency = (number, currency) => {
    const currencyMap = {
        usd: '$'
    };

    const symbol = currencyMap[currency]
        ? ' ' + currencyMap[currency]
        : '';

    return number
        ? number.toLocaleString() + symbol
        : '- - -';
};

export default formatCurrency;