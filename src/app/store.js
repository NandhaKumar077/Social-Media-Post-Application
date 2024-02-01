import { configureStore } from "@reduxjs/toolkit";
import postsReducer from '../feature/posts/postsSlice';
// import userReducer from  '../validation/userSlice'
import usersReducer from '../feature/users/userSlice'

export const storage=configureStore({
    reducer:{
        posts:postsReducer,
        users:usersReducer,
    }
})