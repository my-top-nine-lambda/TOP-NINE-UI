import React from 'react';

const ProfileCard = () => {
    return (
        <>
        <div>
            <h3>{this.state.movie.title}</h3>
            <p>{this.state.movie}</p>
        </div>
        <div onClick={this.deleteItem}>Delete</div>
        </>
    )
}

export default ProfileCard;