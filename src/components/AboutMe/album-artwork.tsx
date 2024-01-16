import { cn } from "@utils/helper";

import type { Experience } from "./data/albums";

interface AlbumArtworkProps extends React.HTMLAttributes<HTMLDivElement> {
  album: Experience;
  aspectRatio?: "portrait" | "square";
  width?: number;
  height?: number;
}

export function AlbumArtwork({
  album,
  aspectRatio = "portrait",
  width,
  height,
  className,
  ...props
}: Readonly<AlbumArtworkProps>) {
  return (
    <div className={cn("space-y-3", className)} {...props}>
      <div className="overflow-hidden rounded-md">
        <img
          src={album.cover}
          alt={album.title}
          width={width}
          height={height}
          className={cn(
            "h-auto w-auto object-cover transition-all hover:scale-105",
            aspectRatio === "portrait" ? "aspect-[3/4]" : "aspect-square"
          )}
        />
      </div>
      <div className="space-y-1 text-sm">
        <h3 className="font-medium leading-none">{album.title}</h3>
        <p className="text-xs text-muted-foreground">{album.topic}</p>
        <p className="whitespace-pre text-xs font-bold italic">{album.date}</p>
      </div>
    </div>
  );
}
