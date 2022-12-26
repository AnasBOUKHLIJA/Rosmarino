import React,{useEffect,useState} from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { toast,ToastContainer } from 'react-toastify';
const Plate = () => {
    let {id} = useParams();
    const [Plate,setPlate] = useState([]);
    let [quantity,setQuantity] = useState(1);
    function changeQuantity(operation){
        if(operation === 'plus'){
            setQuantity(quantity+1);
        } else{
            if(quantity>1) setQuantity(quantity-1);
        }
    }
    useEffect(()=>{
        axios.get(`http://localhost:3002/Cart/byId/${id}`).then((response)=>{
            setPlate(response.data);
        });
    },[]);
    function addToLocalStorage(data){
        let dataLocalStorage = JSON.parse(localStorage.getItem('cartLocalStorage'));
        if(dataLocalStorage === null){
            const newDataLocalStorage = [{
                id: data.id,
                nb: quantity
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
                    nb: quantity
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
    return (
        <>
            <NavBar />
            <div className='plate-page-container'>
                <div className='plate-page-img'>
                    <img src={Plate.imgPlate} alt={Plate.namePlate}/>
                </div>
                <div className='plate-page-info'>
                    <h3>{Plate.namePlate}</h3>
                    <p>{Plate.descPlate}</p>
                    <h4>{Plate.pricePlate}£</h4>

                    <div className='plate-page-info-operation'>
                        <button onClick={()=>{changeQuantity('-')}} >-</button>
                        <span> {quantity} </span>
                        <button onClick={()=>{changeQuantity('plus')}}>+</button>
                    </div>
                    <button 
                        className='plate-page-info-button'
                        onClick={()=>addToLocalStorage(Plate)}
                    >Ajouter {quantity} pour {quantity*Plate.pricePlate} £</button>
                </div>
                
            </div>
            <Footer />
            <ToastContainer
                position="top-left"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />

        </>
    );
}

export default Plate;