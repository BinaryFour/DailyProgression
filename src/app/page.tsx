'use client';

import TaskCard from './components/taskCard';
import styles from './page.module.css';

export default function Home() {
  const labels = ['Shado Benni', 'Weekly Plants'];

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <TaskCard labels={labels} />
      </main>
    </div>
  );
}
