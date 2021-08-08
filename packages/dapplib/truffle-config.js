require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture help future spot toy note meadow undo install forget frame gather'; 
let testAccounts = [
"0x68d5c54568b64420a50fcfb52ae40429648f14e386c1b001785e68d7134e9255",
"0x61a2c9bb66616e5321f66e11a8235907f886e5ff81796f61e2211bb58cd5a54e",
"0x6754ecdfc5fab7ec3ee65334bb7d1794a2be5581d1394d5985bdca3d6279fe2a",
"0x97d90c1ebb41716dc4e21e5fbf35500eae34892dfc8cf51ce5d17822f79be56f",
"0x1d614aa70cbcc0728a225ea15f4508e533e771715e9201531030c22a4b1e54eb",
"0x91c3876206cb877d1d3b7cffc8330ed32c0334e19971b7fa05a9e080bbb861c0",
"0xf0b467b45a3af05d65b6ae8bf44d42fcaece296987649c86716f3301c14266b9",
"0xa24f412350373dafea9a412244d169fd075c4f6a3ce8b0eef46e86169212fbc3",
"0x4cafefd2c2aa3e3aa43508526b0f782b33033be7d6da8ab22d96799eda85c14c",
"0x79d94e05578b9d799b809665fc87ed6dee84a104a33856770df3e767950e452e"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


