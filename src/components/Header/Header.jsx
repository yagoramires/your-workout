import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './header.module.scss';
import { AiOutlineMenu } from 'react-icons/ai';

const Header = () => {
  const [active, setActive] = useState(false);

  return (
    <header className={styles.header}>
      <Link to='/' className={styles.logo}>
        WORK<span>OUT</span>
      </Link>
      <div
        onClick={() => {
          setActive(!active);
        }}
      >
        <AiOutlineMenu size={25} className={styles.menuIcon} />
        {active ? (
          <nav className={styles.nav}>
            <Link to='/'>Meus treinos</Link>
            <Link to='/'>Novo treino</Link>
          </nav>
        ) : (
          ''
        )}
      </div>
    </header>
  );
};

export default Header;
