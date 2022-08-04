import React, { useState } from 'react';
import styles from './header.module.scss';
import { AiOutlineMenu } from 'react-icons/ai';

const Header = () => {
  const [active, setActive] = useState(false);

  return (
    <header className={styles.header}>
      <span className={styles.logo}>
        WORK<span>OUT</span>
      </span>
      <div
        onClick={() => {
          setActive(!active);
        }}
      >
        <AiOutlineMenu size={25} className={styles.menuIcon} />
        {active ? (
          <nav className={styles.nav}>
            <a href=''>Meus treinos</a>
            <a href=''>Novo treino</a>
          </nav>
        ) : (
          ''
        )}
      </div>
    </header>
  );
};

export default Header;
