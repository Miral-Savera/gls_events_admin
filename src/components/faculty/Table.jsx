import React, { useEffect } from 'react';
import { useDispatch,useSelector } from "react-redux";
import { fetchFaculty } from '../../redux/slice/faculty';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

function Table(props) {

    let facultyCount = 1;
    const host = "https://gls-events.onrender.com/admin/";
    
    let location = useLocation();
    const dispatch = useDispatch(); 
    const state = useSelector((state) => state);
    useEffect( () => {
        dispatch(fetchFaculty());
    },[location]);

    return (
        <table className="table table-striped table-bordered zero-configuration" id='deptTable'>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Fullname</th>
                    <th>Role</th>
                    <th>Department</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {state.faculty.data && state.faculty.data.map( (faculty) => {
                    const departmentName = props.departmentNames[faculty.department_faculty] || '';
                    return <tr key={facultyCount}>
                                <td>{facultyCount++}</td>
                                <td>{faculty.firstname + " " + faculty.lastname}</td>
                                <td>{faculty.role}</td>
                                <td>{departmentName}</td>
                                <td>
                                    <a href="#" className="btn btn-danger btn-sm" onClick={ () => {props.deleteDepartment(faculty._id)}}><i className="bi bi-trash3"></i></a> 
                                    <a href="#" className="btn btn-primary btn-sm mx-1" onClick={ () => {props.editDepartment(faculty._id)}}><i className="bi bi-pencil-square"></i></a>
                                </td>
                            </tr>
                })}
            </tbody>
        </table>
    )
}

export default Table
