import React from 'react';
import "../bootstrap/css/bootstrap.css";
import Header from './Header';

let id = '0';
let listbtns = [0, 0, 0, 0];
let groupId = '0';

export default function Selection() {
    let lo = window.location.href;
    lo.split('/');
    id = lo[lo.length - 1];

    const clickHandler1 = event => {
        groupId = '1';
        let g = document.getElementById("group1");
        g.setAttribute("href", "/select/" + id + "/groups/" + groupId);
    };

    const clickHandler2 = event => {
        groupId = '2';
        let g = document.getElementById("group2");
        g.setAttribute("href", "/select/" + id + "/groups/" + groupId);
    };

    const clickHandler3 = event => {
        groupId = '3';
        let g = document.getElementById("group3");
        g.setAttribute("href", "/select/" + id + "/groups/" + groupId);
    };

    const clickHandler4 = event => {
        groupId = '4';
        let g = document.getElementById("group4");
        g.setAttribute("href", "/select/" + id + "/groups/" + groupId);
    };


    return (

        <div>
            <div className="container-sm m-3 p-3 bg-dark"
                style={
                    { borderRadius: "10px", fontFamily: "cursive", fontSize: "2vw", color: "#ffffff" }
                }
            >
                <span >ESK for Student Enrollment

                </span>


            </div>
            <div className='container mt-5'>
                <div className="d-flex flex-wrap justify-content-around align-items-center align-content-around ">
                    <div className="align-self-center  " data-aos="fade-down-right">
                        {/*  group1  */}
                        <a className="btn btn-primary  btn-lg" role="button" href='#' id="group1" onClick={
                            clickHandler1

                        }
                            style={
                                {
                                    height: "15vw", width: "400px", marginBottom: "35px", fontFamily: "cursive", paddingTop: "3vw", fontSize: "2vw"
                                }
                            }>
                            1st<br></br> Communication
                        </a>
                    </div>

                    <div className="  align-self-center" data-aos="fade-down-left">
                        {/*  group1  */}
                        <a className="btn btn-danger btn-lg" role="button" href='#' id="group2" onClick={
                            clickHandler2

                        }
                            style={
                                {
                                    height: "15vw", width: "400px", marginBottom: "35px", fontFamily: "cursive", paddingTop: "3vw", fontSize: "2vw"
                                }
                            }>
                            2nd <br></br>Communication                        </a>
                    </div>
                </div>

                <div className="d-flex flex-wrap justify-content-around align-items-center align-content-around">
                    <div className="  align-self-center " data-aos="fade-up-right" >
                        {/*  group1  */}
                        <a className="btn btn-warning btn-lg" role="button" href='#' id="group3" onClick={
                            clickHandler3

                        }
                            style={
                                {
                                    height: "15vw", width: "400px", marginBottom: "35px", fontFamily: "cursive", paddingTop: "3vw", fontSize: "2vw"
                                }
                            }>
                            3rd <br></br>Computer Science
                        </a>
                    </div>

                    <div className="  align-self-center " data-aos="fade-up-left">

                        <a className="btn btn-success btn-lg " role="button" href='#' id="group4" onClick={
                            clickHandler4

                        }
                            style={
                                {
                                    height: "15vw", width: "400px", marginBottom: "35px", fontFamily: "cursive", paddingTop: "3vw", fontSize: "2vw"
                                }
                            }>
                            4th <br></br> Computer Science
                        </a>
                    </div>
                </div>

            </div>
            <a style={{ position: "fixed", top: "95%", left: "1%", cursor: "pointer" }} href="/main">
                <i class="fa-solid fa-right-from-bracket fa-flip-horizontal fa-2xl" style={{color:'grey'}}></i>
            </a>
        </div>
    );

}





