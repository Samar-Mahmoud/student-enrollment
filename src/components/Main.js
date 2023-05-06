import "../bootstrap/css/bootstrap.css";
import React from 'react';
import './Main.css';
import login from "../images/login.png";


function Main() {

    const getpass = (event) => {
        let passid = document.getElementById("passid");
        let welcome = document.getElementById("welcome");
        let label = document.getElementById("label");
        welcome.style.display = "none";
        label.style.display = "none";
        passid.style.display = "block";

    };
    const close = () => {
        let passid = document.getElementById("passid");
        passid.style.display = "none";
        let welcome = document.getElementById("welcome");
        welcome.style.display = "block";
    };

    // window.onclick = event => {
    //     let close_best1 = document.getElementById("passid");
    //     if (event.currentTarget == close_best1) {
    //         console.log("dd");
    //        // close_best1.style.display = "none";
    //     }
    // }

    const enter = () => {
        let input = document.getElementById("pwd");
        let label = document.getElementById("label");
        let btnhref = document.getElementById("enterbtn");

        if (input.value.toLowerCase() === "feng") {
            label.style.display = "none";
            btnhref.setAttribute("href", "select/2");
            // setTimeout(funenter, 2000);
        }
        else {
            label.style.display = "block";
        }
    };

    const user = () => {
        var use = document.getElementById("user");
        use.setAttribute("href", "select/1");
    };

    return (
        <div className="back bg-dark" style={{
            height: "100vh",
            width: "100vw"
        }} >

            <div >
                <div className="container bg-secondary " id="welcome" style={{
                    border: "1px solid ",
                    borderRadius: "10px",
                    padding: "10vw",

                }} data-aos="zoom-in">

                    <div className="row justify-content-center">
                        <h1 style={{ fontFamily: "cursive", color: "#ffffff" }}>WELCOME ESK</h1>
                    </div>

                    <div className="row justify-content-center">
                        <a className="btn btn-danger btn-lg text-light" role="button" data-toggle="tooltip" data-placement="left" title="modify delete add"
                            style={
                                {
                                    marginBottom: "35px", fontFamily: "cursive", marginTop: "5vw", fontSize: "2vw"
                                }
                            }
                            onClick={getpass}
                        >
                            Admin
                        </a>

                        <a className="btn btn-info btn-lg text-light" role="button" data-toggle="tooltip" data-placement="right" title="show" id="user"
                            style={
                                {
                                    marginBottom: "35px", fontFamily: "cursive", marginTop: "5vw", fontSize: "2vw", marginLeft: "5vw"
                                }
                            }
                            onClick={user}
                        >
                            User
                        </a>
                    </div>
                </div>
            </div>


            {/* pass page */}
            <div id="passid" style={{
                display: "none",
                border: "1px solid rgb(5, 5, 5)",
                width: "100%",
                height: "100%",
                position: "fixed",
                zIndex: "1",
                top: "0",
                left: "0",
                overflow: "auto",
                paddingTop: "60px",
            }}>
                <div className="form container d-flex flex-wrap justify-content-around align-content-around bg-danger" style={{ fontFamily: "cursive" }}>
                    <div className="align-self-center" >
                        <img src={login} style={{ width: "20vw" }} />
                    </div>
                    <div className="text" style={{ textAlign: 'center' }}>
                        <form >
                            <div className="form-group row mb-5">
                                <label style={{ marginTop: "20px", color: "#ffffff", fontSize: '2vw' }}>Enter Password</label>
                                <input type="password" class="form-control" id="pwd" name="password" placeholder="password" style={{ fontFamily: "Arial", fontSize: '1vw' }} ></input>
                            </div>
                        </form>
                        <div style={{ color: "white", fontSize: "13px", marginTop: "5px", marginLeft: "4px", fontFamily: 'monospace', display: 'none' }} id="label">wrong password</div>
                        <a className="btn btn-lg btn-secondary text-light" style={{ marginBottom: "20px", marginTop: "20px", marginRight: "30px" }} role="button" onClick={close} >
                            Close
                        </a>
                        <a className="btn btn-lg btn-secondary" href="#" id="enterbtn" style={{ marginBottom: "20px", marginTop: "20px" }} role="button" onClick={enter} >
                            Enter
                        </a>

                    </div>
                </div>
            </div>
        </div >
    );
}

export default Main;