import React from "react";
import BaseComponent from "../../base/index";
import {PieceColor, PlayerStatus} from "../../../enums/index";

export default class Players extends BaseComponent {
    static defaultProps = {
        adversary: {},
        self: {},
        gameStart: false,
        active: PieceColor.Red,
    };

    constructor(props) {
        super(props);
        this.state = {};
    }

    get readyButton() {
        return (
            <button type="button" onClick={() => {
            }}>Ready</button>
        )
    }

    render() {
        let {adversary, self, gameStart, active} = this.props;
        return (
            <div className="players">
                <div className="player">
                    <div className="avatar">{adversary.user}</div>
                    {!gameStart && adversary.status === PlayerStatus.Ready ? "Ready" : ""}
                    {gameStart && active === adversary.color ? "Move" : ""}
                </div>
                <div className="player">
                    <div className="avatar">{self.user}</div>
                    {!gameStart ? self.status !== PlayerStatus.Ready ? this.readyButton : "Ready" : ""}
                    {gameStart && active === self.color ? "Move" : ""}
                </div>
            </div>
        )
    }
}