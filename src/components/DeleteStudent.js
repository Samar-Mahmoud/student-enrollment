import React from 'react';
import axios from "axios";
import "../bootstrap/css/bootstrap.css";
import { group } from './Groups';
import Header from './Header';

export default function DeleteStudent() {
    let id = undefined;

    const deletest = async (event) => {
        event.preventDefault();

        const element = document.querySelector(".status");
        let input = document.getElementById("del_id").value;
        let ok = true;

        if (typeof input === "string") {
            if (Number.isNaN(parseInt(input))) ok = false;
            else id = parseInt(input);
        }
        else id = input;

        if (!ok) {
            element.innerHTML = "Student ID is not valid";
            element.style.color = "red";
        }
        else {
            try {
                await axios.delete(
                    `${process.env.REACT_APP_BASE_URL}/student/${id}`
                );
                element.style.color = "green";
                element.innerHTML = "Deleted Successfully";
            } catch (err) {
                element.innerHTML = `No Student with ID = ${id}`;
                element.style.color = "red";
            }
        }
    };

    return (
        <div>
            <Header />
            <div
                className="container-fluid w-75 mt-5 p-5 bg-light"
                style={{
                    fontFamily: "cursive",
                    fontSize: "1.2vw",
                }}
            >
                <h2
                    style={{
                        fontSize: "2vw",
                        fontFamily: "cursive",
                        marginBottom: "50px",
                    }}
                >
                    Enter Student ID
                </h2>
                <form>
                    <div className="form-group row mb-5">
                        <label
                            for="id"
                            className="col-sm-3 col-form-label mr-2"
                        >
                            Student ID
                        </label>
                        <div class="col-sm-7">
                            <input
                                type="text"
                                class="form-control"
                                placeholder="student's id"
                                id="del_id"
                                style={{ fontSize: "1.2vw" }}
                                required
                            ></input>
                            <div
                                class="status"
                                style={{ color: "red", fontSize: "13px", marginTop: "5px", marginLeft: "4px", fontFamily: 'monospace' }}
                            ></div>
                        </div>
                    </div>
                    <a
                        href={group}
                        type="submit"
                        class="btn btn-danger"
                        id="btn"
                        onClick={deletest}
                    >
                        Delete
                    </a>
                </form>
            </div>
            <a style={{ position: "fixed", top: "95%", left: "1%", cursor: "pointer" }} href={`/select/${id}`}>
                <i class="fa-solid fa-right-from-bracket fa-flip-horizontal fa-2xl" style={{color: 'grey'}}></i>
            </a>
        </div>
    );
}