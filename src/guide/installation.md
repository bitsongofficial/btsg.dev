# Install go-bitsong

This guide will explain how to install the `bitsongd` and `bitsongcli` entrypoints onto your system. With these installed on a server, you can participate in the mainnet as either a [Full Node](./join-mainnet.md) or a [Validator](../validators/validator-setup.md).

## Hardware Requirements

We recommend the following for running **go-bitsong**:

- **2 or more** CPU cores
- At least **300GB** of disk storage
- At least **2.5 - 5mbps** network bandwidth

## Install Go

Install `go` by following the [official docs](https://golang.org/doc/install). Remember to set your `$PATH` environment variable, for example:

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

::: tip
**Go 1.13+** is required for `go-bitsong`.
:::

## Install the binaries

Next, let's install the latest version of `go-bitsong`. Make sure you `git checkout` the correct [released version](https://github.com/bitsongofficial/go-bitsong/releases).

```bash
git clone -b <latest-release-tag> https://github.com/bitsongofficial/go-bitsong
cd go-bitsong && make install
```

If this command fails due to the following error message, you might have already set `LDFLAGS` prior to running this step.

```
# github.com/bitsongoffcial/go-bitsong/cmd/bitsongd
flag provided but not defined: -L
usage: link [options] main.o
...
make: *** [install] Error 2
```

Unset this environment variable and try again.

```
LDFLAGS="" make install
```

> _NOTE_: If you still have issues at this step, please check that you have the latest stable version of GO installed.

That will install the `bitsongd` and `bitsongcli` binaries. Verify that everything is OK:

```bash
$ bitsongd version --long
$ bitsongcli version --long
```

`bitsongcli` for instance should output something similar to:

```bash
name: go-bitsong
server_name: bitsongd
client_name: bitsongcli
version: 0.7.0
commit: 26a277a67b8d3e0052ace21be7f3a2754171b06b
build_tags: netgo,ledger
go: go version go1.14.2 linux/amd64
build_deps:
...
```

### Build Tags

Build tags indicate special features that have been enabled in the binary.

| Build Tag | Description                                     |
| --------- | ----------------------------------------------- |
| netgo     | Name resolution will use pure Go code           |
| ledger    | Ledger devices are supported (hardware wallets) |

### Create a Dedicated User

**bitsongd** does not require the super user account. We strongly recommend using a normal user to run `bitsongd`. However, during the setup process you'll need super user permission to create and modify some files.

### Firewall Configuration

**bitsongd** uses several TCP ports for different purposes.

- `26656` is the default port for the P2P protocol. This port is opened in order to communicate with other nodes, and must be open to join a network. **However**, it does not have to be open to the public. For validator nodes, we recommend configuring `persistent_peers` and closing this port to the public.

- `26657` is the default port for the RPC protocol. This port is used for querying / sending transactions. In other words, this port needs to be opened for serving queries from `bitsongcli`. It is safe to NOT to open this port to the public unless you are planning to run a public node.

- `1317` is the default port for Lite Client Daemon (LCD), which can be executed by `bitsongcli rest-server`. LCD provides HTTP RESTful API layer to allow applications and services to interact with your terrad instance through RPC. Check the BitSong Network REST API (TODO: add link) for usage examples. You don't need to open this port unless you have use of it.

- `26660` is the default port for interacting with the [Prometheus](https://prometheus.io/) database which can be used for monitoring the environment. This port is not opened in the default configuration.

### Running Server as a Daemon

It is important to keep `bitsongd` running at all times. There are several ways to achieve this, and the simplest solution we recommend is to register `bitsongd` as a `systemd` service so that it will automatically get started upon system reboots and other events.

### Register `bitsongd` as a service

First, create a service definition file in `/etc/systemd/system`

#### Sample file: `/etc/systemd/system/bitsong.service`

```bash
[Unit]
Description=BitSong Network Daemon
After=network.target

[Service]
Type=simple
User=bitsong
ExecStart=/data/bitsong/go/bin/bitsongd start
Restart=on-abort

[Install]
WantedBy=multi-user.target

[Service]
LimitNOFILE=65535
```

Modify the `Service` section from the given sample above to suit your settings.

After creating a service definition file, you should execute

```bash
systemctl daemon-reload && systemctl enable bitsong
```

### Controlling the service

Use `systemctl` to control (start, stop, restart)

```bash
# Start
systemctl start bitsong

# Stop
systemctl stop bitsong

# Restart
systemctl restart bitsong
```

### Accessing logs

```bash
# Entire log
journalctl -t bitsong

# Entire log reversed
journalctl -t bitsong -r

# Latest and continuous
journalctl -t bitsong -f
```

## Next

Now you can [join the mainnet](./join-mainnet.md)
