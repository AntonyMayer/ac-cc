const getContactTags = (currentTags, contactTags, tags) => {
    const tagsList = currentTags.reduce((acc, tagID) => {
        const { tag } = contactTags.find(({ id }) => id === tagID);
        const { tag: fullTag } = tags.find(({ id }) => id === tag);

        return [ ...acc, fullTag ];
    }, []);

    return tagsList.length ? tagsList.join(', ') : '';
};

export default getContactTags;