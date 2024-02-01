// import {compose,pipe} from 'lodash/fp'
// import './App.css';

import Posts from "./feature/posts/postsList"
import AddPostForm from "./feature/posts/addPostForm";
// import Loginform from "./validation/loginform"
// import UserList from "./validation/userList"
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App(){
    return(
        <main>
        <AddPostForm/>
        <Posts/>
        {/* <Loginform/> */}
        </main>
        )
}
export default App;
