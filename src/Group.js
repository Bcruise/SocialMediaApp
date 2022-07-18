import React from 'react';
import './Group.css';

const Group = () => {
  return (
    <>
        <hr/>
        <span className="g-title">Group conversations</span>
        <div className="g-plus-div">
            <div className="g-plus-circle">
                <span className="g-plus">+</span>
            </div>
            <span>Create New Group</span>
        </div>
    </>
  )
}

export default Group