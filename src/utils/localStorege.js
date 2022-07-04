


export const addToLocalStorege=(value)=>{
    localStorage.setItem('accesToken',value)
    console.log(value,'local')
}

export const gitLocalStoreg=()=>{
    return localStorage.getItem('accesToken')
}

export const deleteLocalStorege=()=>{
    localStorage.removeItem('accesToken')
}