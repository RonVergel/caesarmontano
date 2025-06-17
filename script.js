function decodeMessage() {
    const input = document.getElementById('inputText').value;
    const keyInput = document.getElementById('key').value;
    const outputArea = document.getElementById('outputText');
    let output = '';

    // Error handling for empty input
    if (!input.trim()) {
        outputArea.value = 'Please enter an encoded message.';
        return;
    }

    // Error handling for invalid key
    const key = parseInt(keyInput, 10);
    if (isNaN(key) || key < 1 || key > 25) {
        outputArea.value = 'Please enter a valid key (1-25).';
        return;
    }

    // Caesar cipher decoding
    for (let i = 0; i < input.length; i++) {
        let c = input[i];
        if (c.match(/[a-z]/i)) {
            let code = input.charCodeAt(i);
            let base = (code >= 65 && code <= 90) ? 65 : 97;
            c = String.fromCharCode(((code - base - key + 26) % 26) + base);
        }
        output += c;
    }

    outputArea.value = output;
}