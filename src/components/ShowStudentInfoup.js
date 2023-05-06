import React, { useState, useEffect } from 'react';
import axios from "axios";
import "../bootstrap/css/bootstrap.css";
import Header from './Header';
import { id } from './Groups';

export default function ShowStudentInfoup() {
    let stid = window.location.pathname.split("/").slice(-1)[0];
    const [groupstudent, setonegroupstudent] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await axios.get(
                    `${process.env.REACT_APP_BASE_URL}/student/${stid}`
                );
                setonegroupstudent(res.data);
                setIsLoading(false);
            } catch (err) {
                setIsLoading(false);
            }
        }
        fetchData();
    });

    if (isLoading) {
        return <div>Loading...</div>;
    }

    async function updateest(x) {
        await axios.patch(`${process.env.REACT_APP_BASE_URL}/student/${stid}`, x);
    }

    function submit(event) {
        event.preventDefault();

        var dast = {};

        let fn = document.getElementById("fn").value;
        let ln = document.getElementById("ln").value;
        let gn = document.getElementsByClassName("groupcheck");
        let em = document.getElementById("em").value;
        let pn = document.getElementById("pn").value;

        let x = 0;
        for (let i = 0; i < 4; i++) {
            if (gn[i].checked === true) {
                x = i + 1;
                break;
            }
        }

        // validation
        let phoneRegx = /^(010|012|015|011)\d{8}$/;
        let emailRegx = /\w+@\w+/;
        let pattern = "^[^0-9]*$";
        let ok = true;
        let element;

        element = document.querySelector('.fn-msg');
        element.innerHTML = '';
        if (typeof fn === 'number') {
            element.innerHTML = `Name is not valid`;
            ok = false;
        }
        else {
            if (fn.match(pattern) === null) {
                element.innerHTML = `Name should not has numbers`;
                ok = false;
            }
            else if (fn.length < 3) {
                element.innerHTML = `Name is too short`;
                ok = false;
            }
            else if (fn.length >= 100) {
                element.innerHTML = `Name is too long`;
                ok = false;
            }
        }

        element = document.querySelector('.ln-msg');
        element.innerHTML = '';
        if (typeof ln === 'number') {
            element.innerHTML = `Name is not valid`;
            ok = false;
        }
        else {
            if (ln.match(pattern) === null) {
                element.innerHTML = `Name should not has numbers`;
                ok = false;
            }
            else if (ln.length < 3) {
                element.innerHTML = `Name is too short`;
                ok = false;
            }
            else if (ln.length >= 100) {
                element.innerHTML = `Name is too long`;
                ok = false;
            }
        }

        element = document.querySelector('.em-msg');
        element.innerHTML = '';
        if (em.match(emailRegx) === null) {
            element.innerHTML = `Invalid E-mail`;
            ok = false;
        }

        element = document.querySelector('.pn-msg');
        element.innerHTML = '';
        if (pn.match(phoneRegx) === null) {
            element.innerHTML = `Invalid phone number`;
            ok = false;
        }

        element = document.querySelector('.up-msg');
        element.innerHTML = '';
        if (ok) {
            dast["first_name"] = fn;
            dast["last_name"] = ln;
            dast["group_id"] = x;
            dast["email"] = em;
            dast["phone_number"] = pn;
            updateest(dast);
            element.style.color = "green";
            element.innerHTML = "Student is updated successfully";
        }
        else {
            element.style.color = "red";
            element.innerHTML = "Please enter valid information";
        }
    }

    return (
        <div>
            <Header />

            <div className="bg-light container-fluid w-75 p-5 mt-5" id="getdata"
                style={{
                    overflow: "auto",
                    fontFamily: "Arial",
                    fontSize: "1vw",
                    textAlign: "center",
                }}>
                <h2 style={{ fontSize: "2vw", fontFamily: "cursive", marginBottom: "50px" }}>Student Information</h2>
                <form >
                    <div className="form-group row mb-5">
                        <label for="id" className="col-sm-3 col-form-label mr-2">
                            Student ID
                        </label>
                        <div class="col-sm-7">
                            <input type="text" class="form-control" readonly placeholder="student's id" id="id0" style={{ fontSize: "1.2vw" }} value={groupstudent[0].student_id}></input>
                        </div>
                    </div>

                    <div className="form-group row  mb-5">
                        <label for="firstN" className="col-sm-3 col-form-label mr-2">
                            Fisrt Name
                        </label>
                        <div class="col-sm-7">
                            <input type="text" class="form-control" id="fn" placeholder="student's first name" style={{ fontSize: "1.2vw" }} defaultValue={groupstudent[0].first_name}></input>
                            <div
                                class="fn-msg"
                                style={{ color: "red", fontSize: "13px", marginTop: "5px", marginLeft: "4px", fontFamily: 'monospace', textAlign: 'left' }}
                            ></div>
                        </div>
                    </div>

                    <div className="form-group row  mb-5">
                        <label for="lastN" className="col-sm-3 col-form-label mr-2">
                            Last Name
                        </label>
                        <div class="col-sm-7">
                            <input type="text" class="form-control" id="ln" style={{ fontSize: "1.2vw" }} placeholder="student's last name" defaultValue={groupstudent[0].last_name}></input>
                            <div
                                class="ln-msg"
                                style={{ color: "red", fontSize: "13px", marginTop: "5px", marginLeft: "4px", fontFamily: 'monospace', textAlign: 'left' }}
                            ></div>
                        </div>
                    </div>

                    <div className="form-group row  mb-5">
                        <label for="email" className="col-sm-3 col-form-label mr-2">
                            Email
                        </label>
                        <div class="col-sm-7">
                            <input type="text" class="form-control" id="em" style={{ fontSize: "1.2vw" }} placeholder="student's email" defaultValue={groupstudent[0].email}></input>
                            <div
                                class="em-msg"
                                style={{ color: "red", fontSize: "13px", marginTop: "5px", marginLeft: "4px", fontFamily: 'monospace', textAlign: 'left' }}
                            ></div>
                        </div>
                    </div>

                    <div className="form-group row  mb-5">
                        <label for="phoneN" className="col-sm-3 col-form-label mr-2">
                            Phone Number
                        </label>
                        <div class="col-sm-7">
                            <input type="text" class="form-control" id="pn" style={{ fontSize: "1.2vw" }} placeholder="student's phone number" defaultValue={groupstudent[0].phone_number}></input>
                            <div
                                class="pn-msg"
                                style={{ color: "red", fontSize: "13px", marginTop: "5px", marginLeft: "4px", fontFamily: 'monospace', textAlign: 'left' }}
                            ></div>
                        </div>
                    </div>

                    <div className="form-group row  mb-5">
                        <label for="GroupN" className="col-sm-3 col-form-label mr-2">
                            Academic Year
                        </label>
                        <div className="col-sm-7">
                            <input className="ml-2 groupcheck" type="radio" id="g1" style={{ fontSize: "1.2vw" }} name="group" ></input>
                            <label class="mr-2 ml-2" for="g1">
                                1
                            </label>

                            <input type="radio" className="ml-2 groupcheck" id="g2" style={{ fontSize: "1.2vw" }} name="group"></input>

                            <label class=" ml-2 mr-2" for="g2">
                                2
                            </label>

                            <input type="radio" className="ml-2 groupcheck" id="g3" style={{ fontSize: "1.2vw" }} name="group"></input>
                            <label class="ml-2 mr-2" for="g3">
                                3
                            </label>

                            <input type="radio" id="g4" className="ml-2 groupcheck" style={{ fontSize: "1.2vw" }} name="group"></input>

                            <label class="mr-2 ml-2" for="g4">
                                4
                            </label>
                        </div>
                    </div>
                    <div
                        className="form-group row  mb-5"
                        class="up-msg"
                        style={{ color: "red", fontSize: "13px", marginTop: "5px", marginLeft: "4px", fontFamily: 'monospace' }}
                    ></div>
                    <br></br>
                    <a
                        href=''
                        type="submit"
                        class="btn btn-danger"
                        id="submitForm"
                        onClick={submit}>
                        Update
                    </a>
                </form>
                {/* {acadmeic()} */}
            </div>
            <a style={{ position: "fixed", top: "95%", left: "1%", cursor: "pointer" }} href={`/select/${id}`}>
                <i class="fa-solid fa-right-from-bracket fa-flip-horizontal fa-2xl" style={{color: 'grey'}}></i>
            </a>
        </div>
    );
}
