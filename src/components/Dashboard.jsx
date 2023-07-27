import React from 'react'

function Dashboard() {
    return (
        <>
            <section id="chartjs-bar-charts">
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title">Column Chart</h4>
                                <a className="heading-elements-toggle"><i className="la la-ellipsis-v font-medium-3"></i></a>
                                <div className="heading-elements">
                                    <ul className="list-inline mb-0">
                                        <li><a data-action="collapse"><i className="ft-minus"></i></a></li>
                                        <li><a data-action="reload"><i className="ft-rotate-cw"></i></a></li>
                                        <li><a data-action="expand"><i className="ft-maximize"></i></a></li>
                                        <li><a data-action="close"><i className="ft-x"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card-content collapse show">
                                <div className="card-body">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="header-footer">
                <div className="row match-height">
                    <div className="col-lg-4 col-md-12">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Basic Card</h4>
                                <h6 className="card-subtitle text-muted">Basic Card With Header & Footer</h6>
                            </div>
                            <img className="" src="theme-assets/images/carousel/22.jpg" alt="Card image cap" />
                            <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="card-link">Card link</a>
                                <a href="#" className="card-link">Another link</a>
                            </div>
                            <div className="card-footer border-top-blue-grey border-top-lighten-5 text-muted">
                                <span className="float-left">3 hours ago</span>
                                <span className="float-right">
                                    <a href="#" className="card-link">Read More
                                        <i className="la la-angle-right"></i>
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Basic Card</h4>
                                <h6 className="card-subtitle text-muted">Basic Card With Header & Footer</h6>
                            </div>
                            <img className="" src="theme-assets/images/carousel/23.jpg" alt="Card image cap" />
                            <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="card-link">Card link</a>
                                <a href="#" className="card-link">Another link</a>
                            </div>
                            <div className="card-footer border-top-blue-grey border-top-lighten-5 text-muted">
                                <span className="float-left">1 day ago</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Basic Card</h4>
                                <h6 className="card-subtitle text-muted">Basic Card With Header & Footer</h6>
                            </div>
                            <img className="" src="theme-assets/images/carousel/24.jpg" alt="Card image cap" />
                            <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="card-link">Card link</a>
                                <a href="#" className="card-link">Another link</a>
                            </div>
                            <div className="card-footer border-top-blue-grey border-top-lighten-5 text-muted">
                                <span className="float-left">3 hours ago</span>
                                <span className="float-right">
                                    <a href="#" className="card-link">Read More
                                        <i className="la la-angle-right"></i>
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Dashboard
