# Join the BitSong Network Mainnet

::: tip
See the [networks repo](https://github.com/bitsongofficial/networks) for information on the mainnet, including the correct version of the `go-bitsong` to use and details about the genesis file.
:::

::: warning
**You need to [install go-bitsong](./installation.md) before you go further**
:::

## Setting Up a New Node

These instructions are for setting up a brand new full node from scratch.

First, initialize the node and create the necessary config files:

```bash
bitsongd init <your_custom_moniker> --chain-id=bitsong-1
```

::: warning Note
Monikers can contain only ASCII characters. Using Unicode characters will render your node unreachable.
:::

You can edit this `moniker` later, in the `~/.bitsongd/config/config.toml` file:

```toml
# A custom human readable name for this node
moniker = "<your_custom_moniker>"
```

You can edit the `~/.bitsongd/config/app.toml` file in order to enable the anti spam mechanism and reject incoming transactions with less than the minimum gas prices:

```
# This is a TOML config file.
# For more information, see https://github.com/toml-lang/toml

##### main base config options #####

# The minimum gas prices a validator is willing to accept for processing a
# transaction. A transaction's fees must meet the minimum of any denomination
# specified in this config (e.g. 10ubtsg).

minimum-gas-prices = ""
```

Your full node has been initialized!

## Genesis & Seeds

### Copy the Genesis File

Fetch the mainnet's `genesis.json` file into `bitsongd`'s config directory.

```bash
mkdir -p $HOME/.bitsongd/config
wget https://raw.githubusercontent.com/bitsongofficial/networks/master/bitsong-1/genesis.json
mv genesis.json $HOME/.bitsongd/config
```

To verify the correctness of the configuration run:

```bash
bitsongd start
```

## P2P Settings

Your node needs to know how to find peers. You'll need to add healthy seed nodes to `$HOME/.bitsongd/config/config.toml`.

### Seed Mode

The node operates in **seed mode**. In seed mode, a node continuously crawls the network for peers, and upon incoming connection shares some peers and disconnects.

```toml
# Seed mode, in which node constantly crawls the network and looks for
# peers. If another node asks it for addresses, it responds and disconnects.
# Does not work if the peer-exchange reactor is disabled.
seed_mode = false
```

### Seeds

Dials these **seeds** when we need more peers. They should return a list of peers and then disconnect. If we already have enough peers in the address book, we may never need to dial them.

```toml
# Comma separated list of seed nodes to connect to
seeds = "ffa27441ca78a5d41a36f6d505b67a145fd54d8a@95.217.156.228:26656,efd52c1e56b460b1f37d73c8d2bd5f860b41d2ba@65.21.62.83:26656"
```

### Persistent Peers

Dial these peers and auto-redial them if the connection fails. These are intended to be trusted persistent peers that can help anchor us in the p2p network. The auto-redial uses exponential backoff and will give up after a day of trying to connect.

But if `persistent_peers_max_dial_period` is set greater than zero, pause between each dial to each persistent peer will not exceed `persistent_peers_max_dial_period` during exponential backoff and we keep trying again without giving up.

```toml
# Comma separated list of nodes to keep persistent connections to
persistent_peers = "a62038142844828483dbf16fa6dd159f6857c81b@173.212.247.98:26656,e9fea0509b1a2d16a10ef9fdea0a4e3edc7ca485@185.144.83.158:26656,8208adac8b09f3e2499dfaef24bb89a2d190a7a3@164.68.109.246:26656,cf031ac1cf44c9c311b5967712899391a434da9a@161.97.97.61:26656,d6b2ae82c38927fa7b7630346bd84772e632983a@157.90.95.104:15631,a5885669c1f7860bfe28071a7ec00cc45b2fcbc3@144.91.85.56:26656,325a5920a614e2375fea90f8a08d8b8d612fdd1e@137.74.18.30:26656,ae2787a337c3599b16410f3ac09d6918da2e5c37@46.101.238.149:26656,9336f75cd99ff6e5cdb6335e8d1a2c91b81d84b9@65.21.0.232:26656,9c6e52e78f112a55146b09110d1d1be47702df27@135.181.211.184:36656"
```

## A Note on Gas and Fees

On **BitSong Network mainnet**, the accepted denom is `ubtsg`, where 1btsg = 1.000.000ubtsg

Transactions on the BitSong Network need to include a transaction fee in order to be processed. This fee pays for the gas required to run the transaction. The formula is the following:

```bash
fees = ceil(gas * gasPrices)
```

The `gas` is dependent on the transaction. Different transaction require different amount of `gas`. The `gas` amount for a transaction is calculated as it is being processed, but there is a way to estimate it beforehand by using the `auto` value for the `gas` flag. Of course, this only gives an estimate. You can adjust this estimate with the flag `--gas-adjustment` (default `1.0`) if you want to be sure you provide enough gas for the transaction.

The `gasPrice` is the price of each unit of `gas`. Each validator sets a `min-gas-price` value, and will only include transactions that have a `gasPrice` greater than their `min-gas-price`.

The transaction `fees` are the product of `gas` and `gasPrice`. As a user, you have to input 2 out of 3. The higher the `gasPrice/fee`s, the higher the chance that your transaction will get included in a block.

For mainnet, the recommended `gas-prices` is `0.025ubtsg`.

## Set `minimum-gas-prices`

Your full-node keeps unconfirmed transactions in its mempool. In order to protect it from spam, it is better to set a `minimum-gas-prices` that the transaction must meet in order to be accepted in your node's mempool. This parameter can be set in the following file `~/.bitsongd/config/app.toml`.

The initial recommended `min-gas-prices` is `0.025ubtsg`, but you might want to change it later.

## Pruning of State

There are three strategies for pruning state, please be aware that this is only for state and not for block storage:

1. `PruneEverything`: This means that all saved states will be pruned other than the current.
2. `PruneNothing`: This means that all state will be saved and nothing will be deleted.
3. `PruneSyncable`: This means that only the state of the last 100 and every 10,000th blocks will be saved.

By default every node is in `PruneSyncable` mode. If you would like to change your nodes pruning strategy then you must do so when the node is initialized. For example, if you would like to change your node to the `PruneEverything` mode then you can pass the `--pruning everything` flag when you call `bitsongd start`.

::: warning
Note: When you are pruning state you will not be able to query the heights that are not in your store.
:::

## Run a Full Node

Start the full node with this command:

```bash
bitsongd start
```

Check that everything is running smoothly:

```bash
bitsongd status
```

View the status of the network with the [BitSong Explorer](https://explorebitsong.com).

## Export State

BitSong Network can dump the entire application state to a JSON file, which could be useful for manual analysis and can also be used as the genesis file of a new network.

Export state with:

```bash
bitsongd export > [filename].json
```

You can also export state from a particular height (at the end of processing the block of that height):

```bash
bitsongd export --height [height] > [filename].json
```

If you plan to start a new network from the exported state, export with the `--for-zero-height` flag:

```bash
bitsongd export --height [height] --for-zero-height > [filename].json
```

## Next

You now have an active **full node**. What's the next step? You can upgrade your full node to become a **BitSong Validator**. The top **64 validators** have the ability to propose new blocks to the BitSong Network.

Continue onto the [Validator Setup](../validators/validator-setup.md).
