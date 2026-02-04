// import { configureStore } from '@reduxjs/toolkit'
 
// import { persistStore, persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'
 
// import rootReducer from './reducer'
 
// const persistConfig = {
//   key: 'root',
//   storage,
//   whitelist: [], // 这里存放白名单
// }
 
// const store = configureStore({
//   reducer: persistReducer(persistConfig, rootReducer),
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//       serializableCheck: false,
//     }),
// })
 
// export const persistor = persistStore(store)
 
// export default store
 
// // 从 store 本身推断出 `RootState` 和 `AppDispatch` 类型
// export type RootState = ReturnType<typeof store.getState>
// // 推断出类型: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch