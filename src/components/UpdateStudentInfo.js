import React from 'react';
import axios from "axios";
import "../bootstrap/css/bootstrap.css";
import { groupid, id as l_id } from './Groups';
import Header from './Header';

export default function UpdateStudentInfo() {

    async function getidfunc(event) {
        event.preventDefault();

        const element = document.querySelector(".status");
        let d = document.getElementById("input_id").value;
        let ok = true;
        let id;

        if (typeof d === "string") {
            if (Number.isNaN(parseInt(d))) ok = false;
            else id = parseInt(d);
        }
        else id = d;

        if (!ok) {
            element.innerHTML = "Student ID is not valid";
            element.style.color = "red";
        }
        else {
            try {
                await axios.get(`${process.env.REACT_APP_BASE_URL}/student/${id}`);
                window.location.href = `/select/${l_id}/groups/${groupid}/updateStudentInfo/${id}`;
            } catch (err) {
                element.innerHTML = `No Student with ID = ${id}`;
                element.style.color = "red";
            }

        }
    }

    return (
        <div>
            <Header />
            <div id="getid" className="bg-light p-5 w-75 container-fluid mt-5"
                style={{ fontFamily: "cursive", fontSize: "1.2vw" }}>
                <h2 style={{ fontSize: "2vw", fontFamily: "cursive", marginBottom: "50px" }}>Enter Student ID</h2>
                <form >
                    <div className="form-group row mb-5">
                        <label for="id" className="col-sm-3 col-form-label mr-2">
                            Student ID
                        </label>
                        <div class="col-sm-7">
                            <input type="text" class="form-control" placeholder="student's id"
                                id="input_id" style={{ fontSize: "1.2vw" }} required>
                            </input>
                            <div
                                class="status"
                                style={{ color: "red", fontSize: "13px", marginTop: "5px", marginLeft: "4px", fontFamily: 'monospace' }}
                            ></div>
                        </div>
                    </div>
                    <a href='#' type="submit" class="btn btn-danger" onClick={getidfunc} id="search_link" >
                        Search
                    </a>
                </form>

            </div>
            <a style={{ position: "fixed", top: "95%", left: "1%", cursor: "pointer" }} href={`/select/${l_id}`}>
                <i class="fa-solid fa-right-from-bracket fa-flip-horizontal fa-2xl" style={{color: 'grey'}}></i>
            </a>
        </div>
    );
}