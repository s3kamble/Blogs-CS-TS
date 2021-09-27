import React, { useEffect, useState } from 'react';
import {Link, useParams} from "react-router-dom";
import contentstack from "contentstack";
import styles from '../Blog/Blog.module.css'

const Stack = contentstack.Stack(process.env.REACT_APP_STACK_API_KEY||'',process.env.REACT_APP_DELIVERY_TOKEN||"",process.env.REACT_APP_ENVIRONMENT||'');

interface BlogData {
    id: string;
    title:string,
    tags:[]
    travel_blog_content:string,
    travel_blog_created_at:string,
    travel_image:{url:string},
    travel_author:[{ author_name:string}],
    travel_blog_related_links:[{uid:string,title:string}],
  }

interface blogData {
    data :BlogData
}

const Blog: React.FC =()=>{
    const [blog,setBlog]=useState<blogData>({data:{
        id:"",
        title:" ",
        tags:[],
        travel_blog_content:"",
        travel_blog_created_at:" ",
        travel_image:{url:""},
        travel_author:[{author_name:""}],
        travel_blog_related_links:[{uid:"",title:""}]

    }})

    let params:any=useParams();
    const Query = Stack.ContentType('travel_blog').Entry(params.id).includeReference("travel_author","travel_blog_related_links");

    useEffect(()=>{
        Query.fetch()
        .then(function success(entry) {
            setBlog({data:entry.toJSON()})       
        }, 
        function error(err) {
            console.log(err)
        })

    },[Query])
   

   return(
        <>
        <div className={styles.blogInfo}>
            <img src={blog.data.travel_image.url} alt="Blog" className={styles.blogImage} ></img>

            <div className={styles.blogAbout}>
                <h2 className={styles.blogHeading}> {blog.data.title} </h2>
                <h5 className={styles.blogAuthor}> Created by: {blog.data.travel_author[0].author_name} </h5>
                <p>{new Date(blog.data.travel_blog_created_at).toLocaleDateString("en-US",{   day: 'numeric' , month: 'long', year: 'numeric' })}</p> 
            </div> 

        </div>
       
        <div className={styles.blogContent}> {blog.data.travel_blog_content} </div>

        <div>
            <h2 className={styles.asideLinks}>Read more about.....</h2>

            <div className={styles.asideInfo}>
                {
                    blog.data.travel_blog_related_links.map((link)=>{
                        return(
                            <Link className={styles.asideTitle} key={link.uid} to={`/blog/${link.uid}`}>
                                <div>
                                    {link.title}
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
            
        </div>
       
        </>
   )
}

export default Blog;