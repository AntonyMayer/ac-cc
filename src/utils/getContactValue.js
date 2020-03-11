import formatCurrency from './formatCurrency';

const getContactValue = (contactID, deals) => {
    let dealCurrency;

    const totalValue = deals.reduce((acc, { contact, value, currency }) => {
        const dealValue = contact === contactID ? Number(value) : 0;
        
        dealCurrency = currency;

        return acc + dealValue;
    }, 0);

    return formatCurrency(totalValue, dealCurrency);
};

export default getContactValue;