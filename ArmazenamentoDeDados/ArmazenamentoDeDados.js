function criar(nome, idade){ 
     
}

function editar(id, nome, idade){
    TodosDados[id].nome = nome;
    TodosDados[id].idade = idade;
}

function excluir(id){
    modificando = TodosDados[id]

}

function consultar(){
    return TodosDados;
}

function load(){
    $.ajax({
        url: "https://fiddle.jshell.net/favicon.png",
        beforeSend: function( xhr ) {
          xhr.overrideMimeType( "text/plain; charset=x-user-defined" );
        }
      })
        .done(function( data ) {
          if ( console && console.log ) {
            console.log( "Sample of data:", data.slice( 0, 100 ) );
          }
        });
}