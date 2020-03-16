export const increment = (numeroIncremento) => {
    return {
        type: 'INCREMENT',
        params: numeroIncremento
    }
}

export const decrement = () => {
    return {
        type: 'DECREMENT'
    }
}