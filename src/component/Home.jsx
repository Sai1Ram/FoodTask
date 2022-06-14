import styles from './home.module.css';
import { OurMenu } from "./OurMenu";
import { Navbar } from './Navbar';
import { menuItemsData } from './data';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
export const Home = () => {
    const navigate = useNavigate()
    return (<div className="main">
        {/* <Cart /> */}
        <div className={`${styles.container}`}>
            <Navbar />
            <motion.div className={`${styles.home} flex f-col`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }}>
                <motion.h1 initial={{ x: '-100vw' }} animate={{ x: 0 }} transition={{ type: 'spring', delay: 0.2, stiffness: 150, bounce: 0.3 }}>Delecious Food for you</motion.h1>
                <p>It’s not true that money can’t buy happiness. I mean, have you tried our dishes? It’s the same thing!</p>
                <button className="flex j-center a-center btn" onClick={() => navigate('/mainMenu')}>Shop Now</button>
            </motion.div>
        </div>
        <div className={`${styles.newDishes} flex  f-col a-center`}>
            <h1>New Dishes for you</h1>
            <p>All of our products are made from scratch using family recipes with only the highest quality ingredients. We bake and sell fresh daily to ensure only the best products are sold to our customers.</p>
            <button className="btn flex j-center a-center" onClick={() => navigate('/mainMenu')}>shop more</button>
        </div>
        <OurMenu newList={menuItemsData} />
    </div>
    )
}