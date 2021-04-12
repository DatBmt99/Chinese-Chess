import React from "react";
import BaseComponent from "../../base/index";
import {PieceType, PieceTypeName, PieceColor} from "../../../enums/index";

let DefaultClass = "chess-piece";

let ColorClassEnum = {
    [PieceColor.Red]: "chess-piece-red",
    [PieceColor.Black]: "chess-piece-black",
};

let PieceImageEnum = {
    [PieceType.King]: require("../../../../static/images/king.png"),
    [PieceType.Rook]: require("../../../../static/images/rook.png"),
    [PieceType.Knight]: require("../../../../static/images/knight.png"),
    [PieceType.Bishop]: require("../../../../static/images/bishop.png"),
    [PieceType.Guard]: require("../../../../static/images/guard.png"),
    [PieceType.Cannon]: require("../../../../static/images/cannon.png"),
    [PieceType.Pawn]: require("../../../../static/images/pawn.png"),
};
class ChessPiece extends BaseComponent{
    static defaultProps = {
        color: PieceColor.Black
    };    
    constructor(props){
        super(props);
        this.state = {
            classList: [DefaultClass, ColorClassEnum[props.color]]
        };
    }

    get type(){
        return null;
    }

    render(){

        return (
            <div className={classList.join(" ")}
            style={{
                backgroundImage: `url(${PieceImageEnum[this.type]}), linear-gradient(currentColor, currentColor)`,
            }}>
           {/*<img src={PieceImageEnum[this.type]} alt={PieceTypeName[this.type]}/>*/}
       </div>
        )
    }

    // get type(){
    //     return null;
    // }

}
// Tướng
export class King extends ChessPiece{
    get type(){
        return PieceType.King;
    }
}

// class Xe
export class Rook extends ChessPiece{
    get type(){
        return PieceType.Rook;
    }
}

// Mã
export class Knight extends ChessPiece{
    get type(){
        return PieceType.Knight;
    }
}

// Tượng
export class Bishop extends ChessPiece{
    get type(){
        return PieceType.Bishop;
    }
}

// Sĩ
export class Guard extends ChessPiece{
    get type(){
        return PieceType.Guard;;
    }
}

//Pháo
export class Cannon extends ChessPiece{
    get type(){
        return PieceType.Cannon;
    }
}

//Tốt
export class Pawn extends ChessPiece{
    get type(){
        return PieceType.Pawn;
    }
}
export {
    King,
    Rook,
    Knight,
    Bishop,
    Guard,
    Cannon,
    Pawn,
}