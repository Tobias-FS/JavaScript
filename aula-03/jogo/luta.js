function Luta() {

    const VALOR_MAXIMO_ENERGIA = 20;
    const VALOR_MINIMO_ENERGIA = -20;
    const VALOR_MAXIMO_MANA = 5;
    const VALOR_MINIMO_MANA = -5;
    const PROXIMO_TURNO = 3;
    const QUANTIDADE_DE_TURNOS = 10;

    this.jogar = function() {

        var turnos = 1;
        var turnoBonus = 3;

        // gurreiro1 =  criarGuerreiros();
        // gurreiro2 =  criarGuerreiros();

        var gurreiro1 = new Guerreiro();
        gurreiro1.setNome( 'Zé' );

        var gurreiro2 = new Guerreiro();
        gurreiro2.setNome( 'Zé2' );

        while( turnos != QUANTIDADE_DE_TURNOS && ( gurreiro1.morto() || gurreiro1.morto() ) != true ) {

            console.log( "Tuno ", turnos );

            var atacar = Math.random();

            if ( turnos === turnoBonus ) {
                
                var manaAplicadaNoItem = Math.random() * ( VALOR_MAXIMO_MANA - VALOR_MINIMO_MANA ) + VALOR_MINIMO_MANA;
                var energiaAplicadaNoItem = Math.random() * ( VALOR_MAXIMO_ENERGIA - VALOR_MINIMO_ENERGIA ) + VALOR_MINIMO_ENERGIA;

                var itemMagico = new  ItemMagico( manaAplicadaNoItem, energiaAplicadaNoItem );
                itemMagico.setNome( "Item Magico" );

                if ( atacar >= 0 && atacar <= 0.5 ) {
                    var nomeGuerreiro = gurreiro1.getNome();
                    var manaDoItem = itemMagico.getManaAplicada();
                    var energiaDoItem = itemMagico.getEnergiaAplicada();
                    var nomeDoItem = itemMagico.getNome();
                    gurreiro1.usarItemMagico( itemMagico );
                    console.log( "O guerreiro ", nomeGuerreiro, "recebeu o item: ", nomeDoItem );
                    console.log( "Com ", energiaDoItem, " de Energia e ", manaDoItem," de Mana." );
                }
                if ( atacar > 0.5 ) {
                    var nomeGuerreiro = gurreiro2.getNome();
                    var manaDoItem = itemMagico.getManaAplicada();
                    var energiaDoItem = itemMagico.getEnergiaAplicada();
                    var nomeDoItem = itemMagico.getNome();
                    gurreiro2.usarItemMagico( itemMagico );
                    console.log( "O guerreiro ", nomeGuerreiro, "recebeu o item: ", nomeDoItem );
                    console.log( "Com ", energiaDoItem, " de Energia e ", manaDoItem," de Mana." );
                }

                turnoBonus += PROXIMO_TURNO;

            }

            if ( atacar >= 0 && atacar <= 0.5 ) {
                console.log( "Guerreiro: ", gurreiro1.getNome(), " vai atacar!" );

                gurreiro2.sofrerDano( 30 );
            }
            if ( atacar > 0.5 ) {
                console.log( "Guerreiro: ", gurreiro2.getNome(), " vai atacar!" );

                gurreiro1.sofrerDano( 30 );
            }
            
            ++turnos;
        }

        if ( gurreiro1.morto() == true && gurreiro2.morto() == true ) {
            console.log( "chegou" );

            if ( gurreiro1.getEnergia() === gurreiro1.getEnergia() ) {

                if( gurreiro1.getMana() === gurreiro2.getMana() )
                    console.log( "Empate");
                if( gurreiro1.getMana() > gurreiro2.getMana() )
                    console.log( gurreiro1.getNome(), " é o vencedor");
                if( gurreiro2.getMana() > gurreiro2.getMana() )
                    console.log( gurreiro1.getNome(), " é o vencedor");

            }
        } else {
            if ( gurreiro1.getEnergia() > gurreiro2.getEnergia() )
                console.log( gurreiro1.getNome(), " é o vencedor");
            else   
                console.log( gurreiro2.getNome(), " é o vencedor");
            }

    }

    // var criarGuerreiros = function() {

    //     var gurreiro = new Guerreiro();
    //     gurreiro.setNome( 'Zé' )
    // }

}