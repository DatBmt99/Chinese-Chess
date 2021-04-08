import "./index.scss";
import React from "react";
import BaseComponent from "../base/index";
import { Views } from "../../enums/index";
import { Global } from "../../utils/index";
import StoreKey from "../../utils/StoreKey";

export default class Hall extends BaseComponent {
    constructor(props) {
        super(props);
        super.checkLogin();
        this.state = {
            rooms: this.defaultRooms,
        };
        Global.socket.onmessage = (data) => {
            let action = this.actions[data.action];
            if (typeof action === "function") {
                action.call(this, data);
            }
        };
        this.initRoomsData();
    }

    actions = {
        getAllRooms: (data) => {
            Object.values(data.rooms).forEach((room) => {
                this.updateRooms(room);
            })
        },
        enterRoom: (data) => {
            this.updateRooms(data);
            if (data.uuid === sessionStorage.getItem(StoreKey.uuid)) {
                sessionStorage.setItem(StoreKey.roomId, data.roomId);
                sessionStorage.setItem(StoreKey.color, data.color);
                this.props.history.push(Views.game);
            }
        },
        leaveRoom: (data) => {
            this.removePlayer(data);
        }
    };

    render() {
        return (
            <div className="game-hall">
                {this.getRoomList()}
            </div>
        )
    }
}