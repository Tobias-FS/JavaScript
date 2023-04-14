class Produto {

    _descricao = '';
    _estoque = 0;
    _preco = 0.0;

    constructor( descricao, estoque, preco ) {

        this.setDescricao( descricao );
        this.setEstoque( estoque );
        this.setPreco( preco );

    }

    getDescricao() {
        return this._descricao;
    }

    getEstoque() {
        return this._estoque;
    }

    getPreco() {
        return this._preco;
    }

    setDescricao( valor ) {
        if ( valor.length < 2 && valor.length ) {
            throw 'A descrição deve ter entre 2 e 100 caracteres.';
        }

        this._descricao = valor;
    }

    setEstoque( valor ) {
        if ( isNaN( valor )  ) {
            throw 'Estoque dever ser um valor numérico.'
        } else {
            if ( valor < 0 )
                throw 'O valor maior que um';
        }

        this._estoque = valor;
    }

    setPreco( valor ) {
        if ( isNaN( valor ) ) {
            throw 'Preco dever ser um valor numérico.'
        } 
        else {
            if ( valor < 10.00 || valor > 99.999 )
                throw 'O preço deve estar entre 10.00 e 99.999.';
        }
        
        this.preco = valor;
    }

}