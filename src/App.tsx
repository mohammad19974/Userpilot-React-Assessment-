import React from 'react';
import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './layout';
import UserInfo from './pages/user-info';
import Users from './pages/users';
import Overview from './pages/overview';
import Tickets from './pages/tickets';
import Ideas from './pages/ideas';
import Error404 from './pages/404';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/dsahboard" element={<Layout></Layout>}>
                    <Route path="users" element={<Users></Users>}>
                        <Route path=":id" element={<UserInfo></UserInfo>} />
                    </Route>
                    <Route path="ideas" element={<Ideas></Ideas>}></Route>
                    <Route path="tickets" element={<Tickets></Tickets>}></Route>
                    <Route
                        path="overview"
                        element={<Overview></Overview>}
                    ></Route>
                    <Route path="*" element={<Error404></Error404>}></Route>
                </Route>
                <Route path="*" element={<Error404></Error404>}></Route>
                <Route
                    path="/"
                    element={<Navigate to="/dsahboard/users" replace />}
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
