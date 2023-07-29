import React from 'react'

function Dashboard() {
    return (
        <>
            <section id="chartjs-bar-charts">
                <div className="row">
                    <div className="col-md-4">
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
                    <div className="col-md-4">
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
                    <div className="col-md-4">
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
        </>
    )
}

export default Dashboard
