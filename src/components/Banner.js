
import { useState } from "react";
import{FaFacebook, FaTwitter,FaPinterest, FaInstagram,FaPlay} from "react-icons/fa"

const Banner = () => { 
 const [state] =  useState({title:"I am Mowsumi",
 text:
 " i am a web developer,,,with long time expreience in this field..",});
    return (

        <header className="header">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className="header_content">
                            <div className="header_section">
                            <ul className="header_ul">
                                <li>
                                    <FaFacebook/>
                                    </li>
                                    <li>
                                     <FaTwitter/>
                                    </li>
                                    <li>
                                   <FaPinterest/>
                                    </li>
                                    <li>
                                    <FaInstagram/>
                                    </li>
                                </ul> 
                                <h1>{state.title}</h1>
                                   <p>
                                    {state.text}
                                    </p> 
                                    <br/>
                                    <div className="header_button">
                                        <a href="/my portfolio" className="btn btn-outline">My portfolio
                                        </a>
                                        &nbsp; &nbsp;&nbsp; 
                                        <a href="/my portfolio" className="btn btn-smart">
                                            <FaPlay className="play"/>
                                        </a>                       
                                    </div>
                            </div>
                               
                        </div>
                    </div>
                    <div className="col-6">

                    </div>

                </div>
            </div>

        </header>
    );
};

export default Banner;