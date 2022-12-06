import React, { useEffect, useState } from "react";
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Plate from '../components/Plate';
import axios from "axios";
import { ToastContainer } from 'react-toastify';

const Menu = () => {
    const [listOfPlate,setListOfPlate] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:3002/Cart").then((response)=>{
            setListOfPlate(response.data);
        });
    },[]);

    return(
        <>
            <NavBar />
            <div id="body-menu">
                    <h1>Notre menu</h1>
                    <div className="container-menu">
                        {listOfPlate.map((item) => {
                            return(<>
                                <Plate 
                                    id={item.id}
                                    name={item.namePlate} 
                                    desc={item.descPlate} 
                                    price={item.pricePlate} 
                                    url={item.imgPlate} 
                                />
                            </>);
                        })}
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

export default Menu;