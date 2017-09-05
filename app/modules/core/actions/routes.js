import { APP_ROUTES } from "./index";
import { routes } from "../utils/routeDefinitions";

export const setupRoutes = () => {
  return { type: APP_ROUTES, payload: routes };
};