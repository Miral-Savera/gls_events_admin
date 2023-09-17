import React,{useState,useEffect} from 'react'
import Breadcrumbs from '../Breadcrumbs'
import Table from './Table'
import $ from "jquery";
import axios from 'axios';
import { toast } from 'react-toastify';
import { useDispatch,useSelector } from "react-redux";
import { fetchDepts } from '../../redux/slice/department';
import { useLocation } from 'react-router-dom';

function Department(props) {

    const [dept, setDept] = useState({ dept_name : "" });
    const host = "https://gls-events.onrender.com/";

    let location = useLocation();
    const dispatch = useDispatch(); 
    const state = useSelector((state) => state);

    $(function () {
        $(document).on('click','#deptbtn',function(){
            window.$('#departmentModal').modal('show');
        });
    });

    const onChange = (e) => {
        setDept({ ...dept, [e.target.name]: e.target.value });
    }

    const hanleClick = async(e) => {
        e.preventDefault();

        await axios({
            method: 'post',
            url: `${host}admin/department/add`,
            responseType: 'json',
            data : dept,
        })
        .then(function (response) {
            if(response.data.dept_name && response.data.dept_name != null){
                dispatch(fetchDepts());
                window.$('#departmentModal').modal('hide');
                toast.success("Department Added Successfully");
            }
        });

    }

    return (

        <>
            <div>
                <Breadcrumbs title="Department" />

                <div className="content-body" style={{height:"auto"}}>
                    <section id="configuration">
                        <div className="row">
                            <div className="col-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-title">
                                            <button type='button' id='deptbtn' className='btn btn-bg-gradient-x-purple-blue'>New Department</button>
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
                                                <Table />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                </div>
            </div>

            <div className="modal fade" id='departmentModal' tabIndex="-1" role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">New Department</h5>
                            <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className='form-group'>
                                <label className='form-label'>Enter Department Name</label>
                                <input type="text" className="form-control" id="dept_name" name="dept_name" onChange={onChange} />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={hanleClick}>Save</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Department
