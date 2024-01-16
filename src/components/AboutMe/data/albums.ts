import { getImage } from "astro:assets";
import bunImage from "../../../assets/images/bun.svg";
import k8sImage from "../../../assets/images/kubernets.svg";
import laraImage from "../../../assets/images/laravel.svg";
import tsImage from "../../../assets/images/ts-logo-512.svg";

const ts = await getImage({ src: tsImage });
const bun = await getImage({ src: bunImage });
const k8s = await getImage({ src: k8sImage });
const laravel = await getImage({ src: laraImage });
export interface Experience {
  date?: string;
  title: string;
  topic: string;
  cover: string;
}

export const listenNowAlbums: Experience[] = [
  {
    title: "Typescript",
    topic: "Advanced techniques",
    cover: ts.src,
  },
  {
    title: "Bun",
    topic: "For a custom zero dependency framework",
    cover: bun.src,
  },
  {
    title: "Laravel",
    topic: "Dependency injection",
    cover: laravel.src,
  },
  {
    title: "Kubernetes",
    topic: "Managing containerised applications",
    cover: k8s.src,
  },
];

export const madeForYouAlbums: Experience[] = [
  {
    title: "Software Engineer",
    topic: "Contentful",
    date: "Dec '22 - Present",
    cover: ts.src,
  },
  {
    title: "Engineering Lead",
    topic: "Sovtech",
    date: "May '21 - Dec '22",
    cover: ts.src,
  },
  {
    title: "Snr. Software Engineer",
    topic: "Sovtech",
    date: "Apr '20 - May '21",
    cover: ts.src,
  },
  {
    title: "Software Engineer",
    topic: "Sovtech",
    date: "Jul '18 - Apr '20",
    cover: ts.src,
  },
  {
    title: "Snr. Software Engineer",
    topic: "PlusAfrik",
    date: "Mar '17 - Jan '19",
    cover: laravel.src,
  },
  {
    title: "Software Engineer",
    topic: "PlusAfrik",
    date: "Feb '16 - Mar '17",
    cover: laravel.src,
  },
];
