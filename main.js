function positions(firstPlace, secondPlace, lastPlace){
    let podio = [firstPlace, secondPlace,lastPlace];
    if (secondPlace == "Daniel") {
        podio = [secondPlace, firstPlace, lastPlace];
    }else if (lastPlace == "Daniel") {
        podio = [firstPlace, lastPlace, secondPlace];
    }else{
        podio = [firstPlace, secondPlace, lastPlace];
    }
    console.log('Primeiro colocado - '+ podio[0]);
    console.log('Segundo colocado - '+ podio[1]);
    console.log('Terceiro colocado - '+ podio[2]);
}
let resultado = positions('Rafael','Manoel','Daniel');
let resultado2 = positions('Manoel', 'Daniel', 'Rafael');


