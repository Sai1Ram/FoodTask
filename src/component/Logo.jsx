import styles from "./logo.module.css";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
export function Logo() {
    const navigate = useNavigate();
    return (
        <motion.div
            className={`${styles.logoImage} flex j-center a-center`}
            onClick={() => navigate("/")}
            whileHover={{ scale: "1.2" }}
            whileTap={{ scale: "0.7" }}
        >
            <img src="/images/logo.png" alt="" />
        </motion.div>
    );
}
