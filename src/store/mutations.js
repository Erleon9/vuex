 export const incrementar = (state) =>{
    state.valor += 3
}

 export const incrementarPor = (state, payload)=>{
    state.valor += payload.numero
    state.nombre = payload.nombre
}