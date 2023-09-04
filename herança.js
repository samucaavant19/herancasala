classe  Pessoa  {  //Classe Pai
    construtor ( nome ,  telefone ,  email )  {
    isso . nome  =  nome ;
    isso . telefone  =  telefone ;
    isso . e-mail  =  e-mail ;
    }
    falar  ( )  {
    console . log ( ` ${ this . nome } está falando` ) ;
    }
    andar  ( )  {
    console . log ( ` ${ this . nome } está andando` ) ;
}
}

class  PessoaFisica  estende  Pessoa  {  //Classe Filho1
    construtor ( nome ,  telefone ,  email ,  cpf )  {
    super ( nome ,  telefone ,  e-mail ) ;
    isso . cpf  =  cpf ;
    }
    }
    class  PessoaJuridica  amplia  Pessoa  {  //Classe Filho2
    construtor ( nome ,  telefone ,  email ,  cnpj )  {
    super ( nome ,  telefone ,  e-mail ) ;
    isso . cnpj  =  cnpj ;
    }
    }

    //exemplo 1
pagarSalários ( ) {
    console . log ( ` ${ this . nome } pagou os atrasos` ) ;
    }
    //exemplo 2
    pagarSalários ( ) {
    ótimo . andar ( ) ;
    console . log ( ` ${ this . nome } pagou os atrasos` ) ;
    }


let  pessoa1  =  new  PessoaFisica ( "José" ,  "123456" ,
"jose@jose.com" ,  "123456" ) ;
pessoa1 . andar ( ) ;
console . log ( pessoa1.nome , pessoa1.cpf ) ; _ _ _ _ 
let  pessoa2  =  new  PessoaJuridica ( "Maria" ,  "654312" ,
"maria@maria.com" ,  "654312" ) ;
pessoa2 . andar ( ) ;
pessoa2 . pagarSalários ( ) ;