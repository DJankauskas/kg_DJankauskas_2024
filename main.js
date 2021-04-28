// Reverses the order of the digits (in base 10) of the given integer
// Contract: the input must be an integral number
function reverseInt(int) {
    let reversedInt = 0;
    while (int != 0) {
        reversedInt *= 10;
        reversedInt += int % 10;
        int = Math.floor(int / 10);
    }
    return reversedInt;
}

// Associates the numerical value of each digit to its phonetic representation.
const DIGIT_PNONUNCIATION_MAP = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];

function intToPronunciation(int) {
    let output = '';
    // Label negative integers as negative, then convert their sign for internal processing
    if (int < 0) {
        int *= -1;
        output += 'Negative';
    }

    // The | 0 converts -Infinity to 0, a case which occurs with input 0
    let numDigits = (Math.floor(Math.log(Math.abs(int)) * Math.LOG10E) | 0) + 1;

    // Reverse the integer so that when processing digits from least to greatest
    // significant order, the first digit processed will be the greatest in the original digit
    // Allows appending instead of prepending strings, which is more efficient
    let reversedInt = reverseInt(int);

    // Traverse the reversed int from least to most significant order
    // (or most to least significant order of the original int)
    for (; numDigits != 0; numDigits--) {
        output += DIGIT_PNONUNCIATION_MAP[reversedInt % 10];
        reversedInt = Math.floor(reversedInt / 10);
    }
    return output;
}

function main() {
    // Gets the command line arguments, skipping "node" and the file path
    const args = process.argv.slice(2);
    try {
        const pronouncedInts = args.map(arg => {
            const int = parseInt(arg, 10);
            if (isNaN(int)) {
                throw new Error('Not an integer.');
            }
            return intToPronunciation(int);
        });
        // Output the phonetical results
        console.log(pronouncedInts.join(','));
    } catch (_e) {
        console.error("Usage: node main.js [integer 1] [integer 2] ...");
    }
}

if (require.main === module) {
    main();
}