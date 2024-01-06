import type { ManifestOptions } from "vite-plugin-pwa";
import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://2wce.github.io/", // replace this with your deployed domain
  author: "Kudakwashe Mupeni",
  desc: "A safe space for me to share my thoughts and ideas on topics I care about.",
  title: "Thoughts and Ramblings",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 3,
};

export const LOCALE = {
  lang: "en", // html lang code. Set this empty and default will be "en"
  langTag: ["en-EN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/2wce",
    linkTitle: ` ${SITE.author} on Github`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/kudamupeni",
    linkTitle: `${SITE.author} on LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:yourmail@gmail.com",
    linkTitle: `Send an email to ${SITE.author}`,
    active: false,
  },
];

/**
 * Defines the configuration for PWA webmanifest.
 */
export const manifest: Partial<ManifestOptions> = {
  name: "Astro PWA Starter", // Change this to your website's name.
  short_name: "Astro PWA Starter", // Change this to your website's short name.
  description:
    "Astro PWA Starter is an opionated Astro starter for building robust static websites.", // Change this to your websites description.
  theme_color: "#30E130", // Change this to your primary color.
  background_color: "#ffffff", // Change this to your background color.
  display: "minimal-ui",
  icons: [
    {
      src: "/favicons/favicon-192x192.png",
      sizes: "192x192",
      type: "image/png",
    },
    {
      src: "/favicons/favicon-512x512.png",
      sizes: "512x512",
      type: "image/png",
    },
    {
      src: "/favicons/favicon-512x512.png",
      sizes: "512x512",
      type: "image/png",
      purpose: "any maskable",
    },
  ],
};
