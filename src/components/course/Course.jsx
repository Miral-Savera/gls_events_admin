import React, { useEffect, useState } from 'react'
import Breadcrumbs from '../Breadcrumbs'
import { useDispatch,useSelector } from "react-redux";
import { fetchDepts } from '../../redux/slice/department';
import { useLocation } from 'react-router-dom';

function Course() {
    
    const [course,setCourse] = useState({dept_id : "",course_name : ""});

    let location = useLocation();
    const dispatch = useDispatch(); 
    const state = useSelector((state) => state);

    useEffect( () => {
        dispatch(fetchDepts());
    },[location]);

    const onChange = (e) => {
       setCourse({...course,[e.target.name] : e.target.value});
    }

    const hanleClick = () => {
        
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
                                        <div className="table-responsive">

                                        </div>
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
