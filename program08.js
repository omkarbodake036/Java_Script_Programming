
/*
Step1: Understand the problem statement
Step2: Write the algorithm
Step3: Decide the language
Step4: Write the program 
Step5: Test the program
*/


/////////////////////////////////////////////////////////////
//  
//  Step1: Understand the problem statement
//          User is going to enter any 2 interger 
//            And we have to perform addition
//
/////////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////////
//  Step2: Write the algorithm
/*      
        START
            Accept first number as No1
            Accept first number as No2
            Create a variable as Ans to store the result
            Perform the addition and store into Ans
            Display the result from Ans
        END
*/         
//
/////////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////////
//  
//  Step3: Decide the language
//          We select C programming
//          
/////////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////////
//  
//  Step4: Write a program 
//          
/////////////////////////////////////////////////////////////

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

/////////////////////////////////////////////////////////////
//
//      Step5: Test the program
//
//      Tested test  cases 
//--------------------------------------
//      Input1      Input2      Output
//--------------------------------------
//      10          11          21
//      11          0           11
//      0           11          11
//      20          -9          11
//      -9          20          11
//      -20         -11         -31
/////////////////////////////////////////////////////////////
