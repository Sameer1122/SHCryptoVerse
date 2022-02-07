import { configureStore } from "@reduxjs/toolkit";
import { cryptoApi } from "../Services/crpytoApi";
import { cryptoNewsApi } from "../Services/cryptoNews";
export default configureStore({
  reducer: {
    [cryptoApi.reducerPath]: cryptoApi.reducer,
    [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
  },
});
