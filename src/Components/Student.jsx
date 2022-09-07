import React from "react";
import './Navbar.css'

const Student = () => {
    return (
        <>
            <div className="flex">

                <table>
                    <thead>

                        <tr>
                            <th>S. no.</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Gender</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr>

                            <td>1</td>
                            <td>Anom</td>
                            <td>19</td>
                            <td>Male</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Megha</td>
                            <td>19</td>
                            <td>Female</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Subham</td>
                            <td>25</td>
                            <td>Male</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}
export default Student;