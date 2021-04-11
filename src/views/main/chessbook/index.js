import React from "react";
import BaseComponent from "../../base/index";
import { PieceColor, PieceTypeZH, ChineseNumeral, BoardSize } from "../../../enums/index";

export default class ChessBook extends BaseComponent {
    static defaultProps = {
        data: [],
        perspective: PieceColor.Red,
    };

    constructor(props) {
        super(props);
        this.state = {};
    }

    getBookList() {
        let {data} = this.props;
        let list = [];
        for (let i = 0; i < data.length; i += 2) {
            list.push((
                <li key={i}>
                    <div className="player-red">{this.getStepName(data[i])}</div>
                    <div className="player-black">{this.getStepName(data[i + 1])}</div>
                </li>
            ))
        }
        return <ol>{list}</ol>
    }

}