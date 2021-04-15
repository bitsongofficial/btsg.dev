---
home: true
actionText: Get Started  →
actionLink: /guide/
footer: MIT Licensed | Copyright @ 2018 - 2021 BitSong
---

## What is BitSong?

BitSong is a distributed (open source) blockchain music ecosystem born in December 2017 to create a decentralized and trustless hub that interconnects the music industry’s market players.

Our mission is to decentralize the music sector by simplifying the bureaucracy to offer artists a meritocratic, transparent, fast and intermediary-free earnings model while users gain a new way to listen to music and earn money.

BitSong is not just a streaming platform. It’s a decentralized ecosystem of services providing the global community of artists, fans and music providers with a trustless music marketplace that becomes the industry’s point of reference.

<div class="features">
  <div class="feature">
    <h2>Tendermint BFT</h2>
    <p>Byzantine fault tolerant consensus engine that powers Cosmos Proof-of-Stake</p>
  </div>
  <div class="feature">
    <h2>Cosmos-SDK based</h2>
    <p>BitSong is a new music platform, which is built using <a href="https://cosmos.network" target="_blank">Cosmos-SDK</a></b> and the distributed <a href="https://ipfs.io/" target="_blank">IPFS</a></b> filesystem</p>
  </div>

  <div class="feature">
    <h2>IBC Protocol</h2>
    <p>TCP/IP-like messaging protocol for blockchains</p>
  </div>

  <div class="feature">
    <h2>Blockchain Music Distribution</h2>
    <p>Your music will be distributed via BitSong on all its clients</p>
  </div>

  <div class="feature">
    <h2>Governance</h2>
    <p>Validators and delegators can vote on proposals that are then able to change the parameters of the system, coordinate upgrades, and vote on governance policies</p>
  </div>

  <div class="feature">
    <h2>Staking</h2>
    <p>Process of actively participating in transaction validation, similar to mining but on a Proof-of-Stake (PoS) blockchain. Anyone with any BTSG tokens can validate transactions and earn staking rewards  </p>
  </div>

  <div class="feature">
    <h2>Community Pool</h2>
    <p>A percentage of all staking rewards generated (via block rewards and transactions fees) are continually transferred to and accrue within the Community Pool. The governance can open proposals on how to spend BTSG funds</p>
  </div>

  <div class="feature">
    <h2>NFT</h2>
    <p>NFTs are non-fungible tokens. They act as a non-duplicable digital certificate of ownership for any assigned digital asset. Once the NFT is purchased, the owner has the digital rights to resell, distribute or license the digital asset as they please</p>
  </div>

  <div class="feature">
    <h2>Fan Token</h2>
    <p>Digital assets represent your ownership of a voting right and give you access to earn unique club-specific rewards and experiences. Fan Tokens are fungible (unlike NFTs), meaning that like other cryptocurrencies, they can be exchanged for other ‘goods’, such as VIP experiences, exclusive merchandise and tickets</p>
  </div>

</div>

## Try BitSong Network

Currently tested for Ubuntu Linux

### 1. Install go 1.13+

```bash
wget https://dl.google.com/go/go1.13.15.linux-amd64.tar.gz
sudo tar -xvzf go1.13.15.linux-amd64.tar.gz
sudo mv go /usr/local
cat <<EOF >> ~/.profile
export GOPATH=$HOME/go
export GO111MODULE=on
export PATH=$PATH:/usr/local/go/bin:$HOME/go/bin
EOF
```

```bash
source ~/.profile
```

### 2. Clone go-bitsong

```bash
git clone https://github.com/bitsongofficial/go-bitsong.git && cd go-bitsong
```

### 3. Checkout the latest version

```bash
git checkout v0.7.0
```

### 4. Compile go-bitsong

```bash
make install

# go-bitsong version
bitsongd version --long
```
