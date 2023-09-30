import React from 'react'

function Context() {
    return (

        <div className="card">
            <div className="card-body">
                <div class="tab-content" id="nav-tabContent">
                    <div class="tab-pane fade" id="list-home" role="tabpanel" aria-labelledby="list-home-list">
                        <h1>General</h1>
                    </div>
                    <div class="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-home-list">
                        <h1>Profile</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Context
