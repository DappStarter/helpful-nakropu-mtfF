require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half clock bright smooth fine birth ridge coin include knee bubble gauge'; 
let testAccounts = [
"0x4a5abbdac4c12d979ae46337f558c918a972e806caaf54794324a1056bc471ac",
"0x00318174dbaf7d3989730467c9cba16bf7d26d9b14c320df0391404c4087dab8",
"0x5271bf6e26f806dd0b5aedb39dbada7da66dfb6c7873f83e035274b7ca149881",
"0x2dc03058f3f752af4cd054aee3916bae6425ed7b64561822d6a65fc0cef9d34a",
"0x261ea161616ee0b3dff5455c4e5c6d0fb759d4bfeb702e4ea23a663c4d12cafe",
"0x4700f2a292ff9a4c9dd5c9e87cbde13781a655a7e367318b7d1143331657037b",
"0x24df316cc65596b9db2f165bc5a9e5d2662b936060f7b4e12440d11fd90a3136",
"0x4581f92437f4dcd47c9ca7a4666b7d9fcb9d6839de43e482843f868950178eff",
"0xfe98972108e4e451c89dc53f6d03cf1c623f6ed2036d88740ce333da3b8fcc2b",
"0x1e1ac8b59a16f2526a96f58327a676206cb31881acd6b269b53b5e5cfb8e14be"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

