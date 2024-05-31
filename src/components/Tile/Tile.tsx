import { Podcast } from '../../types/podcast';

export const Tile = ({ podcastInfo }: { podcastInfo: Podcast }) => {
  const title = podcastInfo['im:name'];
  const images = podcastInfo['im:image'];
  const author = podcastInfo['im:artist'];

  const renderImage = () => {
    if (images && images.length > 0) {
      const sortedImages = images.sort(
        (a, b) => parseInt(a.attributes.height) - parseInt(b.attributes.height)
      );
      const imageUrl = sortedImages[sortedImages.length - 1].label;
      return (
        <div className="tile-image">
          <img src={imageUrl} alt={`${title}`} />
        </div>
      );
    }
    return null;
  };

  return (
    <div aria-label="view podcast details button" className="tile">
      <div className='tile-inner-content'>
        {renderImage()}
        <div className='tile-inner-content-body'>
          <h3>{title.label}</h3>
          <span>Author: {author.label}</span>
        </div>
      </div>
    </div>
  );
};
