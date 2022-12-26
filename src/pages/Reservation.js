import React, { useState } from "react";
import axios from 'axios';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const Reservation = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [selectPerson, setSelectPerson] = useState("");
    const [message, setMessage] = useState("");
    function send() {
        if (name !== '' && email !== '' && phoneNumber !== '' && date !== '' && time !== '' && selectPerson !== '') {
            axios.post(`http://localhost:3002/Reservation`, {
                nomComplet:name,
                email,
                numero:phoneNumber,
                dateRes:date,
                timeRes:time,
                nbperson:selectPerson,
                msg:message
            }).then(async (response) => { 
                toast.success('votre réservation est enregistrée notre équipe vous rejoindra', {
                        position: "top-left",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                });
                setName("");
                setEmail("");
                setPhoneNumber("");
                setDate("");
                setTime("");
                setSelectPerson("");
                setMessage("");
            });             
        } else {
            toast.error('Tous les champs est obligatoire', {
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
    return(
        <>
            <NavBar />
            <div id="body-reservation">
                    <h1>Réservation</h1>
                    <div className="container-reservation">
                    <div className="form">
            <div>
                <input type="text" id="name" name="name" placeholder="Nom complet"
                    onChange={(event) => {
                        setName(event.target.value);
                    }}
                /> 
            </div>
            <div>
                <input type="text" id="email" name="email"  placeholder="Email"
                    onChange={(event) => {
                        setEmail(event.target.value);
                    }}
                />
            </div>
            <div>
                <input type="number" id="phoneNumber" name="phoneNumber" placeholder="Numéro de téléphone"
                    onChange={(event) => {
                        setPhoneNumber(event.target.value);
                    }}
                />
            </div>
            <div>
                <input type="date" id="date" name="date"
                    onChange={(event) => {
                        setDate(event.target.value);
                    }}
                />
            </div>
            <div>
                <input type="time" id="time" name="Heure"
                    onChange={(event) => {
                        setTime(event.target.value);
                    }}
                />
            </div>
            <div>
                <select className="form-control" name="selectPerson" id="selectPerson"
                    onChange={(event) => {
                        setSelectPerson(event.target.value);
                    }}
                >
                    <option selected disabled defaultValue >Sélectionner le nombre de personnes</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                </select>
            </div>
            <div>
                <textarea className="form-control" id="message" name="message" rows="6" placeholder="Your Message ..."
                    onChange={(event) => {
                        setMessage(event.target.value);
                    }}
                ></textarea>
            </div>
            <button  type="submit" onClick={()=>send()}>Send Message</button>
                    </div>
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

export default Reservation;