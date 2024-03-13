let cantidadProductos = 0;

function agregarAlCarrito (producto){
    let carrito = document.getElementById('carrito');
    carrito.style.display = 'flex';

    cantidadProductos += producto;
    let span = document.getElementById('cantidad_productos');
    span.textContent = cantidadProductos.toString();
}