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
  
  export type { Podcast };
  