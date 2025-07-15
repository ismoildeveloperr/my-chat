// App.js (✅ исправлено)
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Profile from "./Components/Profile/Profile";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import { Route, Routes } from "react-router-dom";
import DialogsContainer from "./Components/Messages/Message/DialogsContainer";

function App() {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className="main-content">
                <Routes>
                    <Route path='/profile' element={<Profile/>} />
                    <Route path="/messages" element={<DialogsContainer/>} />
                    <Route path='/messages/:id' element={<DialogsContainer/>} />
                    <Route path='/news' element={<News/>} />
                    <Route path='/music' element={<Music/>} />
                    <Route path='/settings' element={<Settings/>} />
                </Routes>
            </div>
            <div className="main-footer">
                <Footer/>
            </div>
        </div>
    );
}

export default App;
