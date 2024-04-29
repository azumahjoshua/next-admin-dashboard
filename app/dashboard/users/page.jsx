import React from 'react'
import styles from "../../ui/dashboard/user/user.module.css"
import Search from '@/app/ui/dashboard/search/search'
import Link from 'next/link'
const Users = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a user ..."/>
        <Link href="/dashboard/users/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
      <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Created At</td>
            <td>Role</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
      </table>
    </div>
  )
}

export default Users