import React from 'react'

function Breadcrumbs() {
    return (
        <div>
            <div className="content-header row">
                <div className="content-header-left col-md-4 col-12 mb-2">
                    <h3 className="content-header-title">Dashboard</h3>
                </div>
                <div className="content-header-right col-md-8 col-12">
                    <div className="breadcrumbs-top float-md-right">
                        <div className="breadcrumb-wrapper mr-1">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="index.html">Home</a>
                                </li>
                                <li className="breadcrumb-item active">Charts
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Breadcrumbs
