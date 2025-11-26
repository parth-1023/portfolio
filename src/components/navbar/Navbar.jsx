import Sidebar from "../sidebar/Sidebar"
import "./navbar.scss"
import {motion} from "framer-motion"
const Navbar = () => {
  return (
    <div className="navbar">
    {/*Sidebar*/}
    <Sidebar/>
    <div className="wrapper">
        <motion.span initial={{opacity:0, scale:0.5}} animate={{opacity:1, scale:1}} transition={{oduration:0.5}}>Parth Shroff</motion.span>
        <div className="social">
        <a href="#"><img src="/youtube.png" alt="" /></a>
        <a href="#"><img src="/facebook.png" alt="" /></a>
        </div>
    </div>
    </div>
  )
}

export default Navbar
