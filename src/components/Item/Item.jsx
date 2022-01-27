import {Link} from 'react-router-dom';
import "./Item.css"
function Item ({prod}){
    return (
        <div className='itemCss'
            key={prod.id}
        >                        
            <div className="card" >
                <div className="card-header">
                    {`${prod.trademark} - ${prod.name}`}
                </div>
                <div className="card-body">
                    <img className="imgProducts" src={prod.imageID} alt=''/>                                                           
                </div>
                <div className="card-footer">  
                <Link to={`/detalle/${prod.id}`}>
                    <button id="botonNaranja">
                        Detalle del producto
                    </button>
                </Link>                                                         
                </div>
            </div>
        </div>
    )

}

export default Item;
