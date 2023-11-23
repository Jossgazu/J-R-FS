import { AdminLayout } from "../layouts"
import { HomeAdmin } from "../pages/Admin"

// import { Error404 } from "../pages"

const routesAdmin = [
  {
    path: "/admin",
    layout: AdminLayout,
    component: HomeAdmin,
  },
  // {
  //   path:"*",
  //   layout: AdminLayout,
  //   component: Error404
  // }
]

export default routesAdmin  