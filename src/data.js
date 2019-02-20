// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window
/*window.data = {

showAll : () => {
  let pokemonList= [];
  pokemonObj.forEach(element => {
    let pokemonInfo = '<div class=pokemonInfo>' + '<img src=" "element.img + height=30px width=30px> ' + ' '  + element.id + ' ' + element.name + '</div>'; 
    pokemonList =pokemonInfo;

    //console.log(pokemonList);
    return pokemonList; 
  
  
  }
  );
}

}*/

const showAll = () => {
  let pokemonList= [];
  pokemonObj.forEach(element => {
    let pokemonInfo = /*'<div class=pokemonInfo>' + '<img src=" "element.img + height=30px width=30px> ' + ' '  + */element.id + ' ' + element.name /*+ '</div>';*/ 
    pokemonList =pokemonInfo;

    //console.log(pokemonList);
    return pokemonList; 
  
  
  }
  );
}
