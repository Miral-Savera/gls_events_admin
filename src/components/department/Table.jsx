import React, { useEffect, useState } from 'react';
import { useDispatch,useSelector } from "react-redux";
import { fetchDepts } from '../../redux/slice/department';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

function Table(props) {

    let deptCount = 1;
    const host = "https://gls-events.onrender.com/admin/";
    
    let location = useLocation();
    const dispatch = useDispatch(); 
    const state = useSelector((state) => state);
    useEffect( () => {
        dispatch(fetchDepts());
    },[location]);

    const deleteDepartment = async(id) => {
        await axios({
            method: 'delete',
            url: `${host}department/delete/${id}`,
            responseType: 'json',
            headers: {'auth-token': localStorage.getItem('authtoken')}
        })
        .then(function (response) {
            dispatch(fetchDepts());
            toast.success("Department Deleted Successfully");
        }).catch(function (error){
            toast.error(error.response.data.message);
        });
    }

    return (

        <table className="table table-striped table-bordered zero-configuration" id='deptTable'>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Department Name</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {state.department.data && state.department.data.map( (dept) => {
                    return <tr key={deptCount}>
                                <td>{deptCount++}</td>
                                <td>{dept.dept_name}</td>
                                <td>
                                    <a href="#" className="btn btn-danger btn-sm" onClick={ () => {deleteDepartment(dept._id)}}><i className="bi bi-trash3"></i></a> 
                                    <a href="#" className="btn btn-primary btn-sm mx-1" onClick={ () => {props.editDepartment(dept._id)}}><i className="bi bi-pencil-square"></i></a>
                                </td>
                            </tr>
                })}
            </tbody>
        </table>
    
    )
}

export default Table
