import React from 'react'

function Dashboard() {
  return (
    <div>
      <div className="row">
            <div className="col-12">
                <div className="card">
                    <div className="card-header">
                        <h4 className="card-title">Column Chart</h4>
                        <a href="#" className="heading-elements-toggle"><i className="la la-ellipsis-v font-medium-3"></i></a>
                        <div className="heading-elements">
                            <ul className="list-inline mb-0">
                                <li><a href="#" data-action="collapse"><i className="ft-minus"></i></a></li>
                                <li><a href="#" data-action="reload"><i className="ft-rotate-cw"></i></a></li>
                                <li><a href="#" data-action="expand"><i className="ft-maximize"></i></a></li>
                                <li><a href="#" data-action="close"><i className="ft-x"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="card-content collapse show">
                        <div className="card-body">
                            <div className="height-400">
                                <canvas id="column-chart"></canvas>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Dashboard
