"use client"
import React from 'react'
import Image from "next/image";
import styles from "./page.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
    <div>©2023 Mohamed Ramy</div>
    <div className={styles.social}>
      <Image src="/1.png" width={15} height={15} className={styles.icon} alt="Mohamed Ramy Facebook Account" />
      <Image src="/2.png" width={15} height={15} className={styles.icon} alt="Mohamed Ramy" />
      <Image src="/3.png" width={15} height={15} className={styles.icon} alt="Mohamed Ramy" />
      <Image src="/4.png" width={15} height={15} className={styles.icon} alt="Mohamed Ramy" />
    </div>
  </div>
  )
}

export default Footer