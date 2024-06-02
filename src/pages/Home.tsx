import { useMemo, useState } from "react";
import { Tile } from "../components/Tile/Tile";
import { useTopPodcasts } from "../hooks/usePodcast";
import { Podcast } from "../types/podcast";
import { SearchField } from "../components/SearchField/SearchField";
import { Link } from "react-router-dom";
import { RouteLoadingIndicator } from "../components/Loader/Loader";

export const Home = () => {
  const { podcasts, error, loading } = useTopPodcasts(100);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPodcasts = useMemo(() => {
    return podcasts.filter((podcast: Podcast) =>
      podcast.title.label?.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  }, [podcasts, searchTerm]);

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
    <div className="home">
      <div className="home-filter">
        <SearchField
          type={"text"}
          placeholder={"Filter podcasts by title"}
          searchTerm={searchTerm}
          action={e => setSearchTerm(e.target.value)}
          label={`${filteredPodcasts.length}`}
        />
      </div>
      <div className="home-content">
        <div className="podcast-grid">
          {filteredPodcasts.map((podcast: Podcast, idx: number) => {
            return (
              <div key={`podcast-${idx}`}>
                <Link to={`/podcast/${podcast.id.attributes["im:id"]}`}>
                  <Tile podcastInfo={podcast} />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
