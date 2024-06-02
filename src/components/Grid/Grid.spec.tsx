import { render, screen } from "@testing-library/react";
import { EpisodeGrid } from "./Grid";
import { Episode } from "../../types/podcast";
import { MemoryRouter as Router } from "react-router-dom";

describe("EpisodeGrid", () => {
  const episodes: Episode[] = [
    {
      wrapperType: "track",
      kind: "podcast",
      collectionId: 1671021737,
      trackId: 1,
      artistName: "The Ringer",
      collectionName: "Bandsplain",
      trackName: "Bandsplain",
      collectionCensoredName: "Bandsplain",
      trackCensoredName: "Bandsplain",
      collectionViewUrl:
        "https://podcasts.apple.com/us/podcast/bandsplain/id1671021737?uo=4",
      feedUrl: "https://feeds.megaphone.fm/bandsplain",
      trackViewUrl:
        "https://podcasts.apple.com/us/podcast/bandsplain/id1671021737?uo=4",
      artworkUrl30:
        "https://is1-ssl.mzstatic.com/image/thumb/Podcasts112/v4/db/9c/59/db9c592b-c410-9446-9f4b-7c97c260172e/mza_2651437534972495734.jpg/30x30bb.jpg",
      artworkUrl60:
        "https://is1-ssl.mzstatic.com/image/thumb/Podcasts112/v4/db/9c/59/db9c592b-c410-9446-9f4b-7c97c260172e/mza_2651437534972495734.jpg/60x60bb.jpg",
      artworkUrl100:
        "https://is1-ssl.mzstatic.com/image/thumb/Podcasts112/v4/db/9c/59/db9c592b-c410-9446-9f4b-7c97c260172e/mza_2651437534972495734.jpg/100x100bb.jpg",
      collectionPrice: 0,
      trackPrice: 0,
      collectionHdPrice: 0,
      releaseDate: "2024-05-30T10:00:00Z",
      collectionExplicitness: "notExplicit",
      trackExplicitness: "notExplicit",
      trackCount: 160,
      trackTimeMillis: 16360,
      country: "USA",
      currency: "USD",
      primaryGenreName: "Music Commentary",
      artworkUrl600:
        "https://is1-ssl.mzstatic.com/image/thumb/Podcasts112/v4/db/9c/59/db9c592b-c410-9446-9f4b-7c97c260172e/mza_2651437534972495734.jpg/600x600bb.jpg",
      genreIds: ["1523", "26", "1310"],
      genres: ["Music Commentary", "Podcasts", "Music"],
      contentAdvisoryRating: "Explicit",
    },
  ];

  it("navigates to the correct episode when clicked", () => {
    render(
      <Router>
        <EpisodeGrid episodes={episodes} />
      </Router>,
    );
    const episodeTitle = screen.getByText("Bandsplain");
    expect(episodeTitle).toBeInTheDocument();
    const episodeDate = screen.getByText("5/30/2024");
    expect(episodeDate).toBeInTheDocument();
    const duration = screen.getByText("0:16");
    expect(duration).toBeInTheDocument();
  });
});
