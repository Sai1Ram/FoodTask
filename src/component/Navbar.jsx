import styles from './navBar.module.css';
import { motion } from 'framer-motion';
import Cart from './Cart';
import { Logo } from './Logo';
export const Navbar = () => {
    return (
        <motion.div className={`${styles.navbar} flex `} initial={{ y: -100 }} animate={{ y: 0 }} transition={{ delay: 0.2, bounce: 0.4, stiffness: 200 }}>
            <Logo />
            <Cart />
        </motion.div>
    )
}
