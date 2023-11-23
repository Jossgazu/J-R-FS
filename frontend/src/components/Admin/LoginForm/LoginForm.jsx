import { loginApi } from "../../../api/user"
import { useAuth } from "../../../hooks"

import { toast } from "react-toastify"
import { useFormik } from 'formik'
import * as Yup from "yup"

export function LoginForm() {
  // console.log(useAuth);
  const { login } = useAuth()



  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: async (formValue) => {
      try {
        const response = await loginApi(formValue)
        const { access } = response
        // console.log(access);
        login(access)
      } catch (error) {
        // console.log('error');
        // console.log(error);
        toast.error(error.message)
      }

      // console.log("Email enviado");
      // console.log(formValue);
    }
  })

  return (
    <>
      <form className="
                       "
                       onSubmit={formik.handleSubmit}>
        <input className="w-full
                          bg-slate-300
                          border-solid border-2 border-gray-400 border-rounde
                          focus:outline-none focus:border-sky-800
                          focus:shadow-custom
                          focus:shadow-gray-500
                          focus:bg-slate-200
                          my-2
                          rounded
                          text-xl
                          py-1 pl-2 
                          ${formik.errors.email ? 'bg-black' : 'bg-black'}
                          "      
                name="email" 
                type="email" 
                placeholder="Correo Electronico" 
                value={formik.values.email}
                onChange={formik.handleChange}
                autoComplete='true'
                // error={formik.errors.email}
                />
        {formik.errors.email && <span>Email invalido</span>}
        <input className="w-full
                          bg-slate-300
                          border-solid border-2 border-gray-400 border-rounde
                          focus:outline-none focus:border-sky-800
                          focus:shadow-custom
                          focus:shadow-gray-500
                          focus:bg-slate-200
                          my-2
                          rounded
                          text-xl
                          py-1 pl-2 
                          "      
                name="password" 
                type="password" 
                placeholder="Contraseña" 
                value={formik.values.password}
                onChange={formik.handleChange}
                autoComplete='off'
                />
        {formik.errors.password && <span>Constraseña invalida</span>}

        <button className="bg-blue-600
                           text-white
                           w-full
                           py-1.5
                           rounded
                           text-xl
                           my-2
                           hover:bg-blue-700
                            " type="submit" > 
          Iniciar Sesion
        </button>
      </form>
    </>
  )
};


function initialValues() {
  return{
    email: "",
    password: ""
  }
}

function validationSchema() {
  return {
    // con el true le damos color
    // y con el "true" parentesis le damos texto
    email: Yup.string().email("true").required(true),
    password: Yup.string().required(true).min(1)
  }
}