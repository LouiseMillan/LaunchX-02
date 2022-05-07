class Logger{
    constructor(name){
        this.count = 0;
        this.name = name;
    }

    log(message){
        this.count++;
        console.log('[' + this.name + '] ' + message);
    }
}

// Nuevo objeto instanciado
module.exports = new Logger('DEFAULT');

// Clase
module.exports.Logger = Logger;
