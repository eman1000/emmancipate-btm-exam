import Home from "./Home/container/HomeContainer";
import NotFound from "./NotFound";
import Settings from "./Settings/container/SettingsContainer";

const routes = [
  {
    path: "/home",
    component: Home,
    routeName: "Home"
  },
  {
    path: "/settings",
    component: Settings,
    routeName: "settings"
  },
  {
    path: "*",
    component: NotFound
  }

];

export default routes;
