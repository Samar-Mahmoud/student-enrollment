import React,{useEffect} from 'react';
import "./bootstrap/css/bootstrap.css";
import Selection from "./components/Selection";
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Main from "./components/Main";
import Groups from './components/Groups';
import ShowStudent from './components/ShowStudent';
import ShowStudentInfoup from './components/ShowStudentInfoup';
import GetAllStudents from './components/GetAllStudents';
import AddStudent from './components/AddStudent';
import DeleteStudent from './components/DeleteStudent';
import UpdateStudentInfo from './components/UpdateStudentInfo';
import GetOneGroupStudents from './components/GetOneGroupStudents';
import ShowGroupSubjects from './components/ShowGroupSubjects';
import GetStudent from './components/GetStudent';
import GetInfoGroupStudents from './components/GetInfoGroupStudents';
import GroupStudentsGrades from './components/GroupStudentsGrades';
import UpdateGrades1 from './components/UpdateGrades1'; 
import UpdateGrades2 from './components/UpdateGrades2';


function App() {



    return (
        // 	<div>{JSON.stringify(backendData)}</div>
        <BrowserRouter>
            <div>
                <main>

                    <switch>
                        <Routes>
                            <Route path="" element={<Main />} />
                            <Route path="main" element={<Main />} />
                            <Route path="/select/:id" element={<Selection />} />
                            <Route path="/select/:id/groups/:id" element={<Groups />} />
                            <Route path="/select/:id/groups/:id/showStudent/:id" element={<ShowStudent />} />
                            <Route path='/select/:id/groups/:id/showAllStudents' element={<GetAllStudents/>} />
                            <Route path='/select/:id/groups/:id/addstudent' element = {<AddStudent/>}/>
                            <Route path='/select/:id/groups/:id/deletestudent' element = {<DeleteStudent/>}/>
                            <Route path='/select/:id/groups/:id/updateStudentInfo' element = {<UpdateStudentInfo/>}/>
                            <Route path="/select/:id/groups/:id/updateStudentInfo/:id" element={<ShowStudentInfoup />} />
                            <Route path='/select/:id/groups/:id/oneGroupStudents' element = {<GetOneGroupStudents/>}/>
                            <Route path='/select/:id/groups/:id/showGroupSubjects' element = {<ShowGroupSubjects/>}/>
                            <Route path='/select/:id/groups/:id/showStudent' element = {<GetStudent/>}/>
                            <Route path='/select/:id/groups/:id/showStudentsInfo' element = {<GetInfoGroupStudents/>}/>
                            <Route path='/select/:id/groups/:id/showStudentsgrades' element = {<GroupStudentsGrades/>}/>
                            <Route path='/select/:id/groups/:id/updateStudentGrades1' element = {<UpdateGrades1/>}/>
                            <Route path='/select/:id/groups/:id/updateStudentGrades1/updateStudentGrades2/:id' element = {<UpdateGrades2/>}/>

                            {/* <Route path="/loginpass" element={<Loginpass />} /> */}
                        </Routes>
                    </switch>
                </main>
            </div>
        </BrowserRouter>
    );
}

export default App;