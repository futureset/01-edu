export const getActive = () => {
    return [document.body.querySelectorAll('a.classical a.active'), document.body.querySelectorAll('a:not(.active).classical')]
}

export const getArchitects = () => {
    return [document.body.querySelectorAll('a'), document.body.querySelectorAll('span')]
}

export const getClassical = () => {
    return [document.body.querySelectorAll('a.classical'), document.body.querySelectorAll('a:not(.classical)')]
}

export const getBonannoPisano = () => {
   return [document.getElementById('BonannoPisano'), document.body.querySelectorAll('a.classical a.active')]
}


