import React from "react";

const Table = (props) => {

    let eventTypeCount = 1;

    return (
        <>
            <table className="table table-striped table-bordered zero-configuration" id='deptTable'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Events Types</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {props.data && props.data.map((eventtype) => {
                        return <tr key={eventTypeCount}>
                            <td>{eventTypeCount++}</td>
                            <td>{eventtype.type_of_events}</td>
                            <td>
                                <a href="#" className="btn btn-danger btn-sm" onClick={() => { props.deleteDepartment(eventtype._id) }}><i className="bi bi-trash3"></i></a>
                                <a href="#" className="btn btn-primary btn-sm mx-1" onClick={() => { props.editDepartment(eventtype._id) }}><i className="bi bi-pencil-square"></i></a>
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
        </>
    )
}
export default Table;