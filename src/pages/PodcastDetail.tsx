import { useParams } from "react-router-dom";
import { SidePanel } from "../components/SidePanel/SidePanel";
import { usePodcastDetail } from "../hooks/usePodcast";
import { EpisodeGrid } from "../components/Grid/Grid";

export const PodcastDetail = () => {
  const { id: podcastId } = useParams<{ id: string }>();
  const { podcastDetail, error, loading } = usePodcastDetail(podcastId!);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const { collectionName, artworkUrl600, artistName, episodes } =
    podcastDetail || {};

  return (
    <div className="podcast-details">
      <div className="podcast-details-side-panel">
        {podcastDetail && (
          <SidePanel
            title={collectionName ?? null}
            url={artworkUrl600 ?? null}
            author={artistName ?? null}
            description={artistName ?? null}
          />
        )}
      </div>
      <div className="podcast-details-grid-container">
        <div className="podcast-details-counter">
          {episodes?.length && <h2>Episodes: {`${episodes.length}`}</h2>}
        </div>
        <div className="podcast-details-grid">
          {episodes && (
            <EpisodeGrid episodes={episodes} podcastId={podcastId ?? ""} />
          )}
        </div>
      </div>
    </div>
  );
};
