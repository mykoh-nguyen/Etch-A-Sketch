


const container = document.getElementById('container');
const newTable = document.createElement('table');
newTable.setAttribute('id','newTable')

const newGrid =(gridSize)=>{
    
    for(var x = 0; x<gridSize;x++){
        let newTr = document.createElement('tr');

            for(i = 0; i< gridSize;i++){
                let newTd = document.createElement('td');
                newTd.addEventListener('mouseover',()=>{
                    newTd.style.background="orange";
                })
                newTr.appendChild(newTd);
            }
        newTable.appendChild(newTr);
        }
container.appendChild(newTable);

}
const reset = ()=>{
    while(newTable.rows.length!=0){
        newTable.deleteRow(0);
    }
    let gridSize = prompt("How many squares would you like?")
    if(gridSize > 65){
        while(gridSize > 65){
            gridSize=prompt('Please select a number smaller than 64')
    }}
    newGrid(gridSize);
}
newGrid(16);


