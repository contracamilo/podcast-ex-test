import { FC } from "react";

type SidePanelProps = {
  title: string | null;
  url: string | null;
  author: string | null;
  description: string | null;
};

export const SidePanel: FC<SidePanelProps> = ({
  title,
  url,
  author,
  description,
}) => {
  return (
    <div className="sidebar">
      <div className="sidebar-image">
        <img src={url ?? ""} alt={title ?? ""} />
      </div>
      <div className="sidebar-title">
        <h2>{title}</h2>
        <p>by {author}</p>
      </div>
      <div className="sidebar-body">
        <h4>Description:</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};
