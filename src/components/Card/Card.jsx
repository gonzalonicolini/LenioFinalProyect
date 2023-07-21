import { useContext, useState } from 'react';

const Card = ({ character }) => {
    const { id, name, thumbnail, comics } = character;
    const { setLoading, setCollectionUri } = useContext{};
};

export default Card;