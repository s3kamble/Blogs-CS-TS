import React from 'react';
import {Link } from "react-router-dom";
import styles from '../Blogs/Blogs.module.css';

interface Blog{
   title:String
   blog:{
        tile_image:{url:string},
        tile_blog:[{
            uid:string
        }]
    }
}
interface blogData {
    data : Array<Blog>,
}

const Blogs: React.FC <blogData> =({data})=>{

   return(
    <>
    {data.map((item : Blog)=>{
        return (
 
                <Link className={styles.links}   key={item.blog.tile_blog[0].uid}   to={`/blog/${item.blog.tile_blog[0].uid}`}>
                        <div className={styles.blogTitle}>
                             {item.title}
                        </div>
                        <img src={item.blog.tile_image.url} alt="Blog images" className={styles.images}></img>
                </Link>

        )
    })}

    </>


   )
}

export default Blogs;