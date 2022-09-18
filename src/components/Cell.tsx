import './Cell.css'
class CellBox {
    xValue: number;
    yValue: number;
    isAlive: boolean; 
    constructor(x: number, y: number, z: boolean) {
        this.xValue = x;
        this.yValue = y; 
        this.isAlive = z;
    }
}


const Cell: React.FC<{ row: number, col: number, status: boolean; makeAlive:(x:number, y:number)=> void}> = (props) => {

    const setAlive = () => {
        props.makeAlive(props.row, props.col)
    }  
      

    return (
        <>
        <button className={`cell ${props.status ? 'alive' : ''}`} onClick={setAlive}></button>
        </> 
        )
}

export { CellBox }
export default Cell

