import {Link} from 'react-router-dom';

function Contenido(datos) {
	console.log(datos);
	var imagenes = [];
	var link = '/detalle/';
	var i = 0;

	for(let imagen of datos.zapatos){
		imagenes.push(
		<li key={i}>
			<a>
				<img src={imagen.src} alt=""/>
				<p>{imagen.titulo}</p>
				<p>{imagen.precio}</p>
				<Link to={link+i} >más detalles! </Link>

				<button title='añade' onClick={()=>{
					let check = true;
					let indice = 0;

                    for (let zapato of datos.carrito) {
                        if (zapato.src == imagen.src){
                            zapato.unidades++;
							datos.aumentar(indice);
							localStorage.setItem('Carrito', JSON.stringify(datos.carrito));
                            check = false
                        }
                    }
                    if (check) {
                        imagen.unidades++;
                        datos.anadir(imagen);
						localStorage.setItem('Carrito', JSON.stringify(datos.carrito));
                    }
				}}>Añadir al carrito</button>

			</a>
		</li>)
		i++;
	}
  return (
        <div id="body">
			<h1><span>Shoes</span></h1>
			<ul class="gallery">
				{imagenes}
			</ul>
		</div>
  );
}

export default Contenido;
