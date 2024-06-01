import { Podcast } from "../types/podcast";
import useFetch from "./useFetchApi";

interface PodcastDetail {
  collectionName: string;
  description: string;
}

export const useTopPodcasts = (requestedNumber: number) => {
  const { data, error, loading } = useFetch<{ feed: { entry: Podcast[] } }>(
    `https://itunes.apple.com/us/rss/toppodcasts/limit=${requestedNumber}/genre=1310/json`,
    "topPodcasts",
    "topPodcastsExpiry",
  );

  return {
    podcasts: data?.feed.entry || [],
    error,
    loading,
  };
};

export const usePodcastDetail = (podcastId: string) => {
  const { data, error, loading } = useFetch<{ results: PodcastDetail[] }>(
    `https://itunes.apple.com/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=20`,
    `podcastDetail_${podcastId}`,
    `podcastDetailExpiry_${podcastId}`,
  );

  return {
    podcastDetail: data?.results[0] || null,
    error,
    loading,
  };
};
