/*
    Ten en cuente:
        - require('./Logger'); te dará el objeto creado.
        - require('./Logger').Logger; te regresará la clase.

    En este caso estamos agregando una función más al objeto instanciado, no a la clase.
 */

require('./logger').customMessage = function(){
    console.log('This is a new funcionality');
}