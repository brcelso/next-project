import type { NextPage } from 'next'
import { useSession, signIn, signOut } from 'next-auth/react'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const { data: session } = useSession()

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        {!session ? (
          <button 
            className={styles.button} 
            onClick={() => signIn('github', { callbackUrl: '/' })} // Redirecionar após login
          >
            Fazer login
          </button>
        ) : (
          <button
            className={`${styles.button} ${styles.active}`}
            onClick={() => signOut()}
          >
            {session.user?.name} - Logout
          </button>
        )}
      </div>
    </div>
  )
}

export default Home
