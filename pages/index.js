import styles from '../styles/Home.module.css'

export default function Home({name}) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://docs.aws.amazon.com/ecs/index.html">{ name }!</a>
        </h1>
      </main>
    </div>
  )
}

export async function getServerSideProps() {
    try {
      const rest = await fetch('api:8080/hello')
      const data = await rest.json()
      if (!data){
        return {
          props: {"name": "ECS"}
        }
      } else {
        return {
          props: data
        }
      }
    } catch (e) {
      return {
        props: {"name": "ECS"}
      }
    }
}
