import "./index.scss";
import React from "react";
import BaseComponent from "../base/index";
import classNames from "classnames";
import {PieceColor, PlayerStatus, Views} from "../../enums/index";
import {Global} from "../../utils/index";
import StoreKey from "../../utils/StoreKey";

let EmptySeatClass = "icomoon icon-user icon-empty";

export default class Hall extends BaseComponent {
    constructor(props) {
        super(props);
        super.checkLogin();
        this.state = {
            rooms: this.defaultRooms,
        };
        Global.socket.onmessage = (data) => {
            let action = this.actions[data.action];
            if (typeof action === "function"){
                action.call(this, data);
            }
        };
        this.initRoomsData();
    }
}