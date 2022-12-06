import React,{useEffect, useState} from "react";
import axios from 'axios';
import { toast } from 'react-toastify';

const PlateCart = (props) => {
    const [Plate,setPlate] = useState([]);
    useEffect(()=>{
        axios.get(`http://localhost:3002/Cart/byId/${props.data.id}`).then((response)=>{
            setPlate(response.data);
        });
    },[]);
    function remove(){
        let dataLocalStorage = JSON.parse(localStorage.getItem('cartLocalStorage'));
        if(dataLocalStorage !== null){
            let found = dataLocalStorage.findIndex(element => element.id === props.data.id);
            if(found !== -1){
                dataLocalStorage.splice(found,1);
                console.log(dataLocalStorage);
                localStorage.setItem('cartLocalStorage', JSON.stringify(dataLocalStorage));
                toast.success('Le plate est supprimé du panier avec succès', {
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
        props.onChange();
    }
    function quantityMore(){
        let dataLocalStorage = JSON.parse(localStorage.getItem('cartLocalStorage'));
        if(dataLocalStorage !== null){
            let found = dataLocalStorage.findIndex(element => element.id === props.data.id);
            if(found !== -1){
                dataLocalStorage[found].nb++;
                localStorage.setItem('cartLocalStorage', JSON.stringify(dataLocalStorage));
            }
        }
        props.onChange();
    }
    function quantityMinus(){
        let dataLocalStorage = JSON.parse(localStorage.getItem('cartLocalStorage'));
        if(dataLocalStorage !== null){
            let found = dataLocalStorage.findIndex(element => element.id === props.data.id);
            if(found !== -1){
                if(dataLocalStorage[found].nb>1){
                    dataLocalStorage[found].nb--;
                    localStorage.setItem('cartLocalStorage', JSON.stringify(dataLocalStorage));                    
                }
            }
        }
        props.onChange();
    }
    return(
        <div className="item-cart">
            <img src={Plate.imgPlate} alt={Plate.namePlate}/>
            <h4>{Plate.namePlate}</h4>
            <div>
                <button onClick={()=> quantityMinus()}>-</button>
                <span>{props.data.nb}</span>
                <button onClick={()=> quantityMore()}>+</button>
            </div>
            <h5>£ {Plate.pricePlate}</h5>
            <span>
                <i class="fa-solid fa-x" onClick={() => remove()}></i>
            </span>
            
        </div>
    )
}

export default PlateCart;