function Contato() {

    var nome = '';
    var telefone = '';

    this.getNome = function() {
        return nome;
    };

    this.setNome = function( valor ) {
        nome = valor;
    };

    this.getTelefone = function() {
        return telefone;
    };

    this.setTelefone = function( valor ) {
        telefone = valor;
    };
}