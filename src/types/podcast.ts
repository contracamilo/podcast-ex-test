interface Label {
  label: string;
}

interface ImageAttributes {
  height: string;
}

interface Image {
  label: string;
  attributes: ImageAttributes;
}

interface PriceAttributes {
  amount: string;
  currency: string;
}

interface Price {
  label: string;
  attributes: PriceAttributes;
}

interface ContentTypeAttributes {
  term: string;
  label: string;
}

interface LinkAttributes {
  rel: string;
  type: string;
  href: string;
}

interface IdAttributes {
  "im:id": string;
}

interface ArtistAttributes {
  href: string;
}

interface CategoryAttributes {
  "im:id": string;
  term: string;
  scheme: string;
  label: string;
}

interface ReleaseDateAttributes {
  label: string;
}

interface Podcast {
  "im:name": Label;
  "im:image": Image[];
  summary: Label;
  "im:price": Price;
  "im:contentType": { attributes: ContentTypeAttributes };
  rights: Label;
  title: Label;
  link: { attributes: LinkAttributes };
  id: { label: string; attributes: IdAttributes };
  "im:artist": { label: string; attributes: ArtistAttributes };
  category: { attributes: CategoryAttributes };
  "im:releaseDate": { label: string; attributes: ReleaseDateAttributes };
}

export interface Genre {
  name: string;
  id: string;
}

interface Episode {
  collectionViewUrl: string;
  trackTimeMillis: number;
  previewUrl: string;
  artworkUrl600: string;
  episodeUrl: string;
  feedUrl: string;
  closedCaptioning: string;
  collectionId: number;
  collectionName: string;
  artworkUrl60: string;
  artistViewUrl: string;
  contentAdvisoryRating: string;
  trackViewUrl: string;
  releaseDate: string;
  genres: Genre[];
  episodeGuid: string;
  description: string;
  shortDescription: string;
  artworkUrl160: string;
  episodeFileExtension: string;
  episodeContentType: string;
  country: string;
  trackId: number;
  trackName: string;
  artistIds: number[];
  kind: string;
  wrapperType: string;
}

interface PodcastDetail {
  wrapperType: string;
  kind: string;
  artistId: number;
  collectionId: number;
  trackId: number;
  artistName: string;
  collectionName: string | null;
  description: string;
  trackName: string;
  collectionCensoredName: string;
  trackCensoredName: string;
  artistViewUrl: string;
  collectionViewUrl: string;
  feedUrl: string;
  trackViewUrl: string;
  artworkUrl30: string;
  artworkUrl60: string;
  artworkUrl100: string;
  collectionPrice: number;
  trackPrice: number;
  collectionHdPrice: number;
  releaseDate: string;
  collectionExplicitness: string;
  trackExplicitness: string;
  trackCount: number;
  trackTimeMillis: number;
  country: string;
  currency: string;
  primaryGenreName: string;
  contentAdvisoryRating: string;
  artworkUrl600: string;
  genreIds: string[];
  genres: genre[];
  episodes: Episode[];
}

export type { Podcast, PodcastDetail, Episode };
