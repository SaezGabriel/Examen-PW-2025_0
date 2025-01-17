export interface TODO {
    codigo:number,
    nombre_tarea:string,
    estado:boolean
}

export const agregarTODO = (listaTODOs:TODO[], num:number, nombre:string)=>{
    const nuevaLista:TODO[] = listaTODOs
    let nuevoTODO:TODO = {
        codigo:num,
        nombre_tarea:nombre,
        estado:false

    }
    nuevaLista.push(nuevoTODO)
    return nuevaLista

}

export const marcarTODO=(listaTODOs:TODO[], num:number)=>{
    const nuevaLista:TODO[] = listaTODOs
    for (let TODO of listaTODOs){
        if ( TODO.codigo== num){
            TODO.estado = true
        }
    }
    return nuevaLista
}

export const reporteTODOs =(listaTODOs: TODO[])=>{
    let marca:string = ""
    for(let TODO of listaTODOs){
        if(TODO.estado==true){
            marca = "X"
        }
        console.log(
            '(',TODO.codigo,')', " ",
            TODO.nombre_tarea, " ",
            '[',
            marca,
            ']'

        );
        
    }

}


