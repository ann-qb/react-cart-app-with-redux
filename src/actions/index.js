export const increment = (id) => ({
    type: 'INCREMENT',
    payload: id
});

export const decrement = (id) => ({
    type: 'DECREMENT',
    payload: id
});

export const reset = () => ({
    type: 'RESET'
});