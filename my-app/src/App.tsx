import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";
import Dialogs from "./components/dialogs/Dialogs";
import {BrowserRouter, Route} from 'react-router-dom';
import {stateType} from "./redux/state";

export type AppPropsType = {
    state: stateType;
}

const App = (props: AppPropsType) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/profile' render={() => <Profile
                        posts={props.state.profilePage.posts}/>}/>
                    <Route path='/dialogs' render={() => <Dialogs
                        dialogs={props.state.messagePage.dialogs}
                        messages={props.state.messagePage.messages}/>}/>
                    {/*<Route path='/music' render={ () => <Music/> }/>*/}
                    {/*<Route path='/news' render={ () => <News/> }/>*/}
                    {/*<Route path='/settings' render={ () => <Settings/> }/>*/}
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
