import type { NavMenuConfig } from "@/types";

export const navMenuConfig: NavMenuConfig = {
  infosNav: [
    {
      title: "Products",
      items: [
        {
          title: "Kyozo Store",
          href: "/products/kyozo",
          description: "Follow me to get the latest updates and news.",
        },
        {
          title: "NocVPN",
          href: "/products/noc",
          description: "You want to star the repository ? Let's get started!",
        },
      ],
    },
  ],
  links: [
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Blog",
      href: "/blog",
    },
  ],
};
