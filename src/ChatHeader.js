import React from 'react';
import "./ChatHeader.css";
import NotificationsIcon from "@material-ui/icons/Notifications";
import EditLocationRoundedIcon from "@material-ui/icons/EditLocationRounded";
import PeopleAltRoundedIcon from "@material-ui/icons/PeopleAltRounded";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import SendRoundedIcon from "@material-ui/icons/SendRounded";
import HelpRoundedIcon from "@material-ui/icons/HelpRounded";

function ChatHeader({ channelName }) {
    return ( 
        <div className="ChatHeader">
            <div className="ChatHeader__left">
                <h3>
                    <span className="ChatHeader__hash">#</span>
                    { channelName }
                </h3>
            </div>
            <div className="ChatHeader__right">
                <NotificationsIcon />
                <EditLocationRoundedIcon />
                <PeopleAltRoundedIcon />
                <div className="ChatHeader__Search">
                    <input placeholdersearch="Search" /> 
                    <SearchRoundedIcon />
                </div> 
                <SendRoundedIcon />
                <HelpRoundedIcon />
            </div>
        </div>
    );
}

export default ChatHeader;