// You can use print statements as follows for debugging, they'll be visible when running tests.
console.log("Logs from your program will appear here!");

function matchPattern(inputLine: string, pattern: string): boolean {
    if (pattern.length === 1) {
        return inputLine.includes(pattern);
    } else {
        throw new Error(`Unhandled pattern: ${pattern}`);
    }
}

const args = Deno.args;
const pattern = args[1];

// Read from stdin
const decoder = new TextDecoder();
const inputLine = decoder.decode(await Deno.readAll(Deno.stdin));

if (args[0] !== "-E") {
    console.log("Expected first argument to be '-E'");
    Deno.exit(1);
}

// Uncomment this block to pass the first stage
// if (matchPattern(inputLine, pattern)) {
//     Deno.exit(0);
// } else {
//     Deno.exit(1);
// }
