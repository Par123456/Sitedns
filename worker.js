function generateIPv6() {
    // Generate 8 blocks of 4 hexadecimal digits
    let ipv6 = [];
    for (let i = 0; i < 8; i++) {
        // Generate a random 16-bit number and convert to hexadecimal
        let block = Math.floor(Math.random() * 0x10000).toString(16);
        // Ensure each block is 4 digits by padding with leading zeros
        while (block.length < 4) {
            block = '0' + block;
        }
        ipv6.push(block);
    }
    // Join the blocks with colons to form the full IPv6 address
    return ipv6.join(':');
}

console.log("Generated IPv6 address: " + generateIPv6());