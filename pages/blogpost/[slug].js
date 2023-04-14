import React, { useEffect, useState } from 'react'
import {useRouter} from 'next/router'
import styles from '../../styles/BlogPost.module.css'

const Slug = () => {
    const router = useRouter()
    const {slug} = router.query

    const [blog, setBlog] = useState()

    useEffect(() => {

      fetch(`/api/getblog?slug=${slug}`).then((a) => {
        return a.json();
      }).then((parsed) => {
        setBlog(parsed)
  
      })
      
    }, [router.isReady])
    
  return (
    <div className={styles.container}>
      <main className={styles.main}>
      <h1>{blog?.title}</h1>
      <hr />
      <div>
        {blog?.content}
      </div>
      </main>
    </div>
  )
}

export default Slug