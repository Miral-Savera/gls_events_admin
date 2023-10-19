import React from 'react'

function UpcomingEvents() {

    return (
        <div style={{overflow:"scroll", height:"250px"}}>
            <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                <div className="d-flex w-100 justify-content-between">
                    <h5 className="text-bold-600">Career fairs</h5>
                    <small className="text-muted">3 days to go</small>
                </div>
                <p>A classic career fair brings employers onto campus to talk to students about their mission, hiring practices, and prospects. Consider doing a series of industry-focused career fairs for targeted interactions.</p>
            </a>
            <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                <div className="d-flex w-100 justify-content-between">
                    <h5 className="text-bold-600">CyberShadez</h5>
                    <small className="text-muted">10 days to go</small>
                </div>
                <p>Technical Event for all Collage Student with all IT Events with Hackathon.</p>
            </a>
            <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                <div className="d-flex w-100 justify-content-between">
                    <h5 className="text-bold-600">Traditional Days for FCAIT Department</h5>
                    <small className="text-muted">3 days ago</small>
                </div>
                <p>FCAIT Department will Organized a Traditional Garba Event to Celebrate Navratri.</p>
            </a>
        </div>
    )
}

export default UpcomingEvents
