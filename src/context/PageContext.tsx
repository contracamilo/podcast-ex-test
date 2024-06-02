import React, { createContext, useState, ReactNode } from "react";
import { Episode } from "../types/podcast";

export interface PodcastContextProps {
  podcastId: string | null;
  episode: Episode | null;
  setPodcastId: (id: string | null) => void;
  setEpisode: (episode: Episode | null) => void;
}

export const PodcastContext = createContext<PodcastContextProps | undefined>(
  undefined,
);

export const PodcastProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [podcastId, setPodcastId] = useState<string | null>(null);
  const [episode, setEpisode] = useState<Episode | null>(null);

  return (
    <PodcastContext.Provider
      value={{ podcastId, episode, setPodcastId, setEpisode }}
    >
      {children}
    </PodcastContext.Provider>
  );
};
