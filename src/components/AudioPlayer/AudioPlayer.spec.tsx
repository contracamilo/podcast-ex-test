import { render, screen } from "@testing-library/react";
import AudioPlayer from "./AudioPlayer";

describe("AudioPlayer", () => {
  it("displays a message when the browser does not support the audio element", () => {
    render(<AudioPlayer src="https://example.com/audio.mp3" />);

    const unsupportedMessage = screen.getByText(
      "Your browser does not support the audio element.",
    );
    expect(unsupportedMessage).toBeInTheDocument();
  });
});
