import React from "react";
import BaseComponent from "../../base/index";
import {PieceColor, PlayerStatus} from "../../../enums/index";
import {Global} from "../../../utils";
import StoreKey from "../../../utils/StoreKey";

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
                this.readyClickHandler()
            }}>Ready</button>
        )
    }
}