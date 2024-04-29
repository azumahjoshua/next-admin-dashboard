import React from 'react'
import styles from "../../ui/dashboard/products/products.module.css"
import Search from '@/app/ui/dashboard/search/search'
import Link from 'next/link'
const Products = () => {
  return (
    <div className={styles.container}>
    <div className={styles.top}>
      <Search placeholder="Search for a products ..."/>
      <Link href="/dashboard/products/add">
        <button className={styles.addButton}>Add New</button>
      </Link>
    </div>
    <table className={styles.table}>
    <thead>
        <tr>
        <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Created At</td>
            <td>Stock</td>
            <td>Action</td>
        </tr>
      </thead>
    </table>
  </div>
  )
}

export default Products