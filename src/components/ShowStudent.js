import React, { useState, useEffect } from 'react';
import axios from "axios";
import "../bootstrap/css/bootstrap.css";
import Header from './Header';
import { id, groupid } from './Groups';

export default function ShowStudent() {

    let stid = window.location.pathname.split("/").slice(-1)[0];
    const [groupstudent, setonegroupstudent] = useState([]);
    const [subject, setSubject] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/group/${groupid}/students/${stid}`);
                setonegroupstudent(res.data);
                setSubject(res.data["student_data"]["grades"]);
                setIsLoading(false);
            } catch (err) {
                setIsLoading(false);
            }
        }
        fetchData();
    }, [stid]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    console.log(subject);
    return (
        <div>
            <Header />

            <div className="bg-light w-75 p-5 container-fluid mt-5 " id="getdata"
                style={{ fontFamily: "cursive", fontSize: "1.2vw", }}>
                <h2 style={{ fontSize: "2vw", fontFamily: "cursive", marginBottom: "50px" }}>Student information with Grades</h2>
                <form  >
                    <div className="form-group row mb-5">
                        <label for="id" className="col-sm-3 col-form-label mr-2">
                            Student ID
                        </label>
                        <div class="col-sm-7">
                            <input type="text" class="form-control" readonly placeholder="student's id" id="id0" style={{ fontSize: "1.2vw" }} value={groupstudent.student_data.student_id}></input>
                        </div>
                    </div>
                    <div className="form-group row mb-5">
                        <label for="id" className="col-sm-3 col-form-label mr-2">
                            First Name
                        </label>
                        <div class="col-sm-7">
                            <input type="text" class="form-control" readonly style={{ fontSize: "0.95vw" }} value={groupstudent.student_data.first_name}></input>
                        </div>
                    </div>
                    <div className="form-group row mb-5">
                        <label for="id" className="col-sm-3 col-form-label mr-2">
                            Last Name
                        </label>
                        <div class="col-sm-7">
                            <input type="text" class="form-control" readonly style={{ fontSize: "0.95vw" }} value={groupstudent.student_data.last_name}></input>
                        </div>
                    </div>
                    <div className="form-group row mb-5">
                        <label for="id" className="col-sm-3 col-form-label mr-2">
                            Academic year
                        </label>
                        <div class="col-sm-7">
                            <input type="text" class="form-control" readonly style={{ fontSize: "0.95vw" }} value={groupstudent.student_data.group_id}></input>
                        </div>
                    </div>
                    <div className="form-group row mb-5">
                        <label for="id" className="col-sm-3 col-form-label mr-2">
                            Email
                        </label>
                        <div class="col-sm-7">
                            <input type="text" class="form-control" readonly style={{ fontSize: "0.95vw" }} value={groupstudent.student_data.email}></input>
                        </div>
                    </div>
                    <div className="form-group row mb-5">
                        <label for="id" className="col-sm-3 col-form-label mr-2">
                            Phone number
                        </label>
                        <div class="col-sm-7">
                            <input type="text" class="form-control" readonly style={{ fontSize: "0.95vw" }} value={groupstudent.student_data.phone_number}></input>
                        </div>
                    </div>

                    <div className='table-responsive table-hover table-border ' style={{ marginTop: "100px" }} >
                        <table className='table ' style={{ fontFamily: "Arial" }}>
                            <thead>
                                <tr className="table-success" style={{ fontSize: "0.95vw" }} >
                                    <th >
                                        {subject[0].subject_name}
                                    </th>
                                    <th>
                                        {subject[1].subject_name}
                                    </th>
                                    <th>
                                        {subject[2].subject_name}
                                    </th>
                                    <th>
                                        {subject[3].subject_name}
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr >
                                    <td>
                                        <input type='text' class="form-control bg-light" readOnly
                                            defaultValue={subject[0].grade + "      " + subject[0].status} style={{ fontSize: "0.95vw" }} />
                                    </td>
                                    <td>
                                        <input type='text' class="form-control bg-light" readOnly
                                            defaultValue={subject[1].grade + "      " + subject[1].status} style={{ fontSize: "0.95vw" }} />
                                    </td>
                                    <td>
                                        <input type='text' class="form-control bg-light" readOnly
                                            defaultValue={subject[2].grade + "      " + subject[2].status} style={{ fontSize: "0.95vw" }} />
                                    </td>
                                    <td>
                                        <input type='text' class="form-control bg-light" readOnly
                                            defaultValue={subject[3].grade + "      " + subject[3].status} style={{ fontSize: "0.95vw" }} />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className='table-responsive table-hover table-border ' >
                        <table className='table ' style={{ fontFamily: "Arial" }}>
                            <thead>
                                <tr className="table-success" style={{ fontSize: "0.95vw" }} >
                                    <th >
                                        {subject[4].subject_name}
                                    </th>
                                    <th>
                                        {subject[5].subject_name}
                                    </th>
                                    <th>
                                        {subject[6].subject_name}
                                    </th>
                                    <th>
                                        {subject[7].subject_name}
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr >
                                    <td>
                                        <input type='text' class="form-control bg-light" readOnly
                                            defaultValue={subject[4].grade + "      " + subject[4].status} style={{ fontSize: "0.95vw" }} />
                                    </td>
                                    <td>
                                        <input type='text' class="form-control bg-light" readOnly
                                            defaultValue={subject[5].grade + "      " + subject[5].status} style={{ fontSize: "0.95vw" }} />
                                    </td>
                                    <td>
                                        <input type='text' class="form-control bg-light" readOnly
                                            defaultValue={subject[6].grade + "      " + subject[6].status} style={{ fontSize: "0.95vw" }} />
                                    </td>
                                    <td>
                                        <input type='text' class="form-control bg-light" readOnly
                                            defaultValue={subject[7].grade + "      " + subject[7].status} style={{ fontSize: "0.95vw" }} />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className='table-responsive table-hover table-border ' >
                        <table className='table ' style={{ fontFamily: "Arial" }}>
                            <thead>
                                <tr className="table-success" style={{ fontSize: "0.95vw" }} >
                                    <th >
                                        {subject[8].subject_name}
                                    </th>
                                    {subject.map((v, i) => {
                                        if (i > 8) {
                                            return (
                                                <th >
                                                    {subject[i].subject_name}
                                                </th>
                                            );
                                        }
                                    })}
                                </tr>
                            </thead>
                            <tbody>
                                <tr >
                                    <td>
                                        <input type='text' class="form-control bg-light" readOnly
                                            defaultValue={subject[8].grade + "      " + subject[8].status} style={{ fontSize: "0.95vw" }} />
                                    </td>

                                    {subject.map((v, i) => {
                                        if (i > 8) {
                                            return <td>
                                                <input type='text' class="form-control bg-light" readOnly
                                                    defaultValue={subject[i].grade + "      " + subject[i].status} style={{ fontSize: "0.95vw" }} />
                                            </td>;
                                        }
                                    })}
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </form>
            </div>
            <a style={{ position: "fixed", top: "95%", left: "1%", cursor: "pointer" }} href={`/select/${id}`}>
                <i class="fa-solid fa-right-from-bracket fa-flip-horizontal fa-2xl" style={{ color: 'grey' }}></i>

            </a>
        </div>
    );
}
