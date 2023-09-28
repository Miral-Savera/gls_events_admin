import React, { useEffect, useState } from 'react'
import Breadcrumbs from '../Breadcrumbs'
import { useDispatch,useSelector } from "react-redux";
import { fetchDepts } from '../../redux/slice/department';
import { fetchCourse } from '../../redux/slice/course';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import $ from "jquery";
import Table from './Table';
import Loading from '../Loading';

function Course() {
    
    const [course,setCourse] = useState({id : "",dept_id : "",course_name : ""});
    const [isLoading, setIsLoading] = useState(true);
    const host = "https://leather-jacket-beetle.cyclic.cloud/admin/";

    let location = useLocation();
    const dispatch = useDispatch(); 
    const state = useSelector((state) => state);
    const [departmentNames, setDepartmentNames] = useState({});

    useEffect( () => {
        dispatch(fetchDepts());
        dispatch(fetchCourse());
    },[location]);

    useEffect(() => {
        const fetchDepartmentNames = async () => {
            try {
                const promises = state.course.data.map(async (course) => {
                    const response = await axios({
                        method: 'get',
                        url: `${host}department/getdepartment/${course.dept_id}`,
                        responseType: 'json',
                        headers: { 'auth-token': localStorage.getItem('authtoken') },
                    });
                    return { id: course.dept_id, name: response.data.dept_name };
                });

                const departmentNameResults = await Promise.all(promises);

                const departmentNameMap = {};
                departmentNameResults.forEach((result) => {
                    departmentNameMap[result.id] = result.name;
                });

                setDepartmentNames(departmentNameMap);
                setIsLoading(false); // Set loading state to false when data is fetched
            } catch (error) {
                console.error('Error fetching department:', error);
                setIsLoading(false); // Set loading state to false even on error
            }
        };

        if (state.course.data) {
            fetchDepartmentNames();
        }
    }, [state.course.data]);

    const onChange = (e) => {
       setCourse({...course,[e.target.name] : e.target.value});
    }

    const hanleClick = async() => {
        if(course.id !== "" && course.id !==null && course.dept_id !== "" && course.course_name !== ""){

            await axios({
                method: 'patch',
                url: `${host}course/updatecourse/${course.id}`,
                responseType: 'json',
                data : course,
            })
            .then(function (response) {
                if(response.data._id && response.data._id != null){
                    $('select').removeAttr('selected').find('option:first').attr('selected', 'selected');
                    window.$('#courseModal').modal('hide');
                    window.$('input').val('');   
                    toast.success("Course Added Successfully");
                    dispatch(fetchCourse());
                }
            });

        }
        else{
            await axios({
                method: 'post',
                url: `${host}course/add`,
                responseType: 'json',
                data : course,
            })
            .then(function (response) {
                if(response.data._id && response.data._id != null){
                    $('select').removeAttr('selected').find('option:first').attr('selected', 'selected');
                    window.$('#courseModal').modal('hide');
                    window.$('input').val('');   
                    toast.success("Course Added Successfully");
                    dispatch(fetchCourse());
                }
            });
        }
    }

    const deleteDepartment = async(id) => {

        await axios({
            method: 'delete',
            url: `${host}course/deletecourse/${id}`,
            responseType: 'json',
        })
        .then(function (response) {
            if(response.data._id && response.data._id != null){
                toast.success("Course Deleted Successfully");
                dispatch(fetchCourse());
            }
        });

    }

    const editDepartment = async(id) => {
        await axios({
            method: 'get',
            url: `${host}course/getcourse/${id}`,
            responseType: 'json',
        })
        .then(function (response) {
            setCourse({dept_id : response.data.dept_id,id : response.data._id});
            window.$('#dept_id').val(response.data.dept_id);
            window.$('#course_name').val(response.data.course_name);
            window.$('#courseModal').modal('show');
        });
    }

    return (
        <div>
            <Breadcrumbs title="Course" />

            <div className="content-body" style={{ height: "auto" }}>
                <section id="configuration">
                    <div className="row">
                        <div className="col-12">
                            <div className="card">
                                <div className="card-header">
                                    <h4 className="card-title">
                                        <button type='button' id='coursebtn' data-bs-target="#courseModal" data-bs-toggle="modal" className='btn btn-bg-gradient-x-purple-blue'>New Course</button>
                                    </h4>
                                    <a className="heading-elements-toggle"><i
                                        className="la la-ellipsis-v font-medium-3"></i></a>
                                    <div className="heading-elements">
                                        <ul className="list-inline mb-0">
                                            <li><a data-action="collapse"><i className="ft-minus"></i></a></li>
                                            <li><a data-action="reload"><i className="ft-rotate-cw"></i></a></li>
                                            <li><a data-action="expand"><i className="ft-maximize"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="card-content collapse show">
                                    <div className="card-body card-dashboard">
                                        {isLoading && <Loading/>}
                                        {!isLoading && <>
                                            <div className="table-responsive">
                                                <Table deleteDepartment={deleteDepartment} editDepartment={editDepartment} departmentNames={departmentNames} />
                                            </div>
                                        </>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <div className="modal fade" id='courseModal' tabIndex="-1" role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">New Course</h5>
                            <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className='form-group'>
                                <label className='form-label'>Select Department</label>
                                <select className='form-control' id='dept_id' name="dept_id" onChange={onChange}>
                                    <option value="">Select Department</option>
                                    {state.department.data && state.department.data.map( (dept) => {
                                        return <option key={dept._id} value={dept._id}>{dept.dept_name}</option>
                                    })}
                                </select>
                            </div>
                            <div className='form-group'>
                                <label className='form-label'>Enter Course Name</label>
                                <input type="text" className="form-control" id="course_name" name="course_name" onChange={onChange} />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={hanleClick}>Save</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Course
