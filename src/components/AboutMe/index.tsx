import { ScrollArea, ScrollBar } from "@components/ui/scroll-area";
import { Separator } from "@components/ui/separator";
import { AlbumArtwork } from "./album-artwork";
import { listenNowAlbums, madeForYouAlbums } from "./data/albums";

export const AboutMe = () => {
  return (
    <div className="lg:col-span-4 lg:border-l col-span-3">
      <div className="h-full">
        <div className="mt-6 space-y-1">
          <h2 className="text-2xl font-semibold tracking-tight">Projects</h2>
          <p className="text-sm text-muted-foreground">
            Things I'm learning about/experimenting with.
          </p>
        </div>
        <Separator className="my-4" />
        <div className="relative">
          <ScrollArea>
            <div className="flex space-x-4 pb-4">
              {listenNowAlbums.map(album => (
                <AlbumArtwork
                  key={album.title}
                  album={album}
                  className="w-[250px]"
                  aspectRatio="portrait"
                  width={250}
                  height={330}
                />
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>
        <div className="mt-6 space-y-1">
          <h2 className="text-2xl font-semibold tracking-tight">
            Work Experience
          </h2>
          <p className="text-sm text-muted-foreground">
            My career path so far.
          </p>
        </div>
        <Separator className="my-4" />
        <div className="relative">
          <ScrollArea className="">
            <div className="flex space-x-4 pb-4">
              {madeForYouAlbums.map(album => (
                <AlbumArtwork
                  key={album.title}
                  album={album}
                  className="w-[150px]"
                  aspectRatio="square"
                  width={150}
                  height={150}
                />
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>
      </div>
    </div>
  );
};
