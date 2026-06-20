import { useContext } from 'react'
import {ThemeDataContext} from '../context/ThemeContext'

const Navbar2 = () => {
  const [theme] = useContext(ThemeDataContext)
  return (
    <div className='nav2'>
        <h4>Home</h4>
        <h4>About</h4>
        <h4>Contact</h4>
        <h4>Services</h4>
        <h3>{theme} mode</h3>
    </div>
  )
}

export default Navbar2