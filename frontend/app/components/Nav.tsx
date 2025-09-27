import { NavLink } from 'react-router-dom'; // sửa chỗ này
import './nav.css';
import { UserIcon,PhoneIcon,NewspaperIcon,FolderOpenIcon,InformationCircleIcon } from '@heroicons/react/24/solid';

export function Nav() {
  return (
    <nav className="navbar flex items-center justify-between border rounded-2xl">
      <div className=' flex items-center gap-2'> 
        <div className='inline-block'>
          <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active flex items-center gap-2" : "nav-link  flex items-center gap-2"}>
          Home
        </NavLink>
        </div>
        <div className='inline-block'>
          <NavLink to="/about" className={({ isActive }) => isActive ? "nav-link active flex items-center gap-2" : "nav-link  flex items-center gap-2"}>
        <InformationCircleIcon className="size-6 text-[#19183B] " />
          
          About
        </NavLink>
        </div>
        
        <div className='inline-block'>
          <NavLink to="/projects" className={({ isActive }) => isActive ? "nav-link active flex items-center gap-2" : "nav-link  flex items-center gap-2"}>
        <FolderOpenIcon className="size-6 text-[#19183B]" />
          
          Projects
        </NavLink>
        </div>
        
        <div className='inline-block'>
          <NavLink to="/blogs" className={({ isActive }) => isActive ? "nav-link active flex items-center gap-2" : "nav-link  flex items-center gap-2"}>
        <NewspaperIcon className="size-6 text-[#19183B]" />
          
          Blogs
        </NavLink>
        </div>
        
        <div className='inline-block'>
           <NavLink to="/contact" className={({ isActive }) => isActive ? "nav-link active flex items-center gap-2" : "nav-link  flex items-center gap-2"}>
        <PhoneIcon className="size-6 text-[#19183B]" />
          Contact
        </NavLink>
        </div>
       
      </div>
    
    </nav>
  )
}
