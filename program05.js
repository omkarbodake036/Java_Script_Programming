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

    rl.question("Enter first number: ", function(input1) 
    {
        let iNo1 = 0;
        iNo1 = Number(input1);

        rl.question("Enter second number: ", function(input2) 
        {
            let iNo2 = 0;
            iNo2 = Number(input2);

            console.log("Addition:", iNo1 + iNo2);

            rl.close();
        });
    });

}

main();