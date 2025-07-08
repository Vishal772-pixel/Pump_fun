Contracts will be in Foundry ...a popular framework to write contract logics , deployment and tests..

Here we would be having a setup  instructions,guide for foundry .....less go
forge install OpenZeppelin/openzeppelin-contracts







tO DEPLOY THE CONTRACT USE BELOW COMMAND 
forge script script/DeployFactory.s.sol \
  --rpc-url https://sepolia.infura.io/v3/10ca957697ae4abe89854ebfa0e14ea5 \
  --private-key 4b172bc6457c5241c87103402812893b58cf160ef261cc544d8dbc47472db158 \
  --broadcast















## Foundry



Foundry consists of:

-   **Forge**: Ethereum testing framework (like Truffle, Hardhat and DappTools).
-   **Cast**: Swiss army knife for interacting with EVM smart contracts, sending transactions and getting chain data.
-   **Anvil**: Local Ethereum node, akin to Ganache, Hardhat Network.
-   **Chisel**: Fast, utilitarian, and verbose solidity REPL.

## Documentation

https://book.getfoundry.sh/

## Usage

### Build

```shell
$ forge build
```

### Test

```shell
$ forge test
```

### Format

```shell
$ forge fmt
```

### Gas Snapshots

```shell
$ forge snapshot
```

### Anvil

```shell
$ anvil
```

### Deploy

```shell
$ forge script script/Counter.s.sol:CounterScript --rpc-url <your_rpc_url> --private-key <your_private_key>
```

### Cast

```shell
$ cast <subcommand>
```

### Help

```shell
$ forge --help
$ anvil --help
$ cast --help
```

forge install OpenZeppelin/openzeppelin-contracts


