const imagen = document.getElementById('imagen');
const imagenes = [
    'Imagenes/cat_Charlie.png',
    'Imagenes/Cat_Michell.png',
    'Imagenes/Cat2_Michi.png',
    'Imagenes/CatTravieso_Michi.png'
]
let index = 0;

function testImg() {
    index++;
    if (index <= imagenes.length - 1){
        imagen.src = imagenes[index];
    }else{
        index = 0;
        imagen.src = imagenes[index];
    }
}