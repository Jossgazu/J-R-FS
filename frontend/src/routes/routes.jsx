import routesAdmin from "./routes.admin";
import routesClient from "./routes.client";
import { Error404 } from "../pages";
import { BasicLayout } from "../layouts";

// Con los ... solo obtenemos el contenido de la variable = [{},{}]
// SIn ... devuevle array de objetos = [[{}],[{}]]
const routes = [
  ...routesAdmin,
  ...routesClient,
  {
    path:"*",
    layout:BasicLayout,
    component: Error404,
  }
]

export default routes