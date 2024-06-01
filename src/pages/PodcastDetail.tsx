import { useParams, useNavigate } from "react-router-dom";
import { SidePanel } from "../components/SidePanel/SidePanel";
import { usePodcastDetail } from "../hooks/usePodcast";

export const PodcastDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { podcastDetail, error, loading } = usePodcastDetail(id!);

  console.log(podcastDetail);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const { collectionName, artworkUrl600, artistName, episodes } =
    podcastDetail || {};

  const formatDuration = (millis: number) => {
    const minutes = Math.floor(millis / 60000);
    const seconds = ((millis % 60000) / 1000).toFixed(0);
    return `${minutes}:${seconds.padStart(2, "0")}`;
  };

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
        <div>
          {episodes?.length && <span>Episodes {`${episodes.length}`}</span>}
        </div>
        {episodes && (
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Date</th>
                <th>Duration</th>
              </tr>
            </thead>
            <tbody>
              {episodes.map(episode => (
                <tr key={episode.trackId}>
                  <td
                    className="episode-title"
                    onClick={() => navigate(`/episode/${episode.trackId}`)}
                  >
                    {episode.trackName}
                  </td>
                  <td>{new Date(episode.releaseDate).toLocaleDateString()}</td>
                  <td>{formatDuration(episode.trackTimeMillis)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};
