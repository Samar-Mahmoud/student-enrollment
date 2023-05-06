import React, { useState, useEffect } from 'react';
import axios from "axios";
import "../bootstrap/css/bootstrap.css";
import Header from './Header';
import { groupid, id } from './Groups';



export default function GetOneGroupStudents() {
    const [onegroupstudents, setonegroupstudents] = useState([]);
    const [subject, setSubject] = useState([]);

    function style(n) {
        if (n >= 50) return 'green'
        else return 'red'
    };

    function Get() {
        useEffect(() => {
            axios
                .get(`${process.env.REACT_APP_BASE_URL}/group/${groupid}/students`)
                .then((res) => {
                    setonegroupstudents(res.data);
                    setSubject(res.data["students_data"][0]["grades"]);
                })
                .catch((err) => console.log(err));
        }, []);
    }
    Get();

    const showgroupstudents = onegroupstudents["students_data"]?.map((student, index) => {
        return (
            <tr key={index}>
                <td>{student.student_id}</td>
                <td>{student.first_name}</td>
                <td>{student.last_name}</td>
                <td>{student.email}</td>
                <td>{student.phone_number}</td>
                {student.grades.map((grade, index) => {
                    return (
                        <td >
                            {grade.grade}
                            <br></br>
                            <span style={{ color: style(grade.grade) }}>
                                {grade.status}
                            </span>
                        </td>
                    );
                })}
            </tr>
        );
    });


    return (
        <div>
            <Header />
            <div style={{
                overflow: "auto",
                // height: "78vh",
                fontFamily: "Arial",
                fontSize: "1vw",
                textAlign: "center",
            }} className='container-fluid mt-5'>
                <div className="table-responsive table-hover">
                    <table class="table">
                        <thead >
                            <tr className="table-success">
                                <th>Student ID</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Phone Number</th>
                                {subject.map((v, i) => {
                                    return <th>{v.subject_name}</th>;
                                })}
                            </tr>
                        </thead>
                        <tbody>
                            {showgroupstudents}
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