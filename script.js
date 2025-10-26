1   function decodeMessage() {
    const input = document.getElementById('inputText').value;
    const keyInput = document.getElementById('key').value;
    const outputArea = document.getElementById('outputText');
    let output = '';

    if (!input.trim()) {
        outputArea.value = 'Please enter an encoded message.';
        return;
    }

    let key = parseInt(keyInput, 10);
    if (isNaN(key)) {
        outputArea.value = 'Please enter a valid key.';
        return;
    }

    // Normalize key to 0..25
    key = ((key % 26) + 26) % 26;

    // Caesar cipher decoding:
    // To reverse a left shift (-key) used during encoding, we add the key here.
    for (let i = 0; i < input.length; i++) {
        let c = input[i];
        if (/[a-z]/i.test(c)) {
            const code = input.charCodeAt(i);
            const base = (code >= 65 && code <= 90) ? 65 : 97;
            c = String.fromCharCode(((code - base + key) % 26) + base);
        }
        output += c;
    }

    outputArea.value = output;
}