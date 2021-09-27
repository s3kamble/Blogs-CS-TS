import  React,{useState,useEffect} from "react";
import contentstack from "contentstack";
import styles from "../Footer/Footer.module.css"
import { Link } from "react-router-dom";

// const Stack = contentstack.Stack(STACK_API_KEY,DELIVERY_TOKEN,ENVIRONMENT);
const Stack = contentstack.Stack(process.env.REACT_APP_STACK_API_KEY||"",process.env.REACT_APP_DELIVERY_TOKEN||"",process.env.REACT_APP_ENVIRONMENT||"");


interface FooterData{
    uid:string,
    logo:{url:string},
    privacy_policy:{title:string , href:string},
    footer_links:[{title:string ,href:string}]
}

interface footerData {
    data :FooterData
}

const Footer : React.FC = () =>{
    const [footer,setFooter]=useState<footerData>({data:{
        uid:"",
        logo:{url : ""},
        privacy_policy:{title:"",href:""},
        footer_links:[{title:"",href:""}],
    }})
   
    const Query = Stack.ContentType("footer").Entry(process.env.REACT_APP_FOOTER_ENTRY || "");

    useEffect(()=>{
        Query.fetch()
        .then(function success(entry) {
            setFooter({data:entry.toJSON()})
        }, function error(err) {
            console.log(err)
        })
    })
   

    return (
        <div className={styles.footerBar}>
            <div className={styles.logo}>
                <Link to="/">
                    <img  className={styles.logoImg} src={footer.data.logo.url} alt="Logo" />            
                </Link>
            </div>
            
            <a className={styles.title} href={footer.data.privacy_policy.href}>{footer.data.privacy_policy.title}</a>
           
           <div className={styles.footerlinks}>
               {
                    footer.data.footer_links.map((link)=>{
                        return(
                            <a  className={styles.links} key={link.title} href={link.href}>{link.title}</a>

                        )
                    })
                }
           </div>
        </div>
    )
}

export default Footer;