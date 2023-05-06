import React, { useState, useEffect } from 'react';
import axios from "axios";
import "../bootstrap/css/bootstrap.css";
import Header from './Header';
import { groupid, id } from './Groups';


export default function ShowGroupSubjects() {
    const [groupSubjects, setgroupSubjects] = useState([]);

    function Get() {
        useEffect(() => {
            axios
                .get(`${process.env.REACT_APP_BASE_URL}/group/${groupid}/subjects`)
                .then((res) => {
                    setgroupSubjects(res.data);

                })
                .catch((err) => console.log(err));
        }, []);

    }
    Get();

    const showsubjects = groupSubjects["data"]?.map((subject, index) => {
        return (
            <tr key={index}>
                <td>{subject.subject_id}</td>
                <td>{subject.subject_name}</td>
                <td>{subject.teacher_id}</td>
                <td>{subject.fist_name + " " + subject.last_name}</td>
            </tr>
        );
    });

    return (
        <div >
            <Header />
            <div
                className="get w-50 bg-light container-fluid mt-5"
                id="getsubjects"
                style={{
                    overflow: "auto",
                    fontFamily: "Arial",
                    fontSize: "1vw",
                    textAlign: "center",
                }}>
                <div className="table-responsive table-hover">
                    <table class="table">
                        <thead >
                            <tr className="table-success">
                                <th>Subject ID</th>
                                <th>Subject Name</th>
                                <th>Teacher ID</th>
                                <th>Teacher Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {showsubjects}
                            {/* {JSON.stringify(data.data)}*/}
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