const possibleResults = {
  aes: {
    img: "https://i.imgur.com/LcZwI5V.png",
    displayName: "Advanced Encryption Standard",
    secondaryNames: ["AES", "Rijndael"],
    details: [
        <p>Developed by Belgian cryptographers <u>Vincent Rijmen</u> and <u>Joan Daemen.</u></p>,
        "Adopted widely by the US Government and the National Institute of Standards and Technology (NIST) in 2001.",
        "A subset of the Rijndael cipher, AES contains the three key lengths of 128-, 192-, and 256-bits.",
        <p>Example: (AES-128) <code>wow cryptography is cool</code> turns into <code>`bb64a010 15ad5c86 9b5d5170 7b19b56b a196892f 497f96c1 7e69017b 57db9743`</code></p>
      ],
    links: [{
        icon: 'wikipedia w',
        href: 'https://en.wikipedia.org/wiki/Advanced_Encryption_Standard',
        name: "Wikipedia",
        detail: "Advanced_Encryption_Standard",
      },
      {
        icon: 'gavel',
        href: 'https://www.nist.gov/publications/advanced-encryption-standard-aes',
        name: "NIST",
        detail: "Advanced Encryption Standard (AES)",
        color: 'black',
      },
      {
        icon: 'computer',
        href: 'https://formaestudio.com/rijndaelinspector/archivos/Rijndael_Animation_v4_eng-html5.html',
        name: "rijndaelinspector",
        detail: "Visualization",
        color: 'blue',
      },
      {
        icon: 'cog',
        href: 'https://cryptii.com/pipes/aes-encryption',
        name: "Cryptii",
        detail: "Bacon cipher",
        color: 'teal',
      }
    ]
  },
  blowfish: {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/BlowfishFFunction.svg/250px-BlowfishFFunction.svg.png",
    displayName: "Blowfish",
    secondaryNames: [],
    details: [
      <p>Developed in 1993 by <u>Bruce Schneier</u>.</p>,
      <p>Succeeded by <a href="#/result/twofish" target="__blank">Twofish</a> and Threefish.</p>,
      "In the public domain, to be freely used by anyone.",
      "64-bit block sizes with variable key length from 32- to 448-bit."
    ],
    links: [{
        icon: 'wikipedia w',
        href: 'https://en.wikipedia.org/wiki/Blowfish_(cipher)',
        name: "Wikipedia",
        detail: "Blowfish_(cipher)",
      },
      {
        icon: 'fork',
        href: 'https://www.schneier.com/academic/blowfish/',
        name: "schneier.com",
        detail: "The Blowfish Encryption Algorithm",
        color: 'orange',
      }
    ]
  },
  twofish: {
    img: "https://i.imgur.com/gC3CDq5.jpg",
    displayName: "Twofish",
    secondaryNames: [],
    details: [
      <p>Developed in 1998 by <u>Bruce Schneier</u>, <u>John Kelseyr</u>, <u>Doug Whiting</u>, <u>Chris Hall</u>, and <u>Niels Ferguson</u>.</p>,
      <p>Successor to <a href="#/result/blowfish" target="__blank">Blowfish</a>, Succeeded by Threefish.</p>,
      "A finalist for the AES certification, but ultimately not selected.",
      "In the public domain, to be freely used by anyone.",
      "128-bit block sizes with variable key lengths of 128-, 192-, or 256-bit.",
    ],
    links: [{
        icon: 'wikipedia w',
        href: 'https://en.wikipedia.org/wiki/Twofish',
        name: "Wikipedia",
        detail: "Twofish",
      },
      {
        icon: 'fork',
        href: 'https://www.schneier.com/academic/twofish/',
        name: "schneier.com",
        detail: "Twofish",
        color: 'orange',
      },
      {
        icon: 'lock',
        href: 'https://www.encryptionconsulting.com/education-center/what-is-twofish/',
        name: "Encryption Consulting",
        detail: "What is Twofish?",
        color: 'blue',
      },
    ]
  },
  des: {
    img: "https://i.imgur.com/2n2kbPj.jpg",
    displayName: "Data Encryption Standard",
    secondaryNames: ["DES", "Data Encryption Algorithm", "DEA"],
    details: [
      "Developed in the early 1970s at IBM and adopted as an official Federal Information Processing Standard (FIPS) by the United States National Bureau of Standards (NBS) in 1977.",
      "Succeeded by Triple DES, G-DES, and ICE.",
      "Considered insecure in modern times due to small key size.",
      "Publically broken in 1999 by distributed.net and the Electronic Frontier Foundation in 22 hours and 15 minutes.",
      "64-bit block sizes with a 56-bit key size.",
    ],
    links: [{
        icon: 'wikipedia w',
        href: 'https://en.wikipedia.org/wiki/Data_Encryption_Standard',
        name: "Wikipedia",
        detail: "Data_Encryption_Standard",
      },
      {
        icon: 'gavel',
        href: 'https://csrc.nist.gov/csrc/media/publications/fips/46/3/archive/1999-10-25/documents/fips46-3.pdf',
        name: "NIST",
        detail: "FIPS 46-3",
        color: 'black',
      },
      {
        icon: 'comments outline',
        href: 'https://www.rfc-editor.org/rfc/rfc4772.txt',
        name: "IETF",
        detail: "RFC 4772",
        color: 'teal',
      },
    ]
  },
  serpent: {
    img: "https://i.imgur.com/gwJ5f6d.gif",
    displayName: "Serpent",
    secondaryNames: ["Serpent-0", "Serpent-1"],
    details: [
      <p>Developed in 1998 by <u>Ross Anderson</u>, <u>Eli Biham</u>, and <u>Lars Knudsen</u>.</p>,
      "A finalist for the AES certification, but ultimately placed second to Rijndael.",
      "Derived from the Square cipher.",
      "In the public domain, to be freely used by anyone.",
      "128-bit block sizes with variable key lengths of 128-, 192-, or 256-bit.",
    ],
    links: [
      {
        icon: 'wikipedia w',
        href: 'https://en.wikipedia.org/wiki/Serpent_(cipher)',
        name: "Wikipedia",
        detail: "Serpent_(cipher)",
      },
      {
        icon: 'cogs',
        href: 'http://serpent.online-domain-tools.com/',
        name: "OnlineDomainTools",
        detail: "Serpent",
        color: 'green',
      },
      {
        icon: 'flag outline',
        href: 'https://www.cl.cam.ac.uk/~rja14/serpent.html',
        name: "University of Cambridge",
        detail: "SERPENT",
        color: 'brown',
      },
    ]
  },
  caesarian: {
    img: "https://i.imgur.com/7HWN9Ms.png",
    displayName: "Caesarian Cipher",
    secondaryNames: ["Caesar's cipher", "shift cipher", "Caesar's code"],
    details: [
      "A classical substitution cipher; one of the most widely known and simplest encryption algorithms.",
      "Named after Julius Caesar, who used it in his private correspondence.",
      "Easily broken given 25 attempts (one for each shift of the alphabet).",
      <p>Example: (caesar-7) <code style={{backgroundColor: "lightgray"}}>wow cryptography is cool</code> turns into <code style={{backgroundColor: "lightgray"}}>dvd jyfwavnyhwof pz jvvs</code>.</p>,
    ],
    links: [
      {
        icon: 'wikipedia w',
        href: 'https://en.wikipedia.org/wiki/Caesar_cipher',
        name: "Wikipedia",
        detail: "Caesar_cipher",
      },
      {
        icon: 'cog',
        href: 'https://cryptii.com/pipes/caesar-cipher',
        name: "Cryptii",
        detail: "Caesar cipher",
        color: 'teal',
      },
      {
        icon: 'star outline',
        href: 'https://mathworld.wolfram.com/CaesarsMethod.html',
        name: "WolframAlpha",
        detail: "Caesar's Method",
        color: 'red',
      },
    ]
  },
  railfence: {
    img: "https://i.imgur.com/ECxzPGD.png",
    displayName: "Rail Fence Cipher",
    secondaryNames: ["Zigzag cipher"],
    details: [
      "A classical transposition cipher.",
      "Given a number of 'rails', letters are written diagonally and left-right, changing direction once the top or bottom 'rail' is hit.",
      <p>Spaces need to either be extrapolated after decoding or indicated like <code>_</code>.</p>,
      <p>Example: (4 rails, offset of 2) <code>wow cryptography is cool</code> turns into <code>cg o roryiolwwytahscopp </code>.</p>,
    ],
    links: [
      {
        icon: 'wikipedia w',
        href: 'https://en.wikipedia.org/wiki/Rail_fence_cipher',
        name: "Wikipedia",
        detail: "Rail_fence_cipher",
      },
      {
        icon: 'cog',
        href: 'https://cryptii.com/pipes/rail-fence-cipher',
        name: "Cryptii",
        detail: "Rail fence cipher",
        color: 'teal',
      }
    ]
  },
  bacon: {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Somer_Francis_Bacon.jpg/1200px-Somer_Francis_Bacon.jpg",
    displayName: "Bacon's Cipher",
    secondaryNames: ["Baconian cipher"],
    details: [
      "A classical steganographic encoding developed by Francis Bacon in 1605.",
      <p>Replaces each letter of the alphabet with a cluster of 5 composed only of the letters <code>a</code> and <code>b</code>.</p>,
      <p>Can be used with any two distinct symbols to represent<code>a</code> and <code>b</code>, as long as it is known which is which.</p>,
      "Any groups that do not map to one of the letters are assumed to be junk that is not part of the message.",
      <p>Example: <code>wow cryptography is cool</code> turns into <code>baaba aabbb aabaa abbbb baabb abaaa aaaba abaab aaaab baaaa abbab babaa abbaa aabab abbab babab abaaa baabb ababb abbba baaab abbab baabb aabaa baaaa baaba aabbb aabaa ababa aaaaa babbb babba aaabb abbab aabba</code>.</p>
    ],
    links: [
      {
        icon: 'wikipedia w',
        href: 'https://en.wikipedia.org/wiki/Bacon%27s_cipher',
        name: "Wikipedia",
        detail: "Bacon's_cipher",
      },
      {
        icon: 'cog',
        href: 'https://cryptii.com/pipes/bacon-cipher',
        name: "Cryptii",
        detail: "Bacon cipher",
        color: 'teal',
      }
    ]
  },
  rc4: {
    img: "https://i.ytimg.com/vi/1UP56WM4ook/mqdefault.jpg",
    displayName: "RC4",
    secondaryNames: ["Rivest Cipher 4", "ARC4", "ARCFOUR"],
    details: [
      "Designed by Ron Rivest of RSA Security in 1987.",
      "A stream cipher that combined plantext with a pseudorandom cipher stream.",
      "Used in protocols such as WEP for WiFi security.",
      "Largely considered insecure in modern times.",
      "2064-bit state size with a variable 40- to 2048-bit key size.",
      <p>Example: <code>wow cryptography is cool</code> turns into <code>`09c5eccd cafca855 27aca182 00b50395 c82fc98b 94476932`</code>.</p>,
    ],
    links: [
      {
        icon: 'wikipedia w',
        href: 'https://en.wikipedia.org/wiki/RC4',
        name: "Wikipedia",
        detail: "RC4",
      },
      {
        icon: 'cog',
        href: 'https://cryptii.com/pipes/rc4-encryption',
        name: "Cryptii",
        detail: "RC4 / ARC4",
        color: 'teal',
      }
    ]
  },
  rsa: {
    img: "https://i.imgur.com/IouMQdu.png",
    displayName: "RSA",
    secondaryNames: ["Rivest–Shamir–Adleman"],
    details: [
      "Designed by 	Ron Rivest, Adi Shamir, and Leonard Adleman in 1977.",
      "Named after the surnames of the designers.",
      "A public-key crytographic system where the keys are asymmetric.",
      "Typical key sizes range from 1536- to 4096-bit.",
      "Relatively slow algorithm; generally used to transmit shared keys in symmetric-key algorithms.",
      "Used in: TLS/SSL security.",
      <p>Example: (512-bit key) <code>wow cryptography is cool</code> turns into <code>`DHl2RIkZXV62cmM6h4LiINCzShT/mjflrflRgM+2Au8MgpA0shVLZocyS8Aimf6QJSFcboB5557dMOPG14gZ6g==`</code>.</p>,
    ],
    links: [
      {
        icon: 'wikipedia w',
        href: 'https://en.wikipedia.org/wiki/RSA_(cryptosystem)',
        name: "Wikipedia",
        detail: "RSA_(cryptosystem)",
      },
      {
        icon: 'google',
        href: 'https://patents.google.com/patent/US4405829',
        name: "Google Patents",
        detail: "US4405829A",
        color: 'blue',
      },
      {
        icon: 'road',
        href: 'https://8gwifi.org/RSAFunctionality?keysize=512',
        name: "Crypto Playground",
        detail: "RSA Encryption Decryption",
        color: 'blue',
      },
    ]
  },
}

export default possibleResults;
