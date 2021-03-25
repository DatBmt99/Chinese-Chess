import "./index.scss";
import React from "react";

export default class Login extends BaseComponent {
    constructor(props) {
        super(props)
    }

    onSubmitHandler(e) {
        e.preventDefault();
        Global.socket = new WebSocketClient({
            uuid: sessionStorage[StoreKey.uuid] || Global.UUID,
            user: this.refs[`txtNickName`].value,
            success: () => {
                this.props.history.push(Views.hall);
            },
            onerror: (e) => {
                alert("Server connection failed!");
            },
        });
    }

    render() {
        return (     
            <div className="login-form">      
                <div>           
                    <form onSubmit={(e) => {
                        this.onSubmitHandler(e)
                    }}>
                        <table>
                            <tbody>
                            <tr>
                                <td>NickName</td>
                                <td><input ref="txtNickName" type="text" required/></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>
                                    <button type="submit">Enter the game lobby</button>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </form>
                </div>
            </div>
        )
    }
}