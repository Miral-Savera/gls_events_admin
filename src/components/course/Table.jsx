import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import course, { fetchCourse } from '../../redux/slice/course';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import Loading from '../Loading';

function Table(props) {
    
    let course_count = 1;
    const host = 'https://leather-jacket-beetle.cyclic.cloud/admin/';
    let location = useLocation();
    const dispatch = useDispatch();
    const state = useSelector((state) => state);
    const [departmentNames, setDepartmentNames] = useState({});

    useEffect(() => {
        dispatch(fetchCourse());
    }, [location]);

    return (
        
        <table className="table table-striped table-bordered zero-configuration" id="deptTable">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Department Name</th>
                    <th>Course Name</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {state.course.data &&
                    state.course.data.map((course) => {
                        const departmentName = props.departmentNames[course.dept_id] || ''; // Get department name from the state or use an empty string
                        return (
                            <tr key={course_count}>
                                <td>{course_count++}</td>
                                <td>{departmentName}</td>
                                <td>{course.course_name}</td>
                                <td>
                                    <a href="#" className="btn btn-danger btn-sm" onClick={ () => {props.deleteDepartment(course._id)}}><i className="bi bi-trash3"></i></a> 
                                    <a href="#" className="btn btn-primary btn-sm mx-1" onClick={ () => {props.editDepartment(course._id)}}><i className="bi bi-pencil-square"></i></a>
                                </td>
                            </tr>
                        );
                    })}
            </tbody>
        </table>
    );
}

export default Table;
