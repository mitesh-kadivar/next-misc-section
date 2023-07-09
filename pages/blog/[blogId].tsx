import Head from 'next/head'
import React from 'react'

export default function Blog({title, description}: any) {
  return (
    <>
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
        </Head>
        <div className='red-text'>Blog Page</div>
    </>
  )
}

export async function getServerSideProps() {
    return {
        props: {
            title: 'Article Title',
            description: 'Blog Article Description'
        },
    }
}
