import React from 'react';
import { Route } from 'react-router-dom';
import Posts from './posts';
import SideBar from './sideBar';
import Users from './users';
import Genre from './genres';

export default function Dashboard({ history }) {
    return (
        <div>
            <div className="row justify-content-between">
                <h1>Admin Dashboard</h1>
            </div>
            <SideBar />
            <Route path="/admin/users" component={Users} />
            <Route path="/admin/posts" component={Posts} />
            <Route path="/admin/genres" component={Genre} />
        </div>
    );
}
