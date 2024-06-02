import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { RouteLoadingIndicator } from "../Loader/Loader";

export const Header = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 600);
  }, [location]);

  return (
    <>
      <header data-testid="header-component" className="header-container">
        <Link to="/">
          <h1>Podcaster</h1>
        </Link>
        {loading && <RouteLoadingIndicator />}
      </header>
      {location.pathname !== "/" && (
        <nav className="header-breadcrumb">
          <span aria-label="Back button" onClick={() => navigate(-1)}>
            {"<"} Back
          </span>
        </nav>
      )}
    </>
  );
};
