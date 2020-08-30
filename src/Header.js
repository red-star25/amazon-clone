import React from 'react';
import "./Header.css"
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';

function Header() {
    const [{basket}]=useStateValue();
    return (
            <nav className="header">
                {/* Amazon Logo */}
                <Link to="/">
                <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG25.png" alt=""/>
                </Link>
                {/* Search Bar */}
                <div className="header__search">
                <input type="text" className = "header__searchInput"/>
                <SearchIcon className="header__searchIcon"/>
                </div>
                
                {/* 3 Links */}
                <div className="header__nav">
                    <Link to="/login" className="header__link">
                    <div className="header__option">
                    <span className="header__optionLineOne">Hello Dhruv</span>
                    <span className="header__optionLineTwo">Sign In</span>
                    </div>
                    </Link>
                    <Link to="/" className="header__link">
                    <div className="header__option">
                    <span className="header__optionLineOne">Returns</span>
                    <span className="header__optionLineTwo">& Orders</span>
                    </div>
                    </Link>
                    <Link to="/" className="header__link">
                    <div className="header__option">
                    <span className="header__optionLineOne">Your</span>
                    <span className="header__optionLineTwo">Prime</span>
                    </div>
                    </Link>
                    <Link to="/checkout" className="header__link">
                        <div className="header__optionBasket">
                            <ShoppingBasketIcon/>
                            <span className="header__optionLineTwo header__basketCount">{basket.length}</span>
                        </div>
                    </Link>
                </div>
            </nav>
    )
}

export default Header
