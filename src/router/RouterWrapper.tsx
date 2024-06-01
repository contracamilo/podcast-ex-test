import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { PodcastDetail } from "../pages/PodcastDetail";
import { MainLayout } from "../components/Layout/MainLayout";

const RouterWrapper: React.FC = () => {
  return (
    <>
      <Router basename="/">
        <MainLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/podcast/:id" element={<PodcastDetail />} />
            <Route
              path="/podcast/:id/episode/:episodeId"
              element={<PodcastDetail />}
            />
          </Routes>
        </MainLayout>
      </Router>
    </>
  );
};

export default RouterWrapper;
