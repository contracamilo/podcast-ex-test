import { Tile } from "../components/Tile/Tile";
import { useTopPodcasts } from "../hooks/usePodcast";
import { Podcast } from "../types/podcast";


export const Home = () => {
    const { podcasts, error, loading } = useTopPodcasts(100);
    console.log(podcasts);
  
  return (
    <div className="podcast-grid">
        {podcasts.map((podcast: Podcast, idx: number) => {
            return(<Tile key={`podcast-${idx}`} podcastInfo={podcast}/>)
        }) }
    </div>
  )
}
