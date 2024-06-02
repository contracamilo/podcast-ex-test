import { useContext } from "react";
import { PodcastContext, PodcastContextProps } from "../context/PageContext";

export const usePodcastContext = (): PodcastContextProps => {
  const context = useContext(PodcastContext);
  if (!context) {
    throw new Error("usePodcast must be used within a PodcastProvider");
  }
  return context;
};
