import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import styles from './index.module.css';

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout title={`${siteConfig.title}`} description="@rsapkf\'s notes.">
      <main style={{ marginTop: '4rem', marginBottom: '1rem' }}>
        <div className='container col'>
          <p className='hero__subtitle'>
            <a
              href='https://www.youtube.com/watch?v=yGzCAV3S1Vc'
              target='_blank'
              rel='noreferrer noopener'
            >
              "I'm writing this down. This is good stuff."
            </a>
          </p>
          <p>
            These are companion notes to my{' '}
            <a href='https://github.com/rsapkf/config/'>dotfiles</a> and{' '}
            <a href='https://github.com/rsapkf/42/'>links</a> where I keep short
            snippets of code, shell scripts, tricks and tips related to common
            Linux utilities/concepts, mathematical topics, mathemagic tricks
            that I've learned, poems that I like, notes from books I've read,
            etc.
          </p>
          <Link to='/linux/'>
            <img
              className={styles.featureImage}
              src='img/undraw_taking_notes.svg'
              alt='Taking notes'
            />
          </Link>
        </div>
      </main>
    </Layout>
  );
}

export default Home;
