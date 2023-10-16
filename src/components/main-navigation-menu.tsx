import * as React from "react";

import { cn } from "@/lib/utils";
import { Icons } from "@/icons";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Badge } from "@/components/ui/badge";
import { navMenuConfig } from "@/config/nav-menu";
import type { MenuItem } from "@/types";

const infos = navMenuConfig.infosNav[0];

export function MainNavigationMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>{infos.title}</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <a
                  className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                  href="/"
                >
                  <div className="mb-2 mt-3 text-lg font-medium">
                    <svg
                      class="h-6 w-auto"
                      width="108px"
                      height="28px"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 108 28"
                    >
                      <path
                        id="NOCSI"
                        d="M67.776 27.422 C60.314 27.422 55.289 22.983 55.289 14.032 55.289 5.117 60.314 0.567 67.776 0.567 L75.938 0.567 75.938 7.78 69.178 7.78 C65.188 7.78 63.01 9.889 63.01 14.032 63.01 18.138 65.188 20.209 69.178 20.209 L75.865 20.209 75.938 20.209 86.172 20.209 C86.948 20.209 87.5 19.654 87.5 18.989 87.5 18.508 87.316 18.174 86.762 17.657 L81.295 13.106 C79.005 11.145 78.045 9.407 78.045 7.002 78.045 3.673 80.667 0.567 84.657 0.567 L99.323 0.567 99.323 7.817 89.016 7.817 C88.203 7.817 87.686 8.409 87.686 9.037 87.686 9.555 87.907 9.963 88.535 10.481 L93.856 14.918 C95.924 16.657 97.143 18.691 97.143 21.022 97.143 24.388 94.519 27.422 90.53 27.422 L75.938 27.422 75.865 27.422 67.776 27.422 Z M100.209 27.422 L100.209 0.567 107.893 0.567 107.893 27.422 100.209 27.422 Z M40.291 0.012 C32.57 0.012 26.29 6.263 26.29 14.031 26.29 21.688 32.57 27.977 40.291 27.977 48.012 27.977 54.254 21.688 54.254 14.031 54.254 6.263 48.012 0.012 40.291 0.012 Z M40.291 7.41 C43.948 7.41 46.866 10.332 46.866 14.031 46.866 17.693 43.948 20.616 40.291 20.616 36.634 20.616 33.642 17.693 33.642 14.031 33.642 10.332 36.634 7.41 40.291 7.41 Z M24.85 0.567 L17.425 0.567 17.425 14.956 7.081 0.567 0.026 0.567 0.026 27.422 7.414 27.422 7.414 12.774 17.757 27.422 24.85 27.422 Z"
                        fill="#ffffff"
                        fill-opacity="1"
                        stroe="none"
                      />
                    </svg>
                  </div>
                  <p className="text-sm leading-tight text-muted-foreground">
                    Modern security through framework of codifying security
                    intents.
                  </p>
                </a>
              </li>

              {infos.items?.map((info) => (
                <ListItem key={info.title} {...info} />
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          {navMenuConfig.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={navigationMenuTriggerStyle()}
            >
              {link.title}
            </a>
          ))}
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem: React.FC<MenuItem> = ({
  title,
  href,
  description,
  launched,
  disabled,
  external,
}) => {
  const target = external ? "_blank" : undefined;

  return (
    <li>
      <a
        href={disabled ? undefined : href}
        target={target}
        className={cn(
          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
          disabled
            ? "text-muted-foreground hover:bg-transparent hover:text-muted-foreground"
            : ""
        )}
      >
        <div className="text-sm font-medium leading-none">
          <span className="mr-2">{title}</span>
          {disabled ? (
            <Badge
              variant="secondary"
              radius="sm"
              className="h-5 px-1.5 text-xs font-medium"
            >
              SOON
            </Badge>
          ) : null}
          {launched ? (
            <Badge radius="sm" className="h-5 px-1.5 text-xs font-medium">
              NEW
            </Badge>
          ) : null}
        </div>
        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
          {description}
        </p>
      </a>
    </li>
  );
};
ListItem.displayName = "ListItem";
