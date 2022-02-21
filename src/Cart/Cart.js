

function Cart(datos) {
    var pedidos=[]
    var indice = 0;
    var precio = 0;
    for(let pedido of datos.carrito){
        let i = indice;
		pedidos.push(
		<li key={i}>
			<a>
				<img src={pedido.src} alt=""/>
				<p>{pedido.titulo}</p>
				<p>{pedido.precio} €</p>
                <p>{pedido.unidades} ud.</p>

                <button onClick={()=>{
					if (pedido.unidades == 1) {
							datos.eliminar(i)
							localStorage.setItem('Carrito', JSON.stringify(datos.carrito));
					}else{
						datos.disminuir(i);
                        console.log('no');
						localStorage.setItem('Carrito', JSON.stringify(datos.carrito));
					}

				}}>-</button>

                    <button onClick={()=>{

                        datos.aumentar(i);
                        localStorage.setItem('Carrito', JSON.stringify(datos.carrito));

                    }}>+</button>

                <button onClick={()=>{
                    
                    datos.eliminar(i);
				    localStorage.setItem('Carrito', JSON.stringify(datos.carrito));

                }}>Borrar</button>

			</a>
		</li>)
        indice++;
        precio += pedido.unidades*pedido.precio;
        console.log(precio);
	}
    return (
          <div id="body">
              <h1><span>carrito</span></h1>
              <h2>El precio final es: {precio} €</h2>
              <ul>
                  {pedidos}
              </ul>
              <br/>
              <br/>
          </div>
    );
  }
  
  export default Cart;