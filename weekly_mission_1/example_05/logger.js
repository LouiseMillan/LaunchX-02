class Logger{
    constructor(name){
        // Al crear este objeto se guardarán estos valores
        this.count = 0;
        this.name = name;
    }

    log(message){
        // Se aumenta el contador interno al llamar este método
        this.count++;
        console.log('[' + this.name + '] ' + message);
    }
}

// Instanciación del objeto y se exporta
module.exports = new Logger('DEFAULT');
