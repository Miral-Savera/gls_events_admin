import React from "react";
import Breadcrumbs from "../Breadcrumbs";
import Loading from "../Loading";
import { useState,useEffect } from "react";
import {useDispatch,useSelector} from "react-redux";
import Table from "../Notication/Table";
import {fetchnotification} from "../../redux/slice/notification";
import axios from "axios";
import { toast } from 'react-toastify';


const Notification = () => {
    const [eventnotification,setNotification] = useState({id : "",subject : "",description:""});
    const host = "https://gls-events.onrender.com/";


    const dispatch = useDispatch(); 
    const state = useSelector((state) => state);

    useEffect(() => {
        dispatch(fetchnotification());
    },[]);

    const deletenotification=async(id)=>{
        await axios({
            method: 'delete',
            url: `${host}admin/notification/deletenotification/${id}`,
            responseType: 'json',
        })
        .then(function (response) {
            if(response.data.subject && response.data.subject != null){
                dispatch(fetchnotification()); 
                toast.success("Event Notification Deleted Successfully");
            }
        });

    }
    const editnotification=async(id)=>{
        await axios({
            method: 'get',
            url: `${host}admin/notification/getnotification/${id}`,
            responseType: 'json',
        })
        .then(function (response) {
            if(response.data.subject && response.data.subject != null){
                window.$('#subject').val(response.data.subject);
                window.$('#description').val(response.data.description);
                setNotification({'id' : response.data._id,'subject' : response.data.subject,'description':response.data.description});
                window.$('#eventNotificationModal').modal('show');
            }
        });

    }
    const onChange=(e)=>{
        setNotification({...eventnotification,[e.target.name] : e.target.value});

    }
    const handleClick=async()=>{
        if(eventnotification.id !== "" && eventnotification.id !== null){
            await axios({
                method: 'patch',
                url: `${host}admin/notification/updatenotification/${eventnotification.id}`,
                responseType: 'json',
                data : eventnotification,
            })
            .then(function (response) {
                if(response.data.subject && response.data.subject != null){
                    dispatch(fetchnotification());
                    window.$('#eventNotificationModal').modal('hide');
                    window.$('input').val('');   
                    setNotification({'id' : '','subject' : '','description':''});
                    toast.success("Event Notification Updated Successfully");
                }
            });
        }
        else{
            await axios({
                method: 'post',
                url: `${host}admin/notification/add`,
                responseType: 'json',
                data : eventnotification,
            })
            .then(function (response) {
                if(response.data.subject && response.data.subject != null){
                    dispatch(fetchnotification());
                    window.$('#eventNotificationModal').modal('hide');
                    window.$('input').val('');   
                    setNotification({'id' : '','subject' : '','description':''});
                    toast.success("Event Notification Added Successfully");
                }
            });
        }

    }

    return (
        <>
            <div>
                <Breadcrumbs title="Event Notification" />

                <div className="content-body" style={{ height: "auto" }}>
                    <section id="configuration">
                        <div className="row">
                            <div className="col-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-title">
                                            <button type='button' data-bs-target="#eventNotificationModal" data-bs-toggle="modal" className='btn btn-bg-gradient-x-purple-blue'>New Notification</button>
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

                                            {!state.notification.data && <Loading />}
                                            {state.notification.data && <>
                                                <div className="table-responsive">
                                                    <Table data={state.notification.data} deletenotification={deletenotification} editnotification={editnotification} />
                                                </div>
                                            </>}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                <div className="modal fade" id='eventNotificationModal' tabIndex="-1" role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">New Notification</h5>
                                <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className='form-group'>
                                    <label className='form-label'>Enter Subject</label>
                                    <input type="text" className="form-control" id="subject" name="subject" onChange={onChange} />
                                </div>
                                <div className='form-group'>
                                    <label className='form-label'>Enter Description</label>
                                    <input type="text" className="form-control" id="description" name="description" onChange={onChange} />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary" onClick={handleClick}>Save</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
export default Notification;