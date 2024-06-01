import { render, screen } from "@testing-library/react";
import { Tile } from "./Tile";
import { Podcast } from "../../types/podcast";

describe("Tile", () => {
  const podcastInfo = {
    "im:name": { label: "Podcast Name" },
    "im:image": [
      { label: "Image 1", attributes: { height: "100" } },
      { label: "Image 2", attributes: { height: "200" } },
    ],
    summary: { label: "Podcast summary" },
    "im:price": {
      label: "9.99",
      attributes: { amount: "9.99", currency: "USD" },
    },
    "im:contentType": { attributes: { term: "audio", label: "Audio" } },
    rights: { label: "All rights reserved" },
    title: { label: "Podcast Title" },
    link: {
      attributes: {
        rel: "self",
        type: "text/html",
        href: "https://example.com",
      },
    },
    id: { label: "123456", attributes: { "im:id": "123456" } },
    "im:artist": {
      label: "Podcast Artist",
      attributes: { href: "https://artist.com" },
    },
    category: {
      attributes: {
        "im:id": "789",
        term: "Technology",
        scheme: "https://example.com",
      },
    },
    "im:releaseDate": {
      label: "2022-01-01",
      attributes: { label: "2022-01-01" },
    },
  } as Podcast;

  it("renders the podcast title and author", () => {
    render(<Tile podcastInfo={podcastInfo} />);
    expect(screen.getByText("Podcast Name")).toBeInTheDocument();
    expect(screen.getByText("Author: Podcast Artist")).toBeInTheDocument();
  });

  it("does not render an image if no images are provided", () => {
    const podcastInfoWithoutImages = { ...podcastInfo, "im:image": [] };
    render(<Tile podcastInfo={podcastInfoWithoutImages} />);
    const image = screen.queryByAltText("Podcast Title");
    expect(image).not.toBeInTheDocument();
  });
});
