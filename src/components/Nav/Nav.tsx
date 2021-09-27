import  React,{useState,useEffect} from "react";
import contentstack from "contentstack"
import styles from "../Nav/Nav.module.css"
import { Link } from "react-router-dom";

const Stack = contentstack.Stack(process.env.REACT_APP_STACK_API_KEY||'',process.env.REACT_APP_DELIVERY_TOKEN||"",process.env.REACT_APP_ENVIRONMENT||"");

interface NavLinks{
    link: [{
        title: string,
        href: string,
        uuid: string,
    }]
}
interface NavBarInterface{
    title: string,
    nav_links: NavLinks,
    logo:{url:string},
}
const NavBar: React.FC = () => {
    const [navLinks, setNavLinks] = useState<NavBarInterface>({title: '',logo:{url:""}, nav_links: {link: [{title: '', href: '', uuid: ''}]}})
    const [navToggle, setNavToggle] = useState(false);
    function navToggleFunc(){
        setNavToggle(!navToggle);
    }
    useEffect(() => {
        const Query = Stack.ContentType('header').Entry(process.env.REACT_APP_HEADER_ENTRY || " ");
        Query
            .toJSON()
            .fetch()
            .then((result) => {
                setNavLinks(result)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])
    return(
        <div className={styles.navBar}>
            <Link to='/' className={styles.logo}>
                <img src={navLinks.logo.url} alt="Logo" className={styles.logoImg}/>
            </Link>
            
            <h1 className={styles.title}>{navLinks.title}</h1>
          
            <div className={styles.navLinks}>
                <ul className={navToggle? `${styles.navList} ${styles.active}` :styles.navList}>
                {navLinks.nav_links.link.map((link) => {
                    return <li className={styles.navItem} key={link.uuid}> 
                        <Link to={link.href}>{link.title}</Link>
                    </li>
                })}
                </ul>
                <div onClick={navToggleFunc} className={styles.hamburger}>
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                </div>
            </div>
            
        </div>
    )
}

export default NavBar;
