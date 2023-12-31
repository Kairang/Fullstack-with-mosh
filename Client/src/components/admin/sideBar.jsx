import React from 'react';
import { Link } from 'react-router-dom';

export default function SideBar() {
    return (
        <ul>
            <li>
                <Link to="/admin/users">Users</Link>
            </li>
            <li>
                <Link to="/admin/posts">Posts</Link>
            </li>
            <li>
                <Link to="/admin/genres">Genres</Link>
            </li>
        </ul>
    );
}
