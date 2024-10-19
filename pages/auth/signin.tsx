import { signIn } from 'next-auth/react'
import styles from '../../styles/Home.module.css' // Ajuste o caminho conforme necessário

const SignInPage = () => {
  const handleLogin = () => {
    signIn('github', { callbackUrl: '/' }) // Redireciona para a página inicial após o login
    //signIn('github', { callbackUrl: 'https://celsogpt.vercel.app' });
  }

  return (
    <div className={styles.container}>
      <h1>Faça Login</h1>
      <button className={styles.button} onClick={handleLogin}>
        Login com GitHub
      </button>
    </div>
  )
}

export default SignInPage
