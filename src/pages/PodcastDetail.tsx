import { useParams } from "react-router-dom";
import { SidePanel } from "../components/SidePanel/SidePanel";
import { usePodcastDetail } from "../hooks/usePodcast";
import { EpisodeGrid } from "../components/Grid/Grid";
import { Episode } from "../types/podcast";
import { useEffect } from "react";
import { usePodcastContext } from "../hooks/usePodcastContext";
import { truncatedDescription } from "../utils/helpers";
import { RouteLoadingIndicator } from "../components/Loader/Loader";

export const PodcastDetail = () => {
  const { id: podcastId } = useParams<{ id: string }>();
  const { podcastDetail, error, loading } = usePodcastDetail(podcastId!);
  const { setPodcastId } = usePodcastContext();
  const { collectionName, artworkUrl600, description, artistName, episodes } =
    podcastDetail || {};

  useEffect(() => {
    setPodcastId(podcastId || null);
  }, [podcastId, setPodcastId]);

  if (loading) {
    return (
      <div className="initial-layout">
        <RouteLoadingIndicator />
      </div>
    );
  }
  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="podcast-details">
      <div className="podcast-details-side-panel">
        {podcastDetail && (
          <SidePanel
            title={collectionName ?? null}
            url={artworkUrl600 ?? null}
            author={artistName ?? null}
            description={truncatedDescription(description) ?? null}
          />
        )}
      </div>
      <div className="podcast-details-grid-container">
        <div className="podcast-details-counter">
          {episodes?.length && <h2>Episodes: {`${episodes.length}`}</h2>}
        </div>
        <div className="podcast-details-grid">
          {episodes && (
            <EpisodeGrid episodes={episodes as unknown as Episode[]} />
          )}
        </div>
      </div>
    </div>
  );
};
