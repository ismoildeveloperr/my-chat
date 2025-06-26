import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Messages/Dialogs";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import {BrowserRouter, Route, Routes} from "react-router-dom";
function App() {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="main-content">
                   <Routes>
                       <Route path='/profile' element={<Profile/>}/>
                       <Route path='/messages' element={<Dialogs />} />
                       <Route path='/messages/:id' element={<Dialogs />} />
                       <Route path='/news' element={<News/>}/>
                       <Route path='/music' element={<Music/>}/>
                       <Route path='/settings' element={<Settings/>}/>
                   </Routes>
                </div>
                <div className="main-footer">
                    <Footer/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
