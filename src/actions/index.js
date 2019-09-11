export const addFeature = (feature) => {
    return {
        type: 'ADD_FEATURE',
        paylad: feature
    }
}

export const removeFeature = (feature) => {
    return {
        type: 'REMOVE_FEATURE',
        paylad: feature
    }
}