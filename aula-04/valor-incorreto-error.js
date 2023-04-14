class ValorIncorretoError extends Error {

    // name = 'ServicoCadastroError'
    constructor( mensagem ) {
        super( mensagem );
        this.name = 'ServicoCadastroError';
    }

}