import React, { useEffect, useState } from 'react'
import Breadcrumbs from '../Breadcrumbs'
import Table from './Table'
import { useDispatch,useSelector } from "react-redux";
import { fetchDepts } from '../../redux/slice/department';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

function Faculty() {

    let location = useLocation();
    const dispatch = useDispatch(); 
    const state = useSelector((state) => state);
    const host = "https://gls-events.onrender.com/admin/";

    const [faculty,setFaculty] = useState({id : "",firstname : "",lastname : "",email : "",phone : "",role : "",department_faculty : ""});

    useEffect( () => {
        dispatch(fetchDepts());
    },[location]);

    const onChange = (e) => {
        setFaculty({...faculty,[e.target.name] : e.target.value});
    }

    const handleClick = async() => {
        
        if(faculty.id !== null && faculty.id !== ""){
            await axios({
                method: 'patch',
                url: `${host}/faculty/updatefaculty/${faculty.id}`,
                responseType: 'json',
                data : faculty,
            })
            .then(function (response) {
                if(response.data._id&& response.data._id !== null){
                    // dispatch(fetchDepts());
                    window.$('#facultyModal').modal('hide');
                    window.$('input').val(''); 
                    setFaculty({id:null}); 
                    toast.success("Faculty Updated Successfully");
                }
            });
        }
        else{
            await axios({
                method: 'post',
                url: `${host}faculty/add`,
                responseType: 'json',
                data : faculty,
            })
            .then(function (response) {
                if(response.data._id && response.data._id != null){
                    // dispatch(fetchDepts());
                    window.$('#facultyModal').modal('hide');
                    window.$('input').val(''); 
                    setFaculty({id:null}); 
                    toast.success("Faculty Added Successfully");
                }
            });
        }

    }

    return (
        <div>
            <Breadcrumbs title="Faculty" />
            <div className="content-body" style={{ height: "auto" }}>
                <section id="configuration">
                    <div className="row">
                        <div className="col-12">
                            <div className="card">
                                <div className="card-header">
                                    <h4 className="card-title">
                                    <button type='button' id='coursebtn' data-bs-target="#facultyModal" data-bs-toggle="modal" className='btn btn-bg-gradient-x-purple-blue'>New Faculty</button>
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

                                        <Table />
                                        {/* {!state.department.data && <Loading />}

                                        {state.department.data && <>
                                            <div className="table-responsive">
                                                <Table editDepartment={editDepartment} />
                                            </div>
                                        </>} */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            
            <div className="modal fade" id='facultyModal' tabIndex="-1" role="dialog">
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">New Faculty</h5>
                            <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <form id='deptForm'>
                            <div className="modal-body">
                                <div className='form-group'>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label className='form-label'>Enter First-Name</label>
                                            <input type='text' className='form-control' id='firstname' name='firstname' onChange={onChange} />
                                        </div>
                                        <div className="col-md-6">
                                            <label className='form-label'>Enter Last-Name</label>
                                            <input type='text' className='form-control' id='lastname' name='lastname' onChange={onChange} />
                                        </div>
                                    </div>
                                    <div className="row mt-2">
                                        <div className="col-md-6">
                                            <label className='form-label'>Enter Email</label>
                                            <input type='text' className='form-control' id='email' name='email' onChange={onChange} />
                                        </div>
                                        <div className="col-md-6">
                                            <label className='form-label'>Enter Phone</label>
                                            <input type='text' className='form-control' id='phone' name='phone' onChange={onChange} />
                                        </div>
                                    </div>
                                    <div className="row mt-2">
                                        <div className="col-md-6">
                                            <label className='form-label'>Enter Role</label>
                                            <select className='form-control' id="role" name='role' onChange={onChange}>
                                                <option>Select Role</option>
                                                <option value={"admin"}>Admin</option>
                                                <option value={"coordinator"}>Coordinator</option>
                                            </select>
                                        </div>
                                        <div className="col-md-6">
                                            <label className='form-label'>Enter Department</label>
                                            <select className='form-control' id='department_faculty' name='department_faculty' onChange={onChange}>
                                                <option>Select Department</option>
                                                {state.department.data && state.department.data.map( (dept) => {
                                                    return <option key={dept._id} value={dept._id}>{dept.dept_name}</option>
                                                })}
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary" onClick={handleClick}>Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>

        
    )
}

export default Faculty
