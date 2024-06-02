import { Link } from "react-router-dom";
import { formatDuration } from "../../utils/helpers";
import { Episode } from "../../types/podcast";
import { usePodcastContext } from "../../hooks/usePodcastContext";

export const EpisodeGrid = ({ episodes }: { episodes: Episode[] }) => {
  const { podcastId, setEpisode } = usePodcastContext();
  const podcastEpisodes = episodes.slice(1);
  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Date</th>
          <th>Duration</th>
        </tr>
      </thead>
      <tbody>
        {podcastEpisodes.map(episode => {
          return (
            <tr key={episode.trackId}>
              <td className="episode-title">
                <Link
                  to={`/podcast/${podcastId}/episode/${episode.trackId}`}
                  onClick={() => setEpisode(episode)}
                >
                  {episode.trackName}
                </Link>
              </td>
              <td>{new Date(episode.releaseDate).toLocaleDateString()}</td>
              <td>{formatDuration(episode.trackTimeMillis)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
