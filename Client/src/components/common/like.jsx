import React from 'react';

export default function Like({ liked, onLikeToggle }) {
    let classes = 'fa fa-heart';
    if (!liked) classes += '-o';

    return (
        <i className={classes} onClick={onLikeToggle} style={{ cursor: 'pointer' }} aria-hidden="true"></i>
    )
}
