import React, { useState, useEffect } from 'react';
import axios from "axios";
import "../bootstrap/css/bootstrap.css";
import Header from './Header';
import { groupid, id } from './Groups';


export default function GetInfoGroupStudents() {
    const [groupstudentsinfo, setonegroupstudentsinfo] = useState([]);

    function GetInfo() {
        useEffect(() => {
            axios
                .get(`${process.env.REACT_APP_BASE_URL}/group/${groupid}/students/info`)
                .then((res) => {
                    setonegroupstudentsinfo(res.data);
                })
                .catch((err) => console.log(err));
        }, []);
    }
    GetInfo();

    const showgroupstudentsinfo = groupstudentsinfo["students_data"]?.map((student, index) => {
        return (
            <tr key={index}>

                <td>{student.student_id}</td>
                <td>{student.first_name}</td>
                <td>{student.last_name}</td>
                <td>{student.email}</td>
                <td>{student.phone_number}</td>

            </tr>
        );
    });

    return (
        <div>
            <Header />
            <div
                className="get w-75 container-fluid mt-5"
                id="getinfo"
                style={{

                    overflowY: "auto",
                    // height: "75vh",
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
                                <th>Email</th>
                                <th>Phone Number</th>
                            </tr>
                        </thead>
                        <tbody>
                            {showgroupstudentsinfo}
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

