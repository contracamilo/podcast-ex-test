import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { EpisodeDetail, PodcastDetail, Home } from "../pages";
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
              element={<EpisodeDetail />}
            />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </MainLayout>
      </Router>
    </>
  );
};

export default RouterWrapper;
