import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Messages/Message/Dialogs";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import {HashRouter, Route, Routes} from "react-router-dom";

function App(props) {

    return (
        <HashRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="main-content">
                    <Routes>
                        <Route path='/profile' element={
                            <Profile
                                profilePage={props.state.profilePage}
                                dispatch={props.dispatch}

                        />} />
                        <Route path='/messages' element={
                            <Dialogs
                                state={props.state.messagesPage}
                                dialogs={props.state.messagesPage.dialogsData}
                                dispatch={props.dispatch}
                            />

                        }/>
                        <Route path='/messages/:id' element={<Dialogs store={props.store}
                                                                       dialogs={props.state.messagesPage.dialogsData}
                                                                       messages={props.state.messagesPage.messagesData}
                        />}/>
                        <Route path='/news' element={<News/>}/>
                        <Route path='/music' element={<Music/>}/>
                        <Route path='/settings' element={<Settings/>}/>
                    </Routes>
                </div>
                <div className="main-footer">
                    <Footer/>
                </div>
            </div>
        </HashRouter>
    );
}

export default App;
