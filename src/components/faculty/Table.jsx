import React from 'react'

function Table() {
    return (
        <table className="table table-striped table-bordered zero-configuration" id='deptTable'>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Fullname</th>
                    <th>Role</th>
                    <th>Department</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {/* {state.department.data && state.department.data.map( (dept) => {
                    return <tr key={deptCount}>
                                <td>{deptCount++}</td>
                                <td>{dept.dept_name}</td>
                                <td>
                                    <a href="#" className="btn btn-danger btn-sm" onClick={ () => {deleteDepartment(dept._id)}}><i className="bi bi-trash3"></i></a> 
                                    <a href="#" className="btn btn-primary btn-sm mx-1" onClick={ () => {props.editDepartment(dept._id)}}><i className="bi bi-pencil-square"></i></a>
                                </td>
                            </tr>
                })} */}
            </tbody>
        </table>
    )
}

export default Table
