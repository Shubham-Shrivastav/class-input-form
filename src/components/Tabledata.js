import React from 'react';
import { Link } from 'react-router-dom';

export default function TableData({ data }) {
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Gender</th>
                        <th>Password</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data?.length ? data?.map((item, index) => (
                            <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.gender}</td>
                                <td>{item.password}</td>
                            </tr>
                        )) : <tr>No records founds</tr>
                    }
                </tbody>
            </table>
            <Link to="/">Go Back</Link>
        </>
    );
}