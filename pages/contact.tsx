import Footer from '@/components/Footer'
import React from 'react'
import styles from '@/components/Layout.module.css'

export default function Contact() {
  return (
    <h2 className={styles.content}>Contact Page</h2>
  )
}

Contact.getLayout = function PageLayout(page: any) {
    return (
        <>
        {page}
        <Footer/>
        </>
    )
}
