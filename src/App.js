import React, { Component, Suspense } from "react";
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import { Route, Routes } from "react-router-dom";
import { connect } from "react-redux";
import { initializeApp } from "./Redux/app-reducer";
import Preloader from "./Components/Common/Preloader/Preloader";

// Ленивые импорты страниц
const DialogsContainer = React.lazy(() => import("./Components/Messages/Message/DialogsContainer"));
const ProfileContainer = React.lazy(() => import("./Components/Profile/ProfileContainer"));
const UsersContainer = React.lazy(() => import("./Components/Users/UsersContainer"));
const News = React.lazy(() => import("./Components/News/News"));
const Music = React.lazy(() => import("./Components/Music/Music"));
const Settings = React.lazy(() => import("./Components/Settings/Settings"));
const Login = React.lazy(() => import("./Components/Login/Login"));

const LoadingText = () => <div>Загрузка...</div>;

class App extends Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader />;
        }

        return (
            <div className="app-wrapper">
                <HeaderContainer />
                <Navbar />
                <div className="main-content">
                    <Routes>
                        {/* Роут для своего профиля */}
                        <Route path="/profile" element={
                            <Suspense fallback={<LoadingText />}>
                                <ProfileContainer />
                            </Suspense>
                        } />

                        {/* Роут для чужого профиля */}
                        <Route path="/profile/:userId" element={
                            <Suspense fallback={<LoadingText />}>
                                <ProfileContainer />
                            </Suspense>
                        } />

                        <Route path="/messages" element={
                            <Suspense fallback={<LoadingText />}>
                                <DialogsContainer />
                            </Suspense>
                        } />
                        <Route path="/messages/:id" element={
                            <Suspense fallback={<LoadingText />}>
                                <DialogsContainer />
                            </Suspense>
                        } />
                        <Route path="/users" element={
                            <Suspense fallback={<LoadingText />}>
                                <UsersContainer />
                            </Suspense>
                        } />
                        <Route path="/news" element={
                            <Suspense fallback={<LoadingText />}>
                                <News />
                            </Suspense>
                        } />
                        <Route path="/music" element={
                            <Suspense fallback={<LoadingText />}>
                                <Music />
                            </Suspense>
                        } />
                        <Route path="/settings" element={
                            <Suspense fallback={<LoadingText />}>
                                <Settings />
                            </Suspense>
                        } />
                        <Route path="/login" element={
                            <Suspense fallback={<LoadingText />}>
                                <Login />
                            </Suspense>
                        } />
                    </Routes>
                </div>
                <div className="main-footer">
                    <Footer />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
});

export default connect(mapStateToProps, { initializeApp })(App);
