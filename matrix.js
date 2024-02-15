const multiplyMatrices = (matrix1, matrix2) => { 
    if (matrix1[0].length !== matrix2.length){ // check if the number of columns in the first matrix is equal to the number of rows in the second matrix
        console.error("Error. Number of columns in first matrix must match the number of rows in second matrix.");
        return null;
    }

    let result = []; // Declare result as an empty array
    for(let i = 0; i < matrix1.length; i++){
        let row = [];
        for (let j = 0; j < matrix2[0].length; j++){
            let s = 0;
            for (let k = 0; k < matrix1[0].length; k++){
                s += matrix1[i][k] * matrix2[k][j];
            }
            row.push(s);
        }        
        result.push(row);
    }
    return result;
};
