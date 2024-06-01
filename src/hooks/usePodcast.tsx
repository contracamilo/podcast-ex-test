import { Episode, Podcast, PodcastDetail } from "../types/podcast";
import useFetch from "./useFetchApi";


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
  const { data, error, loading } = useFetch<{
    results: PodcastDetail[];
  }>(
    `https://itunes.apple.com/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=20`,
    `podcastDetail_${podcastId}`,
    `podcastDetailExpiry_${podcastId}`,
  );

  const podcastDetail =
    data?.results.find(
      (item): item is PodcastDetail => "collectionName" in item,
    ) || null;
  const episodes =
    data?.results.filter((item: PodcastDetail) => "trackName" in item) || [];

  return {
    podcastDetail: podcastDetail ? { ...podcastDetail, episodes } : null,
    error,
    loading,
  };
};

export const useEpisodeDetail = (podcastId: string, episodeId: string) => {
  const { data, error, loading } = useFetch<{ results: Episode[] }>(
    `https://itunes.apple.com/lookup?id=${episodeId}&media=podcast&entity=podcastEpisode`,
    `episodeDetail_${episodeId}`,
    `episodeDetailExpiry_${episodeId}`,
  );

  return {
    episodeDetail:
      data?.results.find(episode => episode?.id === episodeId) || null,
    error,
    loading,
  };
};
