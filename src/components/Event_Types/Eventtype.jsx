import React, { useState,useEffect } from "react";
import Breadcrumbs from "../Breadcrumbs";
import axios from "axios";
import { toast } from 'react-toastify';
import { useDispatch,useSelector } from "react-redux";
import { fetchEventstype } from '../../redux/slice/eventstype';
import { useLocation } from 'react-router-dom';
import Table from "./Table";
import Loading from "../Loading";

const Eventtype=()=>{

    const [eventType,setEventType] = useState({id : "",type_of_events : ""});
    const host = "https://gls-events.onrender.com/";

    const dispatch = useDispatch(); 
    const state = useSelector((state) => state);

    useEffect(() => {
        dispatch(fetchEventstype())
    },[]);

    const onChange = (e) => {
        setEventType({...eventType,[e.target.name] : e.target.value});
    }

    const hanleClick = async() => {
        
        if(eventType.id !== "" && eventType.id !== null){
            await axios({
                method: 'patch',
                url: `${host}admin/eventstype/updateevents/${eventType.id}`,
                responseType: 'json',
                data : eventType,
            })
            .then(function (response) {
                if(response.data.type_of_events && response.data.type_of_events != null){
                    dispatch(fetchEventstype());
                    window.$('#eventTypeModal').modal('hide');
                    window.$('input').val('');   
                    setEventType({'id' : '','type_of_events' : ''});
                    toast.success("Event Type Updated Successfully");
                }
            }).catch(function (error){
                var error = "<div class='alert alert-danger' role='alert'>"+error.response.data.message+"</div>";
                window.$('.error').html(error);
            });
        }
        else{
            await axios({
                method: 'post',
                url: `${host}admin/eventstype/add`,
                responseType: 'json',
                data : eventType,
            })
            .then(function (response) {
                if(response.data.type_of_events && response.data.type_of_events != null){
                    dispatch(fetchEventstype());
                    window.$('#eventTypeModal').modal('hide');
                    window.$('input').val('');   
                    setEventType({'id' : '','type_of_events' : ''});
                    toast.success("Event Type Added Successfully");
                }
            }).catch(function (error){
                var error = "<div class='alert alert-danger' role='alert'>"+error.response.data.message+"</div>";
                window.$('.error').html(error);
            });
        }

    }

    const deleteDepartment = async(id) => {
        await axios({
            method: 'delete',
            url: `${host}admin/eventstype/deleteevents/${id}`,
            responseType: 'json',
        })
        .then(function (response) {
            if(response.data.type_of_events && response.data.type_of_events != null){
                dispatch(fetchEventstype()); 
                toast.success("Event Type Deleted Successfully");
            }
        }).catch(function (error){
            toast.error(error.response.data.message);
        });
    }

    const editDepartment = async(id) => {
        await axios({
            method: 'get',
            url: `${host}admin/eventstype/geteventstype/${id}`,
            responseType: 'json',
        })
        .then(function (response) {
            if(response.data.type_of_events && response.data.type_of_events != null){
                window.$('#type_of_events').val(response.data.type_of_events);
                setEventType({'id' : response.data._id,'type_of_events' : response.data.type_of_events});
                window.$('#eventTypeModal').modal('show');
            }
        }).catch(function (error){
            toast.error(error.response.data.message);
        });
    }

    window.$('#eventTypeModal').on('hidden.bs.modal', function () {
        window.$('.error').html("");
        window.$('input').val("");
    });


    return(
        <>
            <div>
                <Breadcrumbs title="Event Types" />

                <div className="content-body" style={{height:"auto"}}>
                    <section id="configuration">
                        <div className="row">
                            <div className="col-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-title">
                                        <button type='button' data-bs-target="#eventTypeModal" data-bs-toggle="modal" className='btn btn-bg-gradient-x-purple-blue'>New Event Type</button>
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
                                            
                                            {!state.eventstype.data && <Loading />}
                                            {state.eventstype.data && <>
                                                <div className="table-responsive">
                                                    <Table data={state.eventstype.data} deleteDepartment={deleteDepartment} editDepartment={editDepartment}  />
                                                </div>
                                            </>}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                <div className="modal fade" id='eventTypeModal' tabIndex="-1" role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">New Event Type</h5>
                            <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="error"></div>
                            <div className='form-group'>
                                <label className='form-label'>Enter Event Type</label>
                                <input type="text" className="form-control" id="type_of_events" name="type_of_events" onChange={onChange} />
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
        </>
    )
}

export default Eventtype;