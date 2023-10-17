import React from "react";
import Breadcrumbs from "../Breadcrumbs";
import Loading from "../Loading";
import axios from "axios";
import { toast } from 'react-toastify';
import { useDispatch,useSelector } from "react-redux";
import { fetcheventlocation } from '../../redux/slice/eventslocation';
import Table from "../Events_Locations/Table";
import {useState,useEffect} from "react"
const Eventlocation = () => {
    const [eventLocation,setEventLocation] = useState({id : "",location : ""});
    const host = "https://gls-events.onrender.com/";


    const dispatch = useDispatch(); 
    const state = useSelector((state) => state);

    useEffect(() => {
        dispatch(fetcheventlocation());
    },[]);
    const onChange=(e)=>{
        setEventLocation({...eventLocation,[e.target.name] : e.target.value});

    }
    const hanleClick=async()=>{
        if(eventLocation.id !== "" && eventLocation.id !== null){
            await axios({
                method: 'patch',
                url: `${host}admin/eventLocation/updatelocation/${eventLocation.id}`,
                responseType: 'json',
                data : eventLocation,
            })
            .then(function (response) {
                if(response.data.location && response.data.location != null){
                    dispatch(fetcheventlocation());
                    window.$('#eventLocationModal').modal('hide');
                    window.$('input').val('');   
                    setEventLocation({'id' : '','location' : ''});
                    toast.success("Event Location Updated Successfully");
                }
            }).catch(function (error){
                var error = "<div class='alert alert-danger' role='alert'>"+error.response.data.message+"</div>";
                window.$('.error').html(error);
            });
        }
        else{
            await axios({
                method: 'post',
                url: `${host}admin/eventLocation/add`,
                responseType: 'json',
                data : eventLocation,
            })
            .then(function (response) {
                if(response.data.location && response.data.location != null){
                    dispatch(fetcheventlocation());
                    window.$('#eventLocationModal').modal('hide');
                    window.$('input').val('');   
                    setEventLocation({'id' : '','location' : ''});
                    toast.success("Event Location Added Successfully");
                }
            }).catch(function (error){
                var error = "<div class='alert alert-danger' role='alert'>"+error.response.data.message+"</div>";
                window.$('.error').html(error);
            });
        }

    }
    const editEventLocation=async(id)=>{
        await axios({
            method: 'get',
            url: `${host}admin/eventlocation/geteventlocation/${id}`,
            responseType: 'json',
        })
        .then(function (response) {
            if(response.data.location && response.data.location != null){
                window.$('#location').val(response.data.location);
                setEventLocation({'id' : response.data._id,'location' : response.data.location});
                window.$('#eventLocationModal').modal('show');
            }
        }).catch(function (error){
            toast.error(error.response.data.message);
        });

    }

    const deleteEventLocation=async(id)=>{
        await axios({
            method: 'delete',
            url: `${host}admin/eventLocation/deletelocation/${id}`,
            responseType: 'json',
        })
        .then(function (response) {
            if(response.data.location && response.data.location != null){
                dispatch(fetcheventlocation()); 
                toast.success("Event Location Deleted Successfully");
            }
        }).catch(function (error){
            toast.error(error.response.data.message);
        });

    }

    window.$('#eventLocationModal').on('hidden.bs.modal', function () {
        window.$('.error').html("");
        window.$('input').val("");
    });

    return (
        <>
            <div>
                <Breadcrumbs title="Event Location" />

                <div className="content-body" style={{ height: "auto" }}>
                    <section id="configuration">
                        <div className="row">
                            <div className="col-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-title">
                                            <button type='button' data-bs-target="#eventLocationModal" data-bs-toggle="modal" className='btn btn-bg-gradient-x-purple-blue'>New Event Location</button>
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

                                            {!state.eventslocation.data && <Loading />}
                                            {state.eventslocation.data && <>
                                                <div className="table-responsive">
                                                    <Table data={state.eventslocation.data} deleteEventLocation={deleteEventLocation} editEventLocation={editEventLocation} />
                                                </div>
                                            </>}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                <div className="modal fade" id='eventLocationModal' tabIndex="-1" role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">New Event Location</h5>
                                <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="error"></div>
                                <div className='form-group'>
                                    <label className='form-label'>Enter Event Location</label>
                                    <input type="text" className="form-control" id="location" name="location" onChange={onChange} />
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


export default Eventlocation;