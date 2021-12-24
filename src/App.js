import React from 'react';
import {Route, Switch} from "react-router";
import {Home} from "./pages/Home/Home";
import {Chats} from "./pages/Chats/Chats";
import {Messages} from "./pages/Messages/Messages";
import './style.scss'


export function App() {
  return (
    <>
      <Switch>
        <Route exact path={'/'} component={Home}/>
        <Route exact path={'/chats'} component={Chats}/>
        <Route exact path={'/messages:id'} component={Messages}/>
      </Switch>
    </>
  );
}


