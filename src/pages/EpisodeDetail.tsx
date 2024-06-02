import { useEpisodeDetail } from "../hooks/usePodcast";
import { SidePanel } from "../components/SidePanel/SidePanel";
import { truncatedDescription } from "../utils/helpers";
import AudioPlayer from "../components/AudioPlayer/AudioPlayer";
import { usePodcastContext } from "../hooks/usePodcastContext";

export const EpisodeDetail = () => {
  const { podcastId, episodeId } = usePodcastContext();
  const { episodeDetail, error, loading } = useEpisodeDetail(
    podcastId ?? "",
    episodeId ?? "",
  );

  console.log(episodeDetail);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const {
    collectionName,
    artworkUrl600,
    description,
    shortDescription,
    trackName,
    episodeUrl,
  } = episodeDetail || {};

  return (
    <div className="episode-details">
      <div className="episode-details-side-panel">
        {episodeDetail && (
          <SidePanel
            title={collectionName ?? null}
            url={artworkUrl600 ?? null}
            author={collectionName ?? null}
            description={truncatedDescription(shortDescription) ?? null}
          />
        )}
      </div>
      <section className="episode-details-player">
        <h2>{trackName}</h2>
        <p>{description}</p>
        <AudioPlayer src={episodeUrl ?? ""} />
      </section>
    </div>
  );
};
