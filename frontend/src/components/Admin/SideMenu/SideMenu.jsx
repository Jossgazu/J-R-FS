import { Icon } from '@iconify/react';

export function SideMenu(props) {
  const { children } = props
  return(
    <div className="">
      <h1>Hola side</h1>
      <MenuLeft/>
      <div>
        {children}
      </div>
    </div>
  )
};


function MenuLeft(props) {  
  const {} = props

  return (
    <div className='flex
                    h-screen
                    bg-red-300
                    '>
      <div>
        <Icon icon="material-symbols:cottage-rounded" /> Pedidos
      </div>
    </div>
  )
}