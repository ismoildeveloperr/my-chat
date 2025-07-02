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
import profile from "./Components/Profile/Profile";


function App(props) {

    return (
        <HashRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="main-content">
                    <Routes>
                        <Route path='/profile' element={<Profile posts={props.state.profilePage.postsData} />} />
                        <Route path='/messages' element={
                            <Dialogs
                                dialogs={props.state.messagesPage.dialogsData}
                                messages={props.state.messagesPage.messagesData}
                            />
                        }/>
                        <Route path='/messages/:id' element={<Dialogs
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
