let listaCategorias = document.querySelector('#listaCategorias');
let obtieneCategorias = async () =>{
    fetch('https://fakestoreapi.com/products/categories')
        .then(res => res.json())
        .then(categorias =>{
            listaCategorias.innerHTML = "";
            categorias.forEach((categoria,indice)=>{
                categoria = categoria.replace("",'');
                listaCategorias.innerHTML += `
                <li class = "nav-item">
                    <a class = "nav-link" aria-current="page"  onclick="muestraproductos('${categoria}');"
                    href="#">${categoria.toUpperCase()}</a>
                </li>`;
                
            });
        });
    
};