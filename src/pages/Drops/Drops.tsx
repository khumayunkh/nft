import React from "react";
import style from './Drops.module.sass'
import drop from './../../assets/drop.png'
import drop2 from './../../assets/drop2.png'
import ava from './../../assets/ava.png'
import price from './../../assets/price.png'

function Drops(){
    return(
        <>
        <div className={style.container}>
            <div className={style.header}>
                <h3>
                    Exclusive NFT.Ring drops
                </h3>
                <p>
                    This NFT website is a website that features 
                    buying and selling, news and blogs. 
                    Designed with a minimalist and informative concept
                </p>
            </div>
            <div className={style.content}>
                <div className={style.card}>
                    <img className={style.card__drop} src={drop}/>
                    <div className={style.card__name}>
                        <div className={style.card__title}>
                            <h4>Theresa Webb</h4>
                            <div className={style.price}>
                                <img src={price}/>
                                <p>$475.22</p>
                            </div>
                        </div>
                        <div className={style.owner}>
                            <img src={ava}/>
                            <p>Darrell Steward</p>
                        </div>
                    </div>
                </div>
                <div className={style.card}>
                    <img className={style.card__drop} src={drop2}/>
                    <div className={style.card__name}>
                        <div className={style.card__title}>
                            <h4>Theresa Webb</h4>
                            <div className={style.price}>
                                <img src={price}/>
                                <p>$475.22</p>
                            </div>
                        </div>
                        <div className={style.owner}>
                            <img src={ava}/>
                            <p>Darrell Steward</p>
                        </div>
                    </div>
                </div>
                <div className={style.card}>
                    <img className={style.card__drop}  src={drop}/>
                    <div className={style.card__name}>
                        <div className={style.card__title}>
                            <h4>Theresa Webb</h4>
                            <div className={style.price}>
                                <img src={price}/>
                                <p>$475.22</p>
                            </div>
                        </div>
                        <div className={style.owner}>
                            <img src={ava}/>
                            <p>Darrell Steward</p>
                        </div>
                    </div>
                </div>
                <div className={style.card}>
                    <img className={style.card__drop}  src={drop2}/>
                    <div className={style.card__name}>
                        <div className={style.card__title}>
                            <h4>Theresa Webb</h4>
                            <div className={style.price}>
                                <img src={price}/>
                                <p>$475.22</p>
                            </div>
                        </div>
                        <div className={style.owner}>
                            <img src={ava}/>
                            <p>Darrell Steward</p>
                        </div>
                    </div>
                </div>
                <div className={style.card}>
                    <img className={style.card__drop}  src={drop}/>
                    <div className={style.card__name}>
                        <div className={style.card__title}>
                            <h4>Theresa Webb</h4>
                            <div className={style.price}>
                                <img src={price}/>
                                <p>$475.22</p>
                            </div>
                        </div>
                        <div className={style.owner}>
                            <img src={ava}/>
                            <p>Darrell Steward</p>
                        </div>
                    </div>
                </div>
                <div className={style.card}>
                    <img className={style.card__drop}  src={drop2}/>
                    <div className={style.card__name}>
                        <div className={style.card__title}>
                            <h4>Theresa Webb</h4>
                            <div className={style.price}>
                                <img src={price}/>
                                <p>$475.22</p>
                            </div>
                        </div>
                        <div className={style.owner}>
                            <img src={ava}/>
                            <p>Darrell Steward</p>
                        </div>
                    </div>
                </div>
                <div className={style.card}>
                    <img className={style.card__drop}  src={drop}/>
                    <div className={style.card__name}>
                        <div className={style.card__title}>
                            <h4>Theresa Webb</h4>
                            <div className={style.price}>
                                <img src={price}/>
                                <p>$475.22</p>
                            </div>
                        </div>
                        <div className={style.owner}>
                            <img src={ava}/>
                            <p>Darrell Steward</p>
                        </div>
                    </div>
                </div>
                <div className={style.card}>
                    <img className={style.card__drop}  src={drop2}/>
                    <div className={style.card__name}>
                        <div className={style.card__title}>
                            <h4>Theresa Webb</h4>
                            <div className={style.price}>
                                <img src={price}/>
                                <p>$475.22</p>
                            </div>
                        </div>
                        <div className={style.owner}>
                            <img src={ava}/>
                            <p>Darrell Steward</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Drops