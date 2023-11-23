import { LoginForm } from "../../../components/Admin"

export function LoginAdmin() {
  return(
    <>
      <div className=" 
                        h-[100vh] 
                        w-full 
                        flex 
                        items-center
                        justify-center
                        bg-gradient-to-r from-[#2a2a72] to-[#009ffd] ">
        <div className="bg-white 
                        p-12
                        rounded-2xl
                        w-[500px]
                        shadow-md
                        shadow-slate-900
                         ">
          <h1 className="font-bold
                         text-4xl
                         flex
                         justify-center
                         mb-12
                          ">
            Entrar al panel</h1>

          <LoginForm />
        </div>
      </div>
      
      {/* <p>Estamos en login admin</p> */}
    </>
  )
};
