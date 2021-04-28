function intsToPronunciations(ints) {
    // TODO: implement
    return "";
}

function main() {
    // gets the command line arguments, skipping "node" and the file path
    const args = process.argv.slice(2);
    try {
        console.log(intsToPronunciations(args))
    } catch(_e) {
        // integer parsing or processing failed
        console.error("Usage: node main.js [integer 1] [integer 2] ...")
    }
}

if (require.main === module) {
    main();
}