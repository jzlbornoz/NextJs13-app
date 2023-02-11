import styles from '../styles/components/Loading.module.css';

const LoadingComponent = () => {
    return (
        <section className={styles.Loading}>
            <span className={styles.LoadingLoader}></span>
        </section>
    )
}

export { LoadingComponent }