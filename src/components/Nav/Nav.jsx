import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styles from './Nav.module.scss'

function Nav() {
  const [workOpen, setWorkOpen] = useState(false)
  const location = useLocation()

  return (
    <nav className={styles.nav}>
      <Link to="/" className={styles.brand}>KWONJAMIN</Link>

      <div className={styles.item}>
        <button
          className={styles.link}
          onClick={() => setWorkOpen(!workOpen)}
        >
          Work
        </button>
        {workOpen && (
          <ul className={styles.sub}>
            <li><Link to="/work/drawing">Drawing</Link></li>
            <li><Link to="/work/theatre">Theatre</Link></li>
            <li><Link to="/work/logo">Logo Design</Link></li>
            <li><Link to="/work/frontend">Frontend</Link></li>
          </ul>
        )}
      </div>

      <Link to="/contact" className={styles.link}>Contact</Link>
    </nav>
  )
}

export default Nav