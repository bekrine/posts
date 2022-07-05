


export const addToLocalStorege=(value)=>{
    localStorage.setItem('accesToken',value)
}

export const gitLocalStoreg=()=>{
    return localStorage.getItem('accesToken')
}

export const deleteLocalStorege=()=>{
    localStorage.removeItem('accesToken')
}