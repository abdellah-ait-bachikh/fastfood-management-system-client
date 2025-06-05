import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import IconComponent from './IconComponent'
import classNames from 'classnames'
import { useSelector } from 'react-redux'
import { TAppInitialState } from '../lib/types'
import { navLinks } from '../lib/const'

const Navbar = () => {
  const { asideOpen } = useSelector((state: { app: TAppInitialState }) => state.app)
  useEffect(() => {
  }, [])
  return (
    <nav className="w-full flex flex-col mt-6 flex-1 overflow-hidden overflow-y-auto gap-2">
      {navLinks.map((item) => (
        <NavLink
          key={item.id}
          to={item.href}
          className={classNames(
            'block hover:bg-teal-100 hover:shadow-lg  dark:hover:bg-slate-900/50  bg-gray-200 dark:bg-slate-900/40  rounded-md w-full px-2.5 py-1.5 transition-all ease-in-out',
            {
              'md:rounded-2xl': !asideOpen,
              'md:rounded-lg': asideOpen
            }
          )}
        >
          <div className="flex items-center justify-start gap-2.5">
            <IconComponent Icon={item.icon} className="text-2xl flex-shrink-0" />
            <span className="text-lg font-semibold">{item.label}</span>
          </div>
        </NavLink>
      ))}
    </nav>
  )
}

export default Navbar
