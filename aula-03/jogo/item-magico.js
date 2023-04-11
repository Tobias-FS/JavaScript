function ItemMagico( vManaAplicada, vEnergiaAplicada ) {

    var manaAplicada = 0;
    var energiaAplicada = 0;
    var nome = '';

    this.getNome = function() {
        return nome;
    }

    this.setNome = function( nomeItem ) {
        nome = nomeItem;
    }

    this.getManaAplicada = function() {
        return manaAplicada;
    }

    var setManaAplicada = function( vManaAplicada ) {

        

        if ( ! isNaN( vManaAplicada ) ) {

            if ( vManaAplicada > 5 && vManaAplicada < -5 ) {
                manaAplicada = 0;
            }

        manaAplicada = vManaAplicada;

        }
    }
    setManaAplicada( vManaAplicada );

    this.getEnergiaAplicada = function() {
        return energiaAplicada;
    }

    var setEnergiaAplicada = function ( vEnergiaAplicada ) {

        

        if ( ! isNaN( vEnergiaAplicada ) ) {

            if ( vEnergiaAplicada > 20 && vEnergiaAplicada < -20 ) {
                energiaAplicada = 0;
            }

            energiaAplicada = vEnergiaAplicada;

        }
    }

    setEnergiaAplicada( vEnergiaAplicada );
}