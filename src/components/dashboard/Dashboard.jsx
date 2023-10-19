import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import UpcomingEvents from './UpcomingEvents';
import Breadcrumbs from '../Breadcrumbs';
import { BarChart } from 'chartist';

function Dashboard() {

    let location = useLocation();
    useEffect( () => {

        new BarChart('#chart', {
            labels: ['Jan', 'Feb', 'March', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct','Nov','Dec'],
            series: [
                [20,50,40,30,20,80,90,40,60,30,60,30]
            ]
        }, {
            high: 100,
            low: 10,
            axisX: {
                //labelInterpolationFnc: (value, index) => (index % 2 === 0 ? value : null)
            }
        });

    },[location]);

    return (
        <>
            <Breadcrumbs title="Dashboard" />

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
                                    <h3>10</h3>
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
                                    <h3>5</h3>
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
                                    <h3>3</h3>
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
                                    <h3>3</h3>
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
                                <div className="card-body" style={{height:"325px"}}>
                                    <div id="chart" style={{height:"300px"}}></div>
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
                                <div className="card-body" style={{height:"325px"}}>
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
