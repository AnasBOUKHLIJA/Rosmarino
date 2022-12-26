import React from "react";
import {useNavigate} from "react-router-dom";
import { toast } from 'react-toastify';
const Plate = (props) => {
    const navigate = useNavigate();
    function addToLocalStorage(data){
        let dataLocalStorage = JSON.parse(localStorage.getItem('cartLocalStorage'));
        if(dataLocalStorage === null){
            const newDataLocalStorage = [{
                id: data.id,
                nb: 1
            }];
            localStorage.setItem('cartLocalStorage', JSON.stringify(newDataLocalStorage));
            toast.success('Le plate est ajoutée au panier avec succès!', {
                position: "top-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }else{
            let found = dataLocalStorage.findIndex(element => element.id === data.id);
            if(found === -1){
                const newDataLocalStorage = {
                    id: data.id,
                    nb: 1
                };
                dataLocalStorage.push(newDataLocalStorage);
                localStorage.setItem('cartLocalStorage', JSON.stringify(dataLocalStorage));
                toast.success('Le plate est ajoutée au panier avec succès!', {
                    position: "top-left",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            } else{
                toast.info('Déjà au panier!', {
                    position: "top-left",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
        }
    }
    
    return(  
        <div className="item-menu">
            <div className="item-menu-side1" onClick={() => {navigate(`/Menu/Plate/${props.id}`);}}>
                <img src={props.url} alt={props.name} />
            </div>
            <div className="item-menu-side2">
                <h3>{props.name}</h3>
                <p>{props.desc}</p>
                <h4>€{props.price}</h4>
                <button onClick={()=>{addToLocalStorage(props)}}>Ajouter au panier</button>
            </div>
        </div>
    );
}
export default Plate;