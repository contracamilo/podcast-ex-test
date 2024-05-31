// src/hooks/usePodcasts.ts
import { Podcast } from '../types/podcast';
import useFetch from './useFetchApi';



interface PodcastDetail {
  collectionName: string;
  description: string;
  // Define other properties based on the API response
}

export const useTopPodcasts = (requestedNumber: number) => {
  const { data, error, loading } = useFetch<{ feed: { entry: Podcast[] } }>(
    `https://itunes.apple.com/us/rss/toppodcasts/limit=${requestedNumber}/genre=1310/json`
  );

  return {
    podcasts: data?.feed.entry || [],
    error,
    loading,
  };
};

export const usePodcastDetail = (podcastId: string) => {
  const { data, error, loading } = useFetch<{ results: PodcastDetail[] }>(
    `https://itunes.apple.com/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=20`
  );

  return {
    podcastDetail: data?.results[0] || null,
    error,
    loading,
  };
};
