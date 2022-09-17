import { useState } from "react";
import Cell from "./Cell"
import { CellBox } from "./Cell";
import Button from '../UI/Button';


let matrix: CellBox[][] = new Array;
for (let i = 0; i < 30; i++) {
    matrix[i] = []
    for (let j = 0; j < 30; j++) {
        matrix[i][j] = new CellBox(i, j, false)
    }
}



const Board = () => {

    const [updatedMatrix, setMatrix] = useState<CellBox[][]>(matrix);

    const setAlive = (x: number, y: number) => {
        console.log('isAlive before click: ', updatedMatrix[x][y].isAlive)

        // matrix[x][y].isAlive = true
        let newArr = [...matrix]
        newArr[x][y].isAlive = !newArr[x][y].isAlive;
        setMatrix(newArr);
        //setMatrix(matrix)  
        console.log('isAlive after click: ', updatedMatrix[x][y].isAlive)

    }



    var i = 1;
    function myLoop() {
        setTimeout(function () {
            let newarr = [...matrix]

            let aliveCells: Array<[number, number]> = []


            let count: number = 0
            for (let j = 0; j < 30; j++) {
                for (let k = 0; k < 30; k++) {
                    for (let l = -1; l <= 1; l++) {
                        for (let m = -1; m <= 1; m++) {
                            if (j + l < 0 || k + m < 0 || j + l > 29 || k + m > 29) {
                                continue
                            }
                            else {

                                if (newarr[j + l][k + m].isAlive === true && ((j + l !== j) || (k + m !== k))) {
                                    ++count;
                                }
                            }
                        }
                    }

                    if ((count === 2 || count === 3) && newarr[j][k].isAlive === true) {
                        aliveCells = [[j, k], ...aliveCells]
                    }

                    else if (count === 3 && newarr[j][k].isAlive === false) {
                        //newarr[j][k].isAlive = true;
                        aliveCells = [[j, k], ...aliveCells]
                    }
                    count = 0
                }
            }
            for (let j = 0; j < 30; j++) {
                for (let k = 0; k < 30; k++) {
                    newarr[j][k].isAlive = false
                }
            }
            for (let i = 0; i < aliveCells.length; i++) {

                newarr[aliveCells[i][0]][aliveCells[i][1]].isAlive = true;
            }
            
            setMatrix(newarr)

            i++;
            if (i < 1000) {
                myLoop();
            }
        }, 300)
    }

    return (
        <>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(30, 40px)', gridTemplateRows: 'repeat(30,40px)', justifyContent: 'center' }}>
                {
                    updatedMatrix.map((i, index) => i.map((j, indexJ) => <Cell key = {index + indexJ} row={index} col={indexJ} status={updatedMatrix[index][indexJ].isAlive} makeAlive={setAlive} />))
                }
            </div>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Button onClick={myLoop}>Start</Button>
            </div>

        </>
    )
}

export default Board