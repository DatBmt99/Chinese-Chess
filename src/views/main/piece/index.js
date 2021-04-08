import React from "react";
import BaseComponent from "../../base/index";


class ChessPiece extends BaseComponent{
    constructor(props){
        super(props);
    }

    get type(){
        return null;
    }

    render(){

        return (
            <div>

            </div>
        )
    }

    get type(){
        return null;
    }

}
// Tướng
export class King extends ChessPiece{
    get type(){
        return null;
    }
}

// class Xe
export class Rook extends ChessPiece{
    get type(){
        return null;
    }
}

// Mã
export class Knight extends ChessPiece{
    get type(){
        return null;
    }
}

// Tượng
export class Bishop extends ChessPiece{
    get type(){
        return null;
    }
}

// Sĩ
export class Guard extends ChessPiece{
    get type(){
        return null;
    }
}

//Pháo
export class Cannon extends ChessPiece{
    get type(){
        return null;
    }
}

//Tốt
export class Pawn extends ChessPiece{
    get type(){
        return null;
    }
}
