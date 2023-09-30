import React from "react";

const Table = (props) => {
    let eventLocationCount=1;
    return (
        <>
            <table className="table table-striped table-bordered zero-configuration" id='deptTable'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Events Location</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {props.data && props.data.map((eventLocation) => {
                        return <tr key={eventLocationCount}>
                            <td>{eventLocationCount++}</td>
                            <td>{eventLocation.location}</td>
                            <td>
                                <a href="#" className="btn btn-danger btn-sm" onClick={() => { props.deleteEventLocation(eventLocation._id) }}><i className="bi bi-trash3"></i></a>
                                <a href="#" className="btn btn-primary btn-sm mx-1" onClick={() => { props.editEventLocation(eventLocation._id) }}><i className="bi bi-pencil-square"></i></a>
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
        </>
    )
}

export default Table;