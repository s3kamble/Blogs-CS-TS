import React, { useEffect, useState } from 'react';
import contentstack from "contentstack"
import{STACK_API_KEY,DELIVERY_TOKEN,ENVIRONMENT} from "../../contentstackConfig"
import Blogs from '../Blogs/Blogs';
import styles from '../Home/Home.module.css'

const Stack = contentstack.Stack(STACK_API_KEY,DELIVERY_TOKEN,ENVIRONMENT);

const Home: React.FC =()=>{
    const [blogs,setBlogs]=useState([])
   
    const Query = Stack.ContentType('travel_blog_tiles').Query();
    useEffect(()=>{
        Query
        .toJSON()
        .find()
        .then(function success(result) {
            setBlogs(result)
        }, 
        function error(err) {
            console.log(err)
        })


    },[])
   

   return(
      <>
        <h2 className={styles.title}>What's on your mind,this time?</h2>
        <div className={styles.tiles}>
            { 
            blogs.map((blog:any)=>{      
                    return (
                        <Blogs key={blog.uid} data={blog}  />  
                    )                            

                })
            }
        </div>
       
      </>

   )
}

export default Home;