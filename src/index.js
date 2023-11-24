import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from './components/User/User';
import Admin from './components/Admin/Admin';
import Home from './components/Home';
import Todo from './components/Todo/Todo';
import { Scrollbar } from 'react-scrollbars-custom';
import CountDownClass from './Countdown/CountDownClass';
import CountDownHook from './Countdown/CountDownHook';
import Particles from './Particles/Particles';
import DetailUser from './components/User/DetailUser';
import Register from './components/User/Register';
import NotFound from './components/NotFound/NotFound';
import YouTubeSearch from './components/YouTubeSearch/YouTubeSearch';
ReactDOM.render(
  <React.StrictMode>
    <Scrollbar style={{ height: '100vh', width: '100%' }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path='*' element={<NotFound />} />
            <Route path="users" element={<User />} />
            <Route path="admins" element={<Admin />} />
            <Route path="todo" element={<Todo />} />
            <Route path="users/:id" element={<DetailUser />} />
            <Route path="countdownclass" element={<CountDownClass />} />
            <Route path="countdownhook" element={<CountDownHook />} />
            {/* <Route path="particles" element={<Particles />} /> */}
            <Route path="register" element={<Register />} />
            <Route path="youtube" element={<YouTubeSearch />} />
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Scrollbar>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
