import { Icon } from '@iconify/react';
import { useAuth } from '../../../hooks';

export function TopMenu() {
  const { auth, logout } = useAuth()

  // console.log(auth);
  const renderName = () => {
    if (auth.me?.first_name && auth.me?.last_name) {
      return `${auth.me.first_name}  ${auth.me.last_name}`
    }
    return auth.me?.email

    
  }

  return (
    <div className="bg-slate-300 flex
                    shadow-md
                    ring-inset
                    ring-1
                    ring-gray-500
                    w-full
                    ">
      <div className='w-60
                      ring-inset
                      ring-1
                      ring-gray-500
                      bg-slate-400
                      '>
        <p className='flex items-center'>ICard Admin</p>
      </div>
      <div className="ml-auto flex">
        <p className='flex items-center
                      px-3
                      ring-inset
                      ring-1
                      ring-gray-500
                      '
        // >Hola, {auth.me.username} </p>
        >Hola, {renderName()} </p>
        <button  className=''
                  onClick={logout}>
          <Icon className='flex
                           items-center
                           h-full
                           mx-2.5
                           
                          '    
            icon="material-symbols:logout-rounded" />
        </button>
      </div>
    </div>
  )
}
