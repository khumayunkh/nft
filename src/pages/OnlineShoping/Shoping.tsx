import React from "react";
import style from './Shoping.module.sass'
import green from './../../assets/green_ring.png'
import red from './../../assets/red_ring.png'
import purple from './../../assets/purple_ring.png'
import blue from './../../assets/blue_ring.png'

function Shoping(){
    return(
        <>
        <div className={style.container}>
            <div className={style.header}>
                <h3>
                    New Generation of
                    Online Shopping
                </h3>
                <p>
                    This NFT website is a website that features buying 
                    and selling, news and blogs. 
                    Designed with a minimalist and informative concept
                </p>
            </div>
            <div className={style.content}>
                <div className={style.card}>
                    <img src={green}/>
                    <div className={style.card__name}>
                        Green Ring
                    </div>
                </div>
                <div className={style.card}>
                    <img src={red}/>
                    <div className={style.card__name}>
                        Red Ring
                    </div>
                </div>
                <div className={style.card}>
                    <img src={purple}/>
                    <div className={style.card__name}>
                        Purple Ring
                    </div>
                </div>
                <div className={style.card}>
                    <img src={blue}/>
                    <div className={style.card__name}>
                        Blue Ring
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Shoping