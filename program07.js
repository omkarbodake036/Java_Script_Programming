
/////////////////////////////////////////////////////////////
//
//  Function Name   :   Addition
//  Input           :   Integer, Integer
//  Output          :   Number
//  Description     :   Performs Addition
//  Date            :   29/10/2026
//  Author          :   Omkar Shivaji Bodake
//
/////////////////////////////////////////////////////////////
function Addition(iNo1, iNo2)
{
    let iAns = 0;

    iAns = iNo1 + iNo2;

    return iAns;
}

/////////////////////////////////////////////////////////////
//
//  Entry point of the application
//
/////////////////////////////////////////////////////////////

function main()
{
    const readline = require("readline");

    const rl = readline.createInterface
    (
        {
            input: process.stdin,
            output: process.stdout
        }
    );

    rl.question("Enter first number:", function(input1)
    {
        let iValue1 = 0;
        iValue1 = Number(input1);

        rl.question("Enter second number:", function(input2)
        {
            let iValue2 = 0;
            iValue2 = Number(input2);

            let iResult = 0;

            iResult = Addition(iValue1, iValue2);

            console.log("Addition is:", iResult);

            rl.close();
        });
    });
}

main();
