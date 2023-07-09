import React from 'react'
import styles from '@/components/Layout.module.css'

export default function index({ data }: any) {
  return (
    <>
    <h2 className={styles.content}>{data}</h2>
    <p>{process.env.NEXT_PUBLIC_ACESS_KEY}</p>
    </>
  )
}

export async function getStaticProps(content: any) {
    console.log("Running getStaticProps")
    console.log(process.env.DB_USER);
    return {
        props: {
            data: content.preview ? 'List of Draft articles' : 'List of published news articles'
        },
    }
}