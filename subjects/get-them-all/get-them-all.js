// split an array by expression
// result will be an array containing two elements
// first element will contain all elements whose expression evaluation is true
// and second will contain all elements whose expression evaluation is false
const partition = (array, expression) => {
    const pass = []
    const fail = []
    array.forEach(item => (expression(item) ? pass : fail).push(item))
    console.log(`partition(${array.map(e => e.id)} ,${expression})= [${pass.map(e => e.id)}, ${fail.map(e => e.id)}]`)
    return [pass, fail]
}

// get all the elements that contains people from the html body and return as a JavaScript array
const getPeopleFromBody = () => {
    return Array.from(document.querySelectorAll('.classical, .baroque, .modern'))
}

// get classical people splitting into two arrays by whether they have a class of 'active'
export const getActive = () => {
    return partition(getClassical()[0], element => element.classList.contains('active'))
}

// get all people splitting into two arrays by whether they have a tagName of 'A'
export const getArchitects = () => {
    return partition(getPeopleFromBody(), element => element.tagName == 'A')
}

// get all classical architects splitting into two arrays by whether they have a class containing 'classical'
export const getClassical = () => {
    return partition(getArchitects()[0], element => element.classList.contains('classical'))
}

// returns an array of two elements
// first element is the one whose id is 'BonannoPisano'
// second element is all of the remaining classical elements
export const getBonannoPisano = () => {
    const bonnanoSearch = partition(getClassical()[0], element => element.id == 'BonannoPisano')
    return [bonnanoSearch[0][0], bonnanoSearch[1]]
}


