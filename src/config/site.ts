import { USER } from "@/features/profile/data/user";
import type { NavItem } from "@/types/nav";

export const SITE_INFO = {
  name: USER.displayName,
  url: process.env.APP_URL || "https://manavv.vercel.app",
  ogImage: USER.ogImage,
  description: USER.bio,
  keywords: USER.keywords,
};

export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#09090b",
};

export const MAIN_NAV: NavItem[] = [
  {
    title: "Portfolio",
    href: "/",
  },
  {
    title: "Products",
    href: "/products/graphidraw",
  },
  // {
  //   title: "Components",
  //   href: "/components",
  // },
];

export const GITHUB_USERNAME = "manavsingh345";
export const SOURCE_CODE_GITHUB_REPO = "manavsingh345/Portfolio-V1";
export const SOURCE_CODE_GITHUB_URL =
  "https://github.com/manavsingh345/Portfolio-V1";

export const UTM_PARAMS = {
  utm_source: "https://manavv.vercel.app",
  utm_medium: "portfolio_website",
  utm_campaign: "referral",
};
