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
    <div>
      <h2>{title}</h2>
      <img src={url ?? ""} alt={title ?? ""}/>
      <p>by {author}</p>
      <p>Description: {description}</p>
    </div>
  );
};
