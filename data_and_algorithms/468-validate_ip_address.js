// Leet code # 468
// Capstone W1D1

// Input: string representing IP address
// Output: string { 'IPv4', 'IPv6', 'Neither' }

// IPv4:
// [0-255].[0-255].[0-255].[0-255]
// - Four groups of integers 0-255 with '.' delimiter
// - No leading zeroes

// IPv6
// 0000:ffff:0:A:a:1111:1a4d:9999
// - 8 groups of 4 digit 16-bit hex numbers
// - ':' delimited
// - Leading zeroes okay, but not extra zeroes (groups > 4 digits)
// - Case insensitive
// - No empty groups

function validIPAddress(string) {
  let delimiter = checkForDelimiter(string.slice(0, 5));

  if (delimiter === '.') {
    return checkIPv4(string) ? "IPv4" : "Neither";
  } else if (delimiter === ':') {
    return checkIPv6(string) ? "IPv6" : "Neither";
  } else {
    return 'Neither';
  }
}

function checkForDelimiter(string) {
  if (string.match(/\./)) {
    return '.'
  } else if (string.match(/\:/)) {
    return ':'
  }
}

function checkIPv4(string) {
  let groups = string.split('.');
  if (groups.length !== 4) {
    return false;
  }  

  for (let i = 0; i < groups.length; i++) {
    if (groups[i][0] == '0' && groups[i].length > 1) {
     return false; 
    }

    if (groups[i].length === 0) {
      return false;
    }

    if (groups[i].match(/[^0-9]/)) {
      return false;
    }

    let numberGroup = Number(groups[i]);

    if (numberGroup < 0 || numberGroup > 255) {
      return false;
    }
  }

  return true;
}

function checkIPv6(string) {
  let groups = string.split(':');
  if (groups.length !== 8) {
    return false;
  }

  for (let i = 0; i < groups.length; i++) {
    let numberGroups = groups[i];
    if (numberGroups.length < 1 || numberGroups.length > 4) {
      return false;
    }

    if (numberGroups.match(/[^0-9A-F]/i)) {
      return false;
    }
  }

  return true;
}

console.log(validIPAddress('0.0.0.0') === 'IPv4')
console.log(validIPAddress('255.255.255.255') === 'IPv4')
console.log(validIPAddress('256.256.256.256') === 'Neither')

console.log(validIPAddress('2001:0db8:85a3:0000:0000:8a2e:0370:7334') === 'IPv6')
console.log(validIPAddress('1:1:1:1:1:1:1:1') === 'IPv6')
console.log(validIPAddress('0001:1:1:1:1:1:1:1') === 'IPv6')
console.log(validIPAddress('1:1:1:1:1:1:1:1001') === 'IPv6')
console.log(validIPAddress('000a:1:1:1:1:1:1:1') === 'IPv6') // Letters in hex
console.log(validIPAddress('000a:f:1:1:1:1:1:1') === 'IPv6') // Letters in hex up to f
console.log(validIPAddress('000A:1:1:1:1:1:1:1') === '') // Case insensitive
console.log(validIPAddress('a:a:a:a:a:a:a:a') === 'IPv6')
console.log(validIPAddress('ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff') === 'IPv6') // IPv6 up to 8 groups, 16 bit hex numbers

console.log(validIPAddress('') === 'Neither') // Empty string
console.log(validIPAddress('01.1.1.1') === 'Neither') // No leading zeroes
console.log(validIPAddress('1.1.1.01') === 'Neither') // No leading zeroes
console.log(validIPAddress('255.255.255') === 'Neither') // Must have 4 groups
console.log(validIPAddress('255.255.255.255.255') === 'Neither') // Must have 4 groups

console.log(validIPAddress('255.255:255.255') === 'Neither') // Can't have mix of colons and dots
console.log(validIPAddress('255,255,255,255') === 'Neither') // Can't have non colon or dot delimiters
console.log(validIPAddress('255,255,255,255,255,255,255,255') === 'Neither') // Can't have non colon or dot delimiters

console.log(validIPAddress('1:1:1:1:1:1:1') === 'Neither') // Can't have <8 groups
console.log(validIPAddress('1:1:1:1:1:1:1:1:1') === 'Neither') // Can't have >8 groups
console.log(validIPAddress('1:1:1:1:1::1:1') === 'Neither') // No empty groups, even if 0s
console.log(validIPAddress('a:b:c:d:e:f:g:h') === 'Neither') // Hex is only up to f
console.log(validIPAddress('a:b:c:d::e:f:g:h') === 'Neither') // Can't have double colons even with 8 groups
console.log(validIPAddress('00001:1:1:1:1:1:1') === 'Neither') // Leading zeroes okay, but not more than 4 digits per group
