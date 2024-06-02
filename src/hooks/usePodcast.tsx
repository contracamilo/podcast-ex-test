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
  const { data, error, loading } = useFetch<{
    results: Episode[];
  }>(
    `https://itunes.apple.com/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=1&sort=recent`,
    `episodeDetail_${podcastId}_${episodeId}`,
    `episodeDetailExpiry_${podcastId}_${episodeId}`,
  );
  const episodeDetail = data?.results.find(
    (item): item is Episode => item.trackId === Number(episodeId),
    null,
  );
  return {
    episodeDetail,
    error,
    loading,
  };
};
