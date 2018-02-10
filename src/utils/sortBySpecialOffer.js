const sortBySpecialOffer = (a, b) => {
    return (a.isSpecialOffer === b.isSpecialOffer)? 0 : a.isSpecialOffer? -1 : 1;
}

export default sortBySpecialOffer;