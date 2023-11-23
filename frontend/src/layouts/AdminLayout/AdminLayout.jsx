import { LoginAdmin } from "../../pages/Admin"
import { useAuth } from "../../hooks"
import { SideMenu, TopMenu } from "../../components/Admin"
export function AdminLayout(props) {
  const { children } = props
  const { auth } = useAuth()
  
  if(!auth) return <LoginAdmin />
  else {
    return(
      <div className="flex
                      
                      ">
        
        <div className="">
          <SideMenu>
            {children}
          </SideMenu>
        </div>
        <div className="w-screen">  
          <TopMenu />
        </div>
        
      </div>
    )
  }
};
