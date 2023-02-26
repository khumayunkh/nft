import React from "react";
import style from './Shoping.module.sass'
import green from './../../assets/green_ring.png'

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
            </div>
        </div>
        </>
    )
}

export default Shoping