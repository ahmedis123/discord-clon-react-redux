import { Avatar } from '@material-ui/core';
import React from 'react';
import "./Message.css";
function Message({ timestamp, message, user}) {
    return (
        <div className="message">
          <Avatar src={user.photo}/>  
          <div className="message__info">
             <h4>{user.displayName} </h4>
             <span className="message_timestamp" >
                {new Date(timestamp?.toDate()).toUTCString()}
             </span>
             <p>{ message }</p>
          </div>
        </div>
    );
}

export default Message;
