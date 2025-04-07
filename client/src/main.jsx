import { StrictMode } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import { createRoot } from "react-dom/client";

import "./index.css";
import App from "./App.jsx";
import React from "react";
import HomePage from "./pages/HomePage.jsx";
import {
  AuthPage,
  CreatePage,
  PostPage,
  ProfilePage,
  SearchPage,
  MainLayout,
} from "./pages/index.js";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/create" element={<CreatePage />} />
            <Route path="/pin/:id" element={<PostPage />} />
            <Route path="/user/:username" element={<ProfilePage />} />
            <Route path="/search" element={<SearchPage />} />
          </Route>
          <Route path="/auth" element={<AuthPage />} />
        </Routes>
        {/* <App /> */}
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>
);
