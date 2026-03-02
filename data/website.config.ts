export interface SocialMediaLink {
  name: string;
  url: string;
}

export interface PersonalInfo {
  name: string;
  profilePicture?: string;
  role: string;
  university: string;
  universityWebsite: string;
  socialMedia: SocialMediaLink[];
}

export interface WebsiteInfo {
  title: string;
  description: string;
}

export interface NavigationItem {
  name: string;
  route: string;
}

export interface HomepageSection {
  AboutSection?: boolean;
  NewsSection?: boolean;
  SelectedPublicationsSection?: boolean;
  ProjectSection?: boolean;
}

export type FontStyle = "sans" | "serif" | "mono";

export const personalInfo: PersonalInfo = {
  name: "Yuxi Liu",
  // profilePicture: "/profile.jpg", //optional
  role: "Master Student",
  university: "HNU",
  universityWebsite: "https://www.hnu.edu.cn/",
  socialMedia: [
    { name: "Email", url: "mailto:yuxi_liu@hnu.edu.cn" },
    {
      name: "GitHub",
      url: "https://github.com/Yuxi104",
    },
    { name: "Google Scholar", url: "https://scholar.google.com/citations?user=7w0_uFYAAAAJ&hl=en" },
  ],
};

export const websiteInfo: WebsiteInfo = {
  title: personalInfo.name,
  description: "HCI researcher",
};

export const navigations: NavigationItem[] = [
  { name: "Projects", route: "/projects" },
  { name: "Publications", route: "/publications" },
];

export const homepageSection: HomepageSection = {
  AboutSection: true,
  NewsSection: true,
  SelectedPublicationsSection: true,
  // ProjectSection: true,
};

export const fontStyle: FontStyle = "sans"; // "sans" | "serif" | "mono"
