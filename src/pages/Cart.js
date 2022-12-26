import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import PlateCart from '../components/PlateCart';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';

const Cart = () => {
    const [plates,setPlate] = useState([]);
    const [change, setChange] = useState(0);
    const [show, setShow] = useState(false);
    const [priceTotal, setPriceTotal] = useState(0);
    
    const [fullName,setFullName] = useState(JSON.parse(localStorage.getItem('fullNameClient')));
    const [address,setAddress] = useState(JSON.parse(localStorage.getItem('addressClient')));
    const [numero, setNumero] = useState(JSON.parse(localStorage.getItem('numeroClient')));
    
    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('cartLocalStorage'));
        if(data) {
            setPlate(data);
        };
        async function getPrice(){
            const data = JSON.parse(localStorage.getItem('cartLocalStorage'));
            let somme = 0;
            await data.map(async (ele) =>{
                const response = await axios.get(`http://https://git.heroku.com/resto-anas.git:3002/Cart/byId/${ele.id}`);
                somme =  somme + response.data.pricePlate*ele.nb;
                setPriceTotal(somme);
            });
            
        }
        getPrice();
    },[change]);
    function handleChange() {
        setChange(change+1);
    }

    function valideCmd() {
        const dt = new Date();
        const padL = (nr, len = 2, chr = `0`) => `${nr}`.padStart(2, chr);
        const date = `${
                        padL(dt.getMonth()+1)}-${
                        padL(dt.getDate())}-${
                        dt.getFullYear()}_${
                        padL(dt.getHours())}:${
                        padL(dt.getMinutes())}:${
                        padL(dt.getSeconds())
                        }`
        axios.post(`http://localhost:3002/Command`, {
            date,
            fullName,
            address,
            numero
        }).then(async (response)=>{
            console.log(response.data);
            await axios.get(`http://localhost:3002/Command/byDate/${date}`).then((responseCmd) => {
                const idCmd = responseCmd.data[0].id;
                plates.forEach(element => {
                    axios.post(`http://localhost:3002/Quantity`, {
                        nbplate: element.nb,
                        CommandeId: idCmd,
                        PlateId: element.id
                    });
                });
                localStorage.setItem('cartLocalStorage', null);
                window.location.reload();
                toast.success('vous validez votre commande!', {
                    position: "top-left",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });

            });
        });
        
    }
    
    window.onclick = function(event) {
        if (event.target === document.querySelector('.popup-modal')) {
            setShow(false);
        }
    }
    
    return(
        <>
            <NavBar />
            <h1>panier</h1>
            <div className='cart-container'>
                <div className='sous-cart-container'>
                    <div className='cart-plates'>
                        <div className='cart-plates-header'>
                            <h4>Panier</h4>
                            <span>{plates.length} éléments</span>
                        </div>
                        <hr className='hr' />
                        {(plates.length > 0) ?
                            plates.map(ele => {
                            return(
                                <PlateCart key={ele.id} data={ele} onChange={handleChange} /> 
                            );}):<></>
                        }
                        <div className='cart-plates-footer'>
                            <Link to="/Menu">
                                <i className="fa-solid fa-arrow-left"></i>
                                <span>Retour au menu</span>
                            </Link>
                        </div>                  
                    </div>
                    <div className='cart-result'>
                        <div className='cart-result-header'>
                            <h4>Sommaire</h4>
                        </div>
                        <hr className='hr' />
                        <div className='cart-result-body'>
                            <div className='cart-result-body-item'>
                                <span>éléments {plates.length}</span>
                                <span>£ {priceTotal}</span>                                
                            </div>
                            <h3>Livraison</h3>
                            <div className='livraison'>standard delivery £5</div>
                        </div>                            
                        <hr className='hr' />
                        <div className='cart-result-footer'>
                            <div className='cart-result-footer-item'>
                                <span>PRIX TOTAL</span>
                                <span>£ {priceTotal+5}</span>                                
                            </div>
                            <button  onClick={()=>{setShow(true)}}>
                                valider la commande
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {(show && plates.length>0) ? 
                <div className="popup-modal">
                    <div className="popup-window">
                        <h1>Vos informations</h1>
                        <div className='popup-form'>
                            <div className='popup-form-item'>
                                <label>Nom complet</label>
                                <input value={fullName}
                                    onChange={
                                        e => {
                                            setFullName(e.target.value);
                                            localStorage.setItem('fullNameClient', JSON.stringify(e.target.value));
                                        }} />
                            </div>
                            <div  className='popup-form-item'>
                                <label>adresse</label>
                                <input value={address}
                                    onChange={
                                        e => {
                                            setAddress(e.target.value);
                                            localStorage.setItem('addressClient', JSON.stringify(e.target.value));
                                        }} />
                            </div>
                            <div className='popup-form-item'>
                                <label>Numéro de téléphone</label>
                                <input value={numero}
                                    onChange={
                                        e => {
                                            setNumero(e.target.value);
                                            localStorage.setItem('numeroClient', JSON.stringify(e.target.value));
                                        }} />
                            </div>
                            <button className='btn-valid' onClick={()=>valideCmd()}>Valider</button>
                        </div>
                    </div>
                </div>
            :<></>}
            
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

export default Cart;