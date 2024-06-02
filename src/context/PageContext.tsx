import React, { createContext, useState, ReactNode } from "react";

export interface PodcastContextProps {
  podcastId: string | null;
  episodeId: string | null;
  setPodcastId: (id: string | null) => void;
  setEpisodeId: (id: string | null) => void;
}

export const PodcastContext = createContext<PodcastContextProps | undefined>(
  undefined,
);

export const PodcastProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [podcastId, setPodcastId] = useState<string | null>(null);
  const [episodeId, setEpisodeId] = useState<string | null>(null);

  return (
    <PodcastContext.Provider
      value={{ podcastId, episodeId, setPodcastId, setEpisodeId }}
    >
      {children}
    </PodcastContext.Provider>
  );
};
