import Cart from './Cart';
import { Logo } from './Logo';
import { MainMenuData } from './MainMenuData';
import { OurMenu } from './OurMenu';
export const Menu = () => {
    return (
        <div className="mainMenu" style={{ padding: " 0rem 1rem", marginBottom: "4rem" }}>
            <div className="header" style={{
                padding: '1.5rem 2rem',
                justifyContent: 'space-between',
                display: 'flex'
            }}>
                <Logo />
                <Cart />
            </div>
            <OurMenu newList={MainMenuData} />
        </div>
    )
}