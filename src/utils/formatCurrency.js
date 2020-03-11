const formatCurrency = number => {
    return number
        ? number.toLocaleString() + ' $'
        : '- - -';
};

export default formatCurrency;