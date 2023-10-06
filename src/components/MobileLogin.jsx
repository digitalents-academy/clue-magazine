import React from "react"

export default function MobileLogin() {
    return (
        <div className="wrapper">

            <div className="Logo">
                <img src="/src/assets/icons/club-logo.svg" />
            </div>
            <div className="forms">
                <div className="form_login">
                    <form action="#">
                        <div className="inputs">
                            <input className="input-field" type="email" placeholder="YOUR EMAIL" required>
                            </input>
                            <input className="input-field" type="password" placeholder="PASSWORD" required>
                            </input>
                        </div>

                    </form>
                </div>
                <div className="mobile_login_btn">
                    <button id="login-mobile">LOGIN</button>
                    <button id="sign-mobile">SIGN UP</button>
                </div>
            </div>


        </div>

    )
}