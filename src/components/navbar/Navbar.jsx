import "./navbar.scss"

const Navbar = () => {
  return (
    <div className="navbar">
    {/*Sidebar*/}
    <div className="wrapper">
        <span>Parth Shroff</span>
        <div className="social">
        <a href="#"><img src="/youtube.png" alt="" /></a>
        <a href="#"><img src="/facebook.png" alt="" /></a>
        </div>
    </div>
    </div>
  )
}

export default Navbar
