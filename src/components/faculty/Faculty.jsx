import React, { useEffect, useState } from 'react'
import Breadcrumbs from '../Breadcrumbs'
import Table from './Table'
import { useDispatch,useSelector } from "react-redux";
import { fetchDepts } from '../../redux/slice/department';
import { fetchFaculty } from '../../redux/slice/faculty';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import Loading from '../Loading';

function Faculty() {

    let location = useLocation();
    const dispatch = useDispatch(); 
    const state = useSelector((state) => state);
    const host = "https://gls-events.onrender.com/admin/";

    const [faculty,setFaculty] = useState({id : "",firstname : "",lastname : "",email : "",phone : "",role : "",department_faculty : ""});
    const [isLoading, setIsLoading] = useState(true);
    const [departmentNames, setDepartmentNames] = useState({});

    useEffect( () => {
        dispatch(fetchDepts());
        dispatch(fetchFaculty());
    },[location]);

    useEffect(() => {
        const fetchDepartmentNames = async () => {
            try {
                const promises = state.faculty.data.map(async (faculty) => {
                    const response = await axios({
                        method: 'get',
                        url: `${host}department/getdepartment/${faculty.department_faculty}`,
                        responseType: 'json',
                        headers: { 'auth-token': localStorage.getItem('authtoken') },
                    });
                    return { id: faculty.department_faculty, name: response.data.dept_name };
                });

                const departmentNameResults = await Promise.all(promises);

                const departmentNameMap = {};
                departmentNameResults.forEach((result) => {
                    departmentNameMap[result.id] = result.name;
                });

                setDepartmentNames(departmentNameMap);
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching department:', error);
                setIsLoading(false);
            }
        };

        if (state.faculty.data) {
            fetchDepartmentNames();
        }
    }, [state.faculty.data]);

    console.log(departmentNames);

    const onChange = (e) => {
        setFaculty({...faculty,[e.target.name] : e.target.value});
    }

    const handleClick = async() => {
        
        if(faculty.id !== null && faculty.id !== ""){
            await axios({
                method: 'patch',
                url: `${host}faculty/updatefaculty/${faculty.id}`,
                responseType: 'json',
                data : faculty,
            })
            .then(function (response) {
                if(response.data._id&& response.data._id !== null){
                    dispatch(fetchFaculty());
                    window.$('#facultyModal').modal('hide');
                    window.$('input').val(''); 
                    setFaculty({id:null}); 
                    toast.success("Faculty Updated Successfully");
                    setIsLoading(false);
                }
            }).catch(function (error){
                var error = "<div class='alert alert-danger' role='alert'>"+error.response.data.message+"</div>";
                window.$('.error').html(error);
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
                    dispatch(fetchFaculty());
                    window.$('#facultyModal').modal('hide');
                    window.$('input').val(''); 
                    setFaculty({id:null}); 
                    toast.success("Faculty Added Successfully");
                    setIsLoading(false);
                }
            }).catch(function (error){
                var error = "<div class='alert alert-danger' role='alert'>"+error.response.data.message+"</div>";
                window.$('.error').html(error);
            });
        }
    }

    const editDepartment = async(id) => {

        await axios({
            method: 'get',
            url: `${host}faculty/getfaculty/${id}`,
            responseType: 'json',
        })
        .then(function (response) {
            if(response.data._id && response.data._id != null){
                setFaculty({id : response.data._id});
                window.$('#facultyModal').modal('show');
                window.$('#firstname').val(response.data.firstname);
                window.$('#lastname').val(response.data.lastname);
                window.$('#email').val(response.data.email);
                window.$('#phone').val(response.data.phone);
                window.$('#role').val(response.data.role);
                window.$('#department_faculty').val(response.data.department_faculty);
            }
        });

    }

    const deleteDepartment = async(id) => {
        await axios({
            method: 'delete',
            url: `${host}faculty/deletefaculty/${id}`,
            responseType: 'json',
        })
        .then(function (response) {
            if(response.data._id && response.data._id != null){
                dispatch(fetchFaculty());
                toast.success("Faculty Deleted Successfully");
            }
        }).catch(function (error){
            toast.error(error.response.data.message);
        });
    }

    window.$('#facultyModal').on('hidden.bs.modal', function () {
        window.$('.error').html("");
        window.$('input').val("");
        window.$("select").prop('selectedIndex',0);
    });


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

                                        {isLoading && <Loading/>}

                                        {!isLoading && <>
                                            <div className="table-responsive">
                                                <Table editDepartment={editDepartment} deleteDepartment={deleteDepartment} departmentNames={departmentNames} />
                                            </div>
                                        </>}
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
                                <div className="error"></div>
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
