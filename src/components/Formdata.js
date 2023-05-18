import React, { Component } from 'react';

class Formdata extends Component {
    render() {
        const { data } = this.props;

        return (
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
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.gender}</td>
                            <td>{item.password}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    }
}

export default Formdata;