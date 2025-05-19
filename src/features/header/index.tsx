import { Link } from "react-router-dom";

import { ROUTES } from "@/shared/model/routes";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/shared/ui/kit/navigation-menu";

export function AppHeader() {
  return (
    <NavigationMenu className="fixed py-3 bg-amber-100 w-full max-w-none">
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link to={ROUTES.HOME}>
            <NavigationMenuLink>Главная</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link to={ROUTES.ESTIMATES}>
            <NavigationMenuLink>Проекты</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link to={ROUTES.PROJECTS}>
            <NavigationMenuLink>Сметы</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
