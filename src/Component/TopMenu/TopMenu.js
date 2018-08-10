import React, { Component } from 'react';

class TopMenu extends Component {
    render() {
        return (
            < nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top" >
                <div className="container">
                    <a className="navbar-brand" href="">Friends Book</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="">Đăng kí</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="">Đăng nhập</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav >
        );
    }
}

export default TopMenu;