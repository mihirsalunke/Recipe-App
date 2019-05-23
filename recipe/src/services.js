export const postRecipe = (title, ingredients, instructions, image) => {
    return fetch('/recipes', {
        method: 'POST',
        headers: new Headers({ 'content-type': 'application/json' }),
        body: JSON.stringify({ title, ingredients, instructions, image })
    })
    .catch( err => Promise.reject({ error: 'service-error', err }) )
    .then( response => {
        if(response.ok) {
            return response.json();
        }
        return Promise.reject({ error: 'service-complaint', err: response.statusText });
    });
}

export const fetchRecipes = () => {
    return fetch('/recipes')
    .catch( err => Promise.reject({ error: 'service-error', err }) )
    .then( response => {
        if(response.ok) {
            return response.json();
        }
        return Promise.reject({ error: 'service-complaint', err: response.statusText });
    });
}