import { PodcastProvider } from "./context/PageContext";
import RouterWrapper from "./router/RouterWrapper";

function App() {
  return (
    <PodcastProvider>
      <RouterWrapper />
    </PodcastProvider>
  );
}

export default App;
