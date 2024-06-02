import { useNavigate } from "react-router-dom";
import { formatDuration } from "../../utils/helpers";
import { Episode } from "../../types/podcast";

export const EpisodeGrid = ({
  episodes,
  podcastId,
}: {
  episodes: Episode[];
  podcastId: string;
}) => {
  const navigate = useNavigate();
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
        {episodes.map(episode => (
          <tr key={episode.trackId}>
            <td
              className="episode-title"
              onClick={() =>
                navigate(`/podcast/${podcastId}/episode/${episode.trackId}`)
              }
            >
              {episode.trackName}
            </td>
            <td>{new Date(episode.releaseDate).toLocaleDateString()}</td>
            <td>{formatDuration(episode.trackTimeMillis)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
