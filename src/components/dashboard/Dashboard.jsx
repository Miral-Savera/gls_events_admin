import React, { useEffect } from 'react';
import { useDispatch,useSelector } from "react-redux";
import { fetchEvents } from "../../redux/slice/event";
import { useLocation } from 'react-router-dom';
import UpcomingEvents from './UpcomingEvents';

function Dashboard() {

    let location = useLocation();
    const dispatch = useDispatch(); 
    const state = useSelector((state) => state);
    useEffect( () => {
        dispatch(fetchEvents());
    },[location]);

    if(state.event.isLoading){
        return <h3>Loading.....</h3>;
    }

    return (
        <>
            <section id="chartjs-bar-charts">
                <div className="row">
                    <div className="col-md-3">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title">Organized Events</h4>
                                <a href="/" className="heading-elements-toggle"><i className="la la-ellipsis-v font-medium-3"></i></a>
                            </div>
                            <div className="card-content collapse show">
                                <div className="card-body">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title">Upcoming Events</h4>
                                <a href="/" className="heading-elements-toggle"><i className="la la-ellipsis-v font-medium-3"></i></a>
                            </div>
                            <div className="card-content collapse show">
                                <div className="card-body">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title">Total Departments</h4>
                                <a href="/" className="heading-elements-toggle"><i className="la la-ellipsis-v font-medium-3"></i></a>
                            </div>
                            <div className="card-content collapse show">
                                <div className="card-body">
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title">Available Coordinators</h4>
                                <a href="/" className="heading-elements-toggle"><i className="la la-ellipsis-v font-medium-3"></i></a>
                            </div>
                            <div className="card-content collapse show">
                                <div className="card-body">
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="">
                <div className="row">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title">Report</h4>
                                <a href="/" className="heading-elements-toggle"><i className="la la-ellipsis-v font-medium-3"></i></a>
                            </div>
                            <div className="card-content collapse show">
                                <div className="card-body">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title">Upcoming Events</h4>
                                <a href="/" className="heading-elements-toggle"><i className="la la-ellipsis-v font-medium-3"></i></a>
                            </div>
                            <div className="card-content collapse show">
                                <div className="card-body">
                                    <UpcomingEvents/>
                               </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Dashboard
