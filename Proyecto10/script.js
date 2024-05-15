
let listaProductos = document.querySelector('#listaProductos');

//Obtiene productos
function obtieneProductos(){
    fetch('https://fakestoreapi.com/products/')
            .then(res=>res.json())
            .then(productosObtenidos =>{
                console.log('Productos obtenidos:', productosObtenidos);

                productosObtenidos.forEach((producto, indice) => {
                    console.log('Producto:', producto);

                    listaProductos.innerHTML += 
                    `

                    <div class="col-12 col-md-3">
                        <div class="card">
                            <img src="${producto.image}" class="card-img-top imagenProducto py-1" alt="${producto.title}">
                            <div class="card-body">
                                <h5 class="card-title">${producto.title.slice(0, 10)}</h5>
                                <p class="card-text">${producto.description.slice(0, 50)}</p>
                                <p class="text-danger">$ ${producto.price}</p>
                                <a href="#" class="btn btn-primary">Comprar</a>
                            </div>
                        </div>
                    </div>
                    `;
                    
                });
            });
}

obtieneProductos();             