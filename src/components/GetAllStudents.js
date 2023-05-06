import React, { useState, useEffect } from 'react';
import axios from "axios";
import "../bootstrap/css/bootstrap.css";
import Header from './Header';
import { id } from './Groups';
export default function GetAllStudents() {
    const [data, setData] = useState([]);

    function GetData() {
        useEffect(() => {
            axios
                .get(`${process.env.REACT_APP_BASE_URL}/students`)
                .then((res) => {
                    setData(res.data);
                })
                .catch((err) => console.log(err));
        }, []);
    }
    GetData();

    const show = data.data?.map((student, index) => {
        return (
            <tr key={index}>
                <td>{student.student_id}</td>
                <td>{student.first_name}</td>
                <td>{student.last_name}</td>
                <td>{student.group_id}</td>
                <td>{student.group_name}</td>
                <td>{student.email}</td>
                <td>{student.phone_number}</td>
            </tr>
        );
    });


    return (
        <div>
            <Header />
            <div id="getAll"
                className="get w-75 mt-5 container-fluid"
                style={{
                    overflow: "auto",
                    // height: "78vh",
                    fontFamily: "Arial",
                    fontSize: "1vw",
                    textAlign: "center",
                }}>
                <div className="table-responsive table-hover">
                    <table class="table">
                        <thead>
                            <tr className="table-success">
                                <th>Student ID</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Academic Year</th>
                                <th>Group Name</th>
                                <th>Email</th>
                                <th>Phone Number</th>
                            </tr>
                        </thead>
                        <tbody>
                            {show}
                            {/* {JSON.stringify(data.data)} */}
                        </tbody>
                    </table>
                </div>
            </div>
            <a style={{ position: "fixed", top: "95%", left: "1%", cursor: "pointer" }} href={`/select/${id}`}>
                <i class="fa-solid fa-right-from-bracket fa-flip-horizontal fa-2xl" style={{color: 'grey'}}></i>
            </a>
        </div>
    );
}