import React from "react";
import style from './SignUp.module.sass'

function SignUp(){
    return(
        <>
        <div className={style.container}>
            <div className={style.content}>
                <h1>
                    Stay in the loop    
                </h1>
                <p>
                    Join our mailing list to stay in the loop 
                    with our newest feature releases, NFT drops, 
                    and tips and tricks for navigating NFT.Ring
                </p>
                <div className={style.input}>
                    <input placeholder="Your Email Address"/>
                    <button className={style.input__button}>Register</button>    
                </div>    
            </div>    
        </div>   
        </>
    )
}

export default SignUp