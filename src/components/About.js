import React, { useState } from 'react';
import banner4 from '../images/banner4.png.png';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const About = () => {
    const [header] = useState({
        subHeader: "About Me",
        text: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to"
    });
    const [state] = useState([
        { id: 1, title: "Name", text: "Mowsumi" },
        { id: 2, title: "Email", text: "mow521202sumi@gmail.com" },
        { id: 1, title: "Phone", text: "+02135656585" },
        { id: 1, title: "LinkedIn", text: "https://www.linkedin.com/in/mowsumi-aktar-a92082211/" },
    ])
    return (
        <div className="about">
         <Navbar />

            <div className="container">
                <div className="common">
                    {/* <h3 className="heading">{header.mainHeader}</h3> */}
                    <h1 className="mainHeader">{header.subHeader}</h1>
                    <p className="mainContent">{header.text}</p>
                    <div className="commonBorder"></div>
                </div>
                <div className="row-3rd ">
                    <div className="container-1">
                            <div  className="about-img col-6">
                            <img src={banner4} alt="" />
                            </div>
                            <div className="about-info col-6">
                                <h1>Hi There</h1>
                                <div className="about-info-p ">
                                    I am a frontend web developer. I can provide clean code and pixel perfect design. I also make website more & more interactive with web animations.
                         </div>
                                <div className="about-info-p2">
                                    I have also interest in NODE CRUD operation while performing as a full-stack web developer. I'm exploring myself in this long journey as well as exploring users' expectation.
                         </div>
                                <div className="info-contact">
                                    <div className="my-info">
                                        {state.map(info => (
                                            <div className="info-div">
                                                <div className='info-grid'>
                                                <strong>{info.title}</strong>
                                               <a href="https://www.linkedin.com/in/mowsumi-aktar-a92082211" ><p>{info.text}</p></a>
                                               
                                                </div>
                                            </div>
                                        ))}


                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
