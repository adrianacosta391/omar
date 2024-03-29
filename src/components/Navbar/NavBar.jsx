import React from 'react';
import Logo from '../../assets/img/Logo_omar_blanco.svg';
import CartWidget from '../CartWidget/CartWidget';
import { Link, NavLink } from "react-router-dom";



const Navbar = ({initialCart}) => {

    const categories = [
        {name: "Camisetas", id: 0, route: "/category/camisetas"},
        {name: "Tazas", id: 1, route: "/category/tazas"},
        {name: "Cuadernos", id: 2, route: "/category/cuadernos"},
    ]

    return (
        <>
            <nav style={styles.backgroundColorNav}>
                <a href="#index.html" className="brand-logo"><img className='responsive-img' src={Logo} alt="Logo_omar" style={styles.img_logo}/></a>
                <div className="nav-wrapper" style={styles.links}>    
                    {categories.map((category) => <NavLink key={category.id} to={category.route} style={styles.link}>{category.name}</NavLink>)}
                    <Link to="/cart"><CartWidget initialCart={initialCart}/></Link>
                </div>
            </nav>
        </>
        
    )
}

export default Navbar;

const styles = {
    links: {
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "end",
    },
    link: {
        padding: '0rem 2rem',
    },
    backgroundColorNav: {
        background: 'rgba(40, 61, 59, 1)',
    },

    img_logo: {
        height: '3.5rem',
        marginTop: '0.4rem',
        marginLeft: '1.5rem'
    }
}
