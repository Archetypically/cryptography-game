const answersToPoints = [
  null, // The first one is the date processing.
  { // Q2
    "haute-couture": {
      aes: 5,
      blowfish: -1,
      des: -1,
      caesarian: -5,
      bacon: -2,
      rsa: 2,
    },
    "fashion-concious": {
      aes: 4,
      rsa: 2,
    },
    comfort: {
      caesarian: 2,
      railfence: 2,
      bacon: 2,
    },
    independent: {
      blowfish: 2,
      twofish: 2,
      serpent: 2,
    },
    caesar: {
      caesarian: 10,
    },
  },
  { // Q3
    "dependable-looking": {
      aes: 4,
      blowfish: 2,
      twofish: 1,
      des: -1,
      serpent: 4,
      caesarian: -1,
      railfence: -1,
      bacon: -1,
      rc4: -1,
      rsa: 4,
    },
    "fewest-people": {
      twofish: 1,
      serpent: 1,
    },
    "perceived-fastest": {
      aes: 1,
      serpent: 1,
      caesarian: 2,
      railfence: 2,
      rsa: -2,
    },
    "most-attractive": {
      aes: 2,
      twofish: 1,
      serpent: 2,
    },
    "totally-random": {
      bacon: 1,
    },
    caesar: {
      caesarian: 5,
    },
  },
  { // Q4
    truck: {
      aes: 5,
      rsa: 2,
    },
    "sports-car": {
      aes: 0,
      blowfish: 0,
      twofish: 0,
      des: 0,
      serpent: 0,
      caesarian: 0,
      railfence: 0,
      bacon: 0,
      rc4: 0,
      rsa: 0,
    },
    sedan: {
      aes: 3,
      serpent: 3,
      rsa: 5,
    },
    "horse-and-carriage": {
      caesarian: 1,
      bacon: 4,
    },
    chariot: {
      caesarian: 5,
    },
  },
  { // Q5
    "modern-era": {
      aes: 3,
      serpent: 1,
      rsa: 3,
    },
    nineties: {
      aes: 3,
      blowfish: 3,
      twofish: 3,
      des: 0,
      serpent: 3,
      caesarian: 0,
      railfence: 0,
      bacon: 0,
      rc4: 1,
      rsa: 0,
    },
    seventies: {
      des: 3,
      railfence: 1,
      rsa: 3,
    },
    "sixteen-hundreds": {
      bacon: 4,

    },
    "one-hundred-bce": {
      caesarian: 5,
    },
  },
  { // Q5
    "straight-a": {
      aes: 5,
    },
    "a-b": {
      aes: 2,
      twofish: 4,
      serpent: 5,
    },
    "b-c": {
      blowfish: 3,
      des: 1,
    },
    "c-f": {
      des: 3,
      caesarian: 2,
      railfence: 2,
      bacon: 2,
      rc4: 2,

    },
    "j-to-the-c": {
      caesarian: 5,
    },
  },
  { // Q6
    "smart-lock": {
      aes: 3,
      twofish: 2,
      serpent: 3,
      caesarian: -3,
      railfence: -2,
      bacon: -1,
      rsa: 4,
    },
    "lock-and-key-possible": {
      aes: 1,
      twofish: 1,
      serpent: 1,
      rsa: 1,
    },
    "lock-and-key-when-out": {
      blowfish: 1,
      twofish: 1,
    },
    "always-unlocked": {
      blowfish: 1,
      des: 1,
      rc4: 2,

    },
    "always-open": {
      des: 1,
      caesarian: 4,
      railfence: 4,
      bacon: 4,
      rc4: 3,
    },
  }
];

export default answersToPoints;
