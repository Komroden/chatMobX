import React, {useState} from 'react';
import {useParams} from "react-router";
import messages from "../../store/messages/messages";
import Button from "@mui/material/Button";
import {observer} from "mobx-react-lite";
import TextField from '@mui/material/TextField';
import './style.scss'

export const Messages = observer(()  => {
    const {id}=useParams()
    const [message,setMessage]=useState('')
    return (
        <div className={'header__messagesWrapper'}>
            {messages.messages.filter(item=>item.id===Number(id)).map(item=><div key={item.id}>
                <h1>{"Чат: "+item.title}</h1>
                <div>
                    {item.text.map((item,index)=><p className={'messages__text'} key={index}>{item}</p>)}
                </div>

            </div>)}
            <TextField value={message} onChange={e=>setMessage(e.target.value)} id="outlined-basic" label="Сообщение" variant="outlined" />
            {/*<input type='text' value={message} onChange={e=>setMessage(e.target.value)}/>*/}
            <Button onClick={()=> {
                messages.addMessage(Number(id), message)
                setMessage('')
            }}  variant="text">Отправить</Button>
        </div>
    );
});

