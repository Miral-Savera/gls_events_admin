import React,{useState,useEffect} from 'react'
import Breadcrumbs from '../Breadcrumbs'
import Table from './Table'
import $ from "jquery";
import axios from 'axios';
import { toast } from 'react-toastify';
import { useDispatch,useSelector } from "react-redux";
import { fetchDepts } from '../../redux/slice/department';
import { useLocation } from 'react-router-dom';
import Loading from '../Loading';

function Department(props) {

    const [dept, setDept] = useState({id:"",dept_name : "" });
    const host = "https://gls-events.onrender.com/";

    let location = useLocation();
    const dispatch = useDispatch(); 
    const state = useSelector((state) => state);

    useEffect( () => {
        dispatch(fetchDepts());
    },[location]);

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

        if(dept.id !== null && dept.id !== "" && dept.dept_name !== null){

            await axios({
                method: 'patch',
                url: `${host}admin/department/updatedepartment/${dept.id}`,
                responseType: 'json',
                data : dept,
            })
            .then(function (response) {
                if(response.data.dept_name && response.data.dept_name != null){
                    dispatch(fetchDepts());
                    window.$('#departmentModal').modal('hide');
                    window.$('input').val(''); 
                    setDept({id:null}); 
                    toast.success("Department Updated Successfully");
                }
            }).catch(function (error){
                var error = "<div class='alert alert-danger' role='alert'>"+error.response.data.message+"</div>";
                window.$('.error').html(error);
            });;

        }
        else{

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
                    window.$('input').val('');   
                    toast.success("Department Added Successfully");
                    window.$('.error').html("");
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
            url: `${host}admin/department/getdepartment/${id}`,
            responseType: 'json',
            headers: {'auth-token': localStorage.getItem('authtoken')}
        })
        .then(function (response) {
            window.$('#dept_name').val(response.data.dept_name);
            setDept({id:response.data._id});
            window.$('#departmentModal').modal('show');
        }).catch(function (error){
            toast.error(error.response.data.message);
        });
    }

    window.$('#departmentModal').on('hidden.bs.modal', function () {
        window.$('.error').html("");
    })

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
                                            
                                            {!state.department.data && <Loading />}

                                            {state.department.data && <>
                                                <div className="table-responsive">
                                                    <Table editDepartment={editDepartment} />
                                                </div>
                                            </>}
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
                        <form id='deptForm'>
                            <div className="modal-body">
                                <div className="error"></div>
                                <div className='form-group'>
                                    <label className='form-label'>Enter Department Name</label>
                                    <input type="text" className="form-control" id="dept_name" name="dept_name" onChange={onChange} />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary" onClick={hanleClick}>Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Department
