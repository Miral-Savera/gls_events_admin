import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import $ from "jquery";
import { toast } from 'react-toastify';

function Login() {

    useEffect( () => {
        $('body').removeAttr('data-color');
        $('body').removeClass();
    });

    const host = "https://gls-events.onrender.com/";
    const navigate = useNavigate();
    const[credential,setCredential] = useState({email : "",password : ""});

    const onChange = (e) => {
        setCredential({...credential,[e.target.name] : e.target.value});
    }

    const onLogin = async (e) => {
        e.preventDefault();
        
        $('#loginbtn').attr('disabled','disabled');

        await axios({
            method: 'post',
            url: `${host}admin/login`,
            responseType: 'json',
            data : credential,
        })
        .then(function (response) {

            if(response.data.success===true){
                localStorage.setItem('authtoken',response.data.authtoken);
                navigate('/home');
                toast.success("Logged-in Successfully");
            }
            else{
                toast.error(response.data.errors);
            }
        });
    }

    return (
        <center className="vertical-layout vertical-menu 1-column bg-full-screen-image blank-page blank-page" data-open="click" data-menu="vertical-menu" data-color="" data-col="1-column">
            <div className="app-content content">
                <div className="content-wrapper">
                    <div className="content-wrapper-before"></div>
                    <div className="content-header row">
                    </div>
                    <div className="content-body"><section className="flexbox-container">
                        <div className="col-12 d-x align-items-center justify-content-center">
                            <div className="col-lg-4 col-md-6 col-10 box-shadow-2 p-0">
                                <div className="card border-grey border-lighten-3 px-1 py-1 m-0">
                                    <div className="card-header border-0">
                                        <div className="text-center mb-1">
                                            <img src="https://admission.glsuniversity.ac.in/images/logo.jpg" className='mb-2' height={100} alt="branding logo" />
                                        </div>
                                        <div className="font-large-1  text-center">
                                            Member Login
                                        </div>
                                    </div>
                                    <div className="card-content">

                                        <div className="card-body">
                                            <form className="form-horizontal" onSubmit={onLogin}>
                                                <fieldset className="form-group position-relative has-icon-left">
                                                    <input type="text" className="form-control round" id="email" placeholder="Your Username" name='email' required onChange={onChange} />
                                                        <div className="form-control-position">
                                                            <i className="ft-user"></i>
                                                        </div>
                                                </fieldset>
                                                <fieldset className="form-group position-relative has-icon-left">
                                                    <input type="password" className="form-control round" id="password" name='password' placeholder="Enter Password" required onChange={onChange} />
                                                        <div className="form-control-position">
                                                            <i className="ft-lock"></i>
                                                        </div>
                                                </fieldset>
                                                <div className="form-group row">
                                                    <div className="col-md-6 col-12 text-center text-sm-left">

                                                    </div>
                                                </div>
                                                <div className="form-group text-center">
                                                    <button type="submit" className="btn round btn-block btn-glow btn-bg-gradient-x-purple-blue col-12 mr-1 mb-1" id='loginbtn'>Login</button>
                                                </div>

                                            </form>
                                        </div>
                                        <p className="mx-2 my-2 "></p>
                                        <div className="text-center">
                                        </div>

                                        <p className="mx-2 my-1"></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    </div>
                </div>
            </div>
        </center>
    )
}

export default Login
