'use client';

import { Button } from '@mui/material';
import styles from './page.module.css';
import { useState } from 'react';
import MexicanTyphoon from './mexicanTyphoon/mexicanTyphoon';

export default function Home() {
  const [showTyphoon, setShowTyphoon] = useState(false);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {showTyphoon ? <MexicanTyphoon /> : null}

        <Button variant='contained' onClick={() => setShowTyphoon(true)}>
          Mexican Typhoon
        </Button>

        <Button variant='contained' onClick={() => setShowTyphoon(false)}>
          Stop the Mexican Typhoon
        </Button>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
