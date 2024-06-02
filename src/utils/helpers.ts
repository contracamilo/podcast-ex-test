export const formatDuration = (millis: number) => {
  if (!millis || isNaN(millis)) {
    return "0:00";
  }

  const minutes = Math.floor(millis / 60000);
  const seconds = ((millis % 60000) / 1000).toFixed(0);
  return `${minutes}:${seconds.padStart(2, "0")}`;
};

export const truncatedDescription = (desc: string | undefined) =>
  desc ? desc.substring(0, 230) + "..." : "No description";
