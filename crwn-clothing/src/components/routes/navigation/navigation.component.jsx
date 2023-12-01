import { Fragment , useContext } from 'react';
import { Outlet , Link } from 'react-router-dom'
import { ReactComponent as Crwnlogo } from '../../../assets/crown.svg';
import './navigation.styles.scss';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import { UserContext } from '../../../contexts/user.context';

import CartIcon from '../../cart-icon/cart-icon.component';
import CartDropdown from '../../cart-dropdown/cart-dropdown.component';

import { CartContext } from '../../../contexts/cart.context';

const Navigation = () => {
    const {currentUser , setCurrentUser} = useContext(UserContext);

    const signOutHandler = async () => {
        await signOutUser()
        setCurrentUser(null);
    }

    const {isCartOpen} = useContext(CartContext);

    return(
        <Fragment>
            <div className="navigation">
                <Link className='logo-container' to='/'>
                    <Crwnlogo className='logo'/>
                </Link>

                <div className="nav-links-container">
                    <Link className='nav-link' to='/shop'>
                        SHOP
                    </Link>
                    {currentUser? (
                        <span className='nav-link' onClick={signOutHandler}>SIGN OUT</span>
                    ): (
                        <Link className='nav-link' to='/auth'>
                        SIGN IN
                    </Link>
                    )

                    }
                    <CartIcon />
                </div>
                {isCartOpen && <CartDropdown />}
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigation;