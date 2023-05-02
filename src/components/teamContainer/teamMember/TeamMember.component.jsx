import React from 'react';
import './TeamMember.styles.scss';

const TeamMember = ({image, name, title}) => {
    return(
        <div className="teamMember">
            <img className="teamMember__image" src={image} alt="Team Member" />
            <p className="teamMember__name">{name}</p>
            <p className="teamMember__title">{title}</p>
        </div>
    );
}
export default TeamMember;