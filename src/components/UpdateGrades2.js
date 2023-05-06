import React, { useState, useEffect } from 'react';
import axios from "axios";
import "../bootstrap/css/bootstrap.css";
import { groupid, id } from './Groups';
import Header from './Header';


export default function UpdateGrades2() {
    let stid = window.location.pathname.split("/").slice(-1)[0];
    const [groupstudent, setonegroupstudent] = useState([null]);
    const [isLoading, setIsLoading] = useState(false);
    const [subject, setSubject] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/group/${groupid}/students/${stid}`);
                setonegroupstudent(res.data);
                setSubject(res.data["student_data"]["grades"]);
                setIsLoading(true);
            } catch (err) {
                setIsLoading(true);
            }
        }
        fetchData();
    }, [stid]);

    async function submit(event) {
        event.preventDefault();

        let grades = document.getElementsByTagName("input");
        let element = document.querySelector('.up-msg');
        let ok = true;
        var gradesStudent = {};
        let g;

        element.innerHTML = '';
        element.style.color = "red";
        for (let i = 0; i < grades.length; ++i) {
            g = grades[i].value;
            if (typeof g === 'string') {
                if (Number.isNaN(parseInt(g))) {
                    element.innerHTML = 'Grades should be numbers';
                    ok = false;
                }
                else g = parseInt(g);
            }

            if (ok && (g < 0 || g > 100)) {
                element.innerHTML = 'Grades should be in range [0-100]';
                ok = false;
            }
        }

        if (ok) {
            for (let i = 1; i <= subject.length; i++)
                gradesStudent[subject[i - 1].subject_name] = grades[i].value;

            try {
                await axios.patch(`${process.env.REACT_APP_BASE_URL}/group/${groupid}/students/${stid}`, gradesStudent);
                element.style.color = "green";
                element.innerHTML = 'Updated Successfully';
            }
            catch {
                element.innerHTML = 'Updation failed';
            }
        }
    }

    if (!isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <Header />
            <div className="bg-light w-75 p-5 container-fluid mt-5 " id="getdata"
                style={{
                    overflow: "auto",
                    fontFamily: "cursive",
                    fontSize: "1vw",
                    textAlign: "center",
                }}>
                <h2 style={{ fontSize: "2vw", fontFamily: "cursive", marginBottom: "50px" }}>Student Grades</h2>
                <form  >
                    <div className="form-group row mb-5">
                        <label for="id" className="col-sm-3 col-form-label mr-2">
                            Student ID
                        </label>
                        <div class="col-sm-7">
                            <input type="text" class="form-control" readonly placeholder="student's id" id="id0" style={{ fontSize: "1.2vw" }} value={groupstudent.student_data.student_id}></input>
                        </div>
                    </div>

                    <div className='table-responsive table-hover table-border ' style={{ marginTop: "80px" }} >
                        <table className='table ' style={{ fontFamily: "Arial" }}>
                            <thead>
                                <tr className="table-success" style={{ fontSize: "0.95vw", textAlign: 'left' }} >
                                    <th x>
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
                                        <input type='text' class="form-control"
                                            defaultValue={subject[0].grade} style={{ fontSize: "0.95vw" }} />
                                    </td>
                                    <td>
                                        <input type='text' class="form-control"
                                            defaultValue={subject[1].grade} style={{ fontSize: "0.95vw" }} />
                                    </td>
                                    <td>
                                        <input type='text' class="form-control"
                                            defaultValue={subject[2].grade} style={{ fontSize: "0.95vw" }} />
                                    </td>
                                    <td>
                                        <input type='text' class="form-control"
                                            defaultValue={subject[3].grade} style={{ fontSize: "0.95vw" }} />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className='table-responsive table-hover table-border ' >
                        <table className='table ' style={{ fontFamily: "Arial" }}>
                            <thead>
                                <tr className="table-success" style={{ fontSize: "0.95vw", textAlign: 'left' }} >
                                    <th x>
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
                                        <input type='text' class="form-control"
                                            defaultValue={subject[4].grade} style={{ fontSize: "0.95vw" }} />
                                    </td>
                                    <td>
                                        <input type='text' class="form-control"
                                            defaultValue={subject[5].grade} style={{ fontSize: "0.95vw" }} />
                                    </td>
                                    <td>
                                        <input type='text' class="form-control"
                                            defaultValue={subject[6].grade} style={{ fontSize: "0.95vw" }} />
                                    </td>
                                    <td>
                                        <input type='text' class="form-control"
                                            defaultValue={subject[7].grade} style={{ fontSize: "0.95vw" }} />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className='table-responsive table-hover table-border ' >
                        <table className='table ' style={{ fontFamily: "Arial" }}>
                            <thead>
                                <tr className="table-success" style={{ fontSize: "0.95vw", textAlign: 'left' }} >
                                    <th x>
                                        {subject[8].subject_name}
                                    </th>
                                    {subject.map((v, i) => {
                                        if (i > 8) {
                                            return (
                                                <th x>
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
                                        <input type='text' class="form-control"
                                            defaultValue={subject[8].grade} style={{ fontSize: "0.95vw" }} />
                                    </td>
                                    {subject.map((v, i) => {
                                        if (i > 8) {
                                            return <td>
                                                <input type='text' class="form-control"
                                                    defaultValue={subject[i].grade} style={{ fontSize: "0.95vw" }} />
                                            </td>;
                                        }
                                    })}
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <br></br>
                    <div
                        className="form-group row  mb-5"
                        class="up-msg"
                        style={{ color: "red", fontSize: "14px", marginTop: "5px", marginLeft: "4px", fontFamily: 'monospace' }}
                    ></div>
                    <br></br>
                    <a href='#' type="submit" class="btn  btn-danger" id="submitForm" onClick={submit}>
                        Update
                    </a>
                </form>
            </div>
            <a style={{ position: "fixed", top: "95%", left: "1%", cursor: "pointer" }} href={`/select/${id}`}>
                <i class="fa-solid fa-right-from-bracket fa-flip-horizontal fa-2xl" style={{ color: 'grey' }}></i>
            </a>
        </div>

    );


}