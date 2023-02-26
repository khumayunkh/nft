import React from "react";
import style from './Header.module.sass'

function Header(){
    return(
        <>
        <div className={style.container}>
            <div className={style.header}>
                <div className={style.logo}>
                    NFT.Ring
                </div>
                <div className={style.menu}>
                    <a className={style.menu__btn}>Market</a>
                    <a className={style.menu__btn}>Activity</a>
                    <a className={style.menu__btn}>Feature</a>
                    <a className={style.menu__btn}>Community</a>
                </div>
                <button className={style.login_btn}>Login</button>
            </div>
            <div className={style.content}>
                <h1>The Home of
                    Minimalist Buying
                    and Selling
                </h1>
                <p>
                    This NFT website is a website that features 
                    buying and selling, news and blogs. 
                    Designed with a minimalist and informative 
                    concept
                </p>
                <div className={style.content__btn}>
                    <a className={style.explore_btn}>Explore</a>
                    <a className={style.create_btn} >Create</a>
                </div>
            </div>
        </div>
        </>
    )
}

export default Header