import React from 'react';
import Button from '@mui/material/Button';
import {useHistory} from "react-router-dom";
import './style.scss'

export const Home = () => {
    const{push}=useHistory()
    const handlePush=(url)=>{
        push(url)
    }
    return (
        <div className={'header__linksWrapper'}>
            <Button onClick={()=>handlePush('chats')}  variant="text">Chats</Button>
        </div>
    );
};

