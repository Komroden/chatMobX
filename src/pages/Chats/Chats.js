import React from 'react';
import {useHistory} from "react-router-dom";
import Button from "@mui/material/Button";

export const Chats = () => {
    const{push}=useHistory()
    const handlePush=(url)=>{
        push(url)
    }
    return (
        <div className={'header__linksWrapper'}>
            <Button onClick={()=>handlePush('messages1')}  variant="text">Animals</Button>
            <Button onClick={()=>handlePush('messages2')}  variant="text">Policy</Button>
            <Button onClick={()=>handlePush('messages3')}  variant="text">Games</Button>
        </div>
    );
};

