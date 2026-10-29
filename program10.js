const readline = require("readline");

/////////////////////////////////////////////////////////////
//
//  Entry point of the application
//
/////////////////////////////////////////////////////////////

function main()
{
    let ret = 0;
    let no = 0;

    const rl = readline.createInterface
    (
        {
            input: process.stdin,
            output: process.stdout
        }
    );

    rl.question("Enter number: ", function(input)
    {
        if (/^[+-]?\d+$/.test(input.trim()))
        {
            no = Number(input);
            ret = 1;
        }

        console.log("Return value is:", ret);

        rl.close();
    });
}

main();