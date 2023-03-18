function somarTodos() {
            
    var soma = 0;


    for( var i = 0; i < arguments.length; i++ ) {
        soma += arguments[ i ];
    }

    return soma;

}

function somarTodos2() {
            
    var soma = 0;

    for( var i in arguments ) {
        soma += arguments[ i ];
    }

    return soma;

}

function somarTodos3() {
            
    var soma = 0;

    for( var valor of arguments ) {
        soma += valor;
    }

    return soma;

}

console.log( somarTodos3( 1, 2, 3, 4, 5 ) );