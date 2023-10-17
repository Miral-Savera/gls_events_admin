import React from 'react'

function Tabs() {
    return (
        <div className="card">
            <div className="card-body">
                <div class="list-group mb-2" id="list-tab" role="tablist">
                    <a class="list-group-item list-group-item-action active" id="list-home-list" data-toggle="list" href="#list-home" role="tab" aria-selected="false">Genereal</a>
                    <a class="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list" href="#list-profile" role="tab" aria-selected="false">Profile</a>
                </div>
            </div>
        </div>
    )
}

export default Tabs
