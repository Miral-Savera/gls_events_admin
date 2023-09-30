import React from "react";



const Table=(props)=>{
    let eventNotificationcount=1;
    return(
        <>
             <table className="table table-striped table-bordered zero-configuration" id='deptTable'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Subject</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {props.data && props.data.map((eventnotification) => {
                        return <tr key={eventNotificationcount}>
                            <td>{eventNotificationcount++}</td>
                            <td>{eventnotification.subject}</td>
                            <td>{eventnotification.description}</td>
                            <td>
                                <a href="#" className="btn btn-danger btn-sm" onClick={() => { props.deletenotification(eventnotification._id) }}><i className="bi bi-trash3"></i></a>
                                <a href="#" className="btn btn-primary btn-sm mx-1" onClick={() => { props.editnotification(eventnotification._id) }}><i className="bi bi-pencil-square"></i></a>
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
        </>
    )
}
export default Table;