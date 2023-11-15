//COMO ELIMINAR PROPIEDADES DE UN OBJETO
//ESCRIBIMOS LOS DATOS ORIGINALES
const persona = {
    nombre: 'Paquito',
    apellido: 'Chocolatero',
    edad: 155,
    ocupacion: 'Programador',
    estudios: 'Ingenieria'
}
//FORMA NO RECOMENDADA DE HACERLO, POR LA POSIBLE MUTACION DEL CODIGO ORIGINAL
const personadelete = {
    nombre: 'Paquito',
    apellido: 'Chocolatero',
    edad: 155,
    ocupacion: 'Programador',
    estudios: 'Ingenieria'
}

delete personadelete.nombre

//FORMA dispendiosa/lento DE SUPRIMIR ALGUN ITEM EJ:estudio.
const copiapersona= {
    nombre: persona.nombre,
    apellido: persona.apellido,
    edad: persona.edad,
    ocupacion: persona.ocupacion
    
}
//FORMA rapida
const{edad, ...copiapersonaRapido} = persona

console.log('Objeto persona original', persona)
console.log('Objeto persona delete', personadelete)
console.log('Objeto persona copiaLento', copiapersona)
console.log('Objeto persona copiaRapido', copiapersonaRapido)
