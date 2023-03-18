function Guerreiro() {

    var energia = '';
    var mana = '';

    this.getEnergia = function() {
        return energia;
    }

    this.setEnergia = function ( valor ) {

        if ( ! isNaN( valor )) {
            if ( valor > 100 ) {
                energia = 100;
            } if ( valor < 0 ) {
                energia = 0;
            } 

        energia = valor;

        }
    }

    this.getMana = function() {
        return mana;
    }

    this.setMana = function ( valor ) {

        mana += valor;

        if ( mana > 50 ) {
            mana = 50;
        } if ( mana < 0 ) {
            mana = 0;
        } 

        
    }

    this.adicianarEnergia = function ( valor ) {

        if ( ! isNaN( valor )) {

            energia += valor;
    
            if ( energia > 50 ) {
                mana = 50;
            } 

        }

    }

    this.sofrerDano = function ( valor ) {

        if ( ! isNaN( valor )) { 

            energia -= valor;
    
            if ( energia < 50 ) {
                energia = 0;
            } 
        }

    }

    this.morto = function ( energia ) {

        return energia <= 0;
        
    }


    this.getItemMafico = function() {
        
        return intemMagico;
    }

    this.usarItemMagico = function ( intemMagico ) {

        if( energia == 0 ) {
            console.log( "Jogador morto" );
            return;
        }

        var energiaItemMagico = intemMagico.getEnergiaAplicada();
        var manaItemMagico = intemMagico.getManaAplicada();

        if ( energiaItemMagico <= 0 )
            this.sofrerDano( energiaItemMagico * -1 )
        else
            this.adicianarEnergia( energiaItemMagico )

        
        this.setMana( manaItemMagico );
    }
}