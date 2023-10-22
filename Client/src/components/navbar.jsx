import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';

export default class Navbar extends Component {
    activeLink = (isActive) => ({
        color: isActive ? 'white' : '',
    });
    render() {
        const user = this.props.user;

        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link className="navbar-brand m-2" to="/">
                    ReactJs
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarToggler"
                    aria-controls="navbarToggler"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarToggler">
                    <div className="navbar-nav mr-auto m-2">
                        <NavLink className="nav-link" to="/counters" style={this.activeLink}>
                            Counter
                        </NavLink>
                        <NavLink className="nav-link" to="/movies" style={this.activeLink}>
                            Movies
                        </NavLink>
                        {user?.isAdmin && (
                            <NavLink className="nav-link" to="/admin" style={this.activeLink}>
                                Admin
                            </NavLink>
                        )}
                    </div>
                    {!user && (
                        <div className="navbar-nav mr-2">
                            <NavLink className="nav-link" to="/login" style={this.activeLink}>
                                Login
                            </NavLink>
                            <NavLink className="nav-link" to="/register" style={this.activeLink}>
                                Register
                            </NavLink>
                        </div>
                    )}
                    {user && (
                        <div className="navbar-nav mr-2">
                            <NavLink className="nav-link" to="/profile" style={this.activeLink}>
                                {user.name}
                            </NavLink>
                            <NavLink className="nav-link" to="/logout" style={this.activeLink}>
                                Logout
                            </NavLink>
                        </div>
                    )}
                </div>
            </nav>
        );
    }
}
