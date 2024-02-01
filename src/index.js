import React from 'react';
import './index.css';
import App from './App'
import {storage} from './app/store'
import { Provider } from 'react-redux';
// import Parent from './Data_Binding/Parent';
// import Child from './Data_Binding/Child';
// import Page1 from './Components/Page1'
// import Page2 from './Components/Page2'
// import Page3 from './Components/Page3'
// import Page4 from './Components/Page4'
// import Page5 from './Components/Page5'
// import { BrowserRouter,Route,Routes } from 'react-router-dom';
// import App from './pure-redux/social_post'
// import App from './feature/posts/addPostForm'
// import App1 from './feature/posts/postsList'

import ReactDOM from 'react-dom/client';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={storage}>
        <App />
        </Provider>

    </React.StrictMode>
    
    )