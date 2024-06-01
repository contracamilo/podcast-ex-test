import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export const Header = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, [location]);

  const RouteLoadingIndicator: React.FC = () => (
    <div className="loading-indicator">Loading...</div>
  );

  return (
    <header data-testid="header-component" className="header-container">
      <Link to="/">
        <h1>Podcaster</h1>
      </Link>
      {loading && <RouteLoadingIndicator />}
    </header>
  );
};
