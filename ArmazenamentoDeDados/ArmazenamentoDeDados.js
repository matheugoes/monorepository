var dados = null;
var state = 'list';

function criar(nome, idade){ 
  dados.push({"id":dados.length+1,"nome":nome, "idade":idade});
  print_users();
}

function campos(){
  if(state == 'list'){
    state = 'create';
    $('.users').html("<input class='name' type='text' placeholder='Nome'><br><input class='age' type='text' placeholder='Idade'>");
  }else{
    state = 'list';
    var name = $('.name').val();
    var age = $('.age').val();
    criar(name, age);
  }
}

function load(){
  // $.ajax({
  //   type: 'POST',
  //   dataType: 'json',
  //   data: {'texto': 'texto_bug'},
  //   url: '../ArmazenamentoDeDados/Dados.json',
  //   success: function(data) {
  //     dados = data;
  //     print_users();
  //   }
  // });
  dados = [
    {"id": 1, "nome" : "Matheu", "idade" : "20"},
    {"id": 2, "nome" : "Alex", "idade" : "23"},
    {"id": 3, "nome" : "Igor", "idade" : "30"},
    {"id": 4, "nome" : "Antonio", "idade" : "45"}
   ];
  print_users();
}

function print_users(){
  $('.users').html("<table class=\"tabela\"></table>");
  $('.tabela').append("<tr><td>ID</td><td>Nome</td><td>Idade</td></tr>");
  for(i in dados){
    $('.tabela').append("<tr><td>"+dados[i]["id"]+"</td><td>"+dados[i]["nome"]+"</td><td>"+dados[i]["idade"]+"</td></tr>");
  }
}