import React,{useState,useRef}  from "react";
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import emailjs from '@emailjs/browser';
import axios from 'axios';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        if (name !== '' && email !== '' && message !== '') {
             emailjs.sendForm('service_gdwofcu', 'template_su0d33e',e.target, 'rHTRwQpD5zqV8mhwU')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
            axios.post(`http://localhost:3002/Mail`, {
                senderMail:name,
                email,
                msg:message
            }).then(async (response) => { 
                toast.success('votre message est envoyé', {
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
      };
    return(
        <>
            <NavBar />
            <div id="body-contact">
                <h1>Nous contacter</h1>
                <div className="container-contact">
                    <div className="contact-form-container">
                        <form className="form" onSubmit={sendEmail}>
                            <div className="contact-form-title">
                            Vous pouvez nous contacter via ce formulaire :
                            </div>
                            <div>
                                <input type="text" id="from_name" name="from_name" placeholder="Nom complet"
                                    value={name}
                                    onChange={(event) => {
                                        setName(event.target.value);
                                    }}
                                /> 
                            </div>
                            <div>
                                <input type="text" id="email" name="email"  placeholder="Email"
                                    value={email}
                                    onChange={(event) => {
                                        setEmail(event.target.value);
                                    }}
                                />
                            </div>
                            <div>
                                <textarea className="form-control" id="message" name="message" rows="6" placeholder="Your Message ..."
                                    value={message}
                                    onChange={(event) => {
                                        setMessage(event.target.value);
                                    }}
                                ></textarea>
                            </div>
                            <button type="submit">Send Message</button>
                        </form>
                    </div>
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d86684.43015936651!2d-1.6303745639140355!3d47.238327963789075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4805ed52b982bb91%3A0x27a33f6b4f7f7713!2sOMDATA%20CONSULTING!5e0!3m2!1sfr!2sma!4v1664810427784!5m2!1sfr!2sma"  
                        allowFullScreen="" 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade" 
                        title="Omdata"
                    />
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

export default Contact;