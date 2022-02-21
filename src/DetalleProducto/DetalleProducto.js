import { useParams } from "react-router-dom";
import {Link} from 'react-router-dom';


function Detalle(datos) {
	let  params  = useParams();
	
  return (
	<div id="body">
		<img src={datos.zapatos[params.id].src} alt=""/>
		<p>{datos.zapatos[params.id].precio}$</p>
		<p>{datos.zapatos[params.id].descripcion}</p>


			<button><Link to="/">Volver</Link></button>


	
	</div>
  );
}

export default Detalle;