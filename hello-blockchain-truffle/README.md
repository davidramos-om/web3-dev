### Create new project
```
truffle init
```

### Start truffle
```bash
# check compiles installed
truffle compile --list

# ensure to download any required version
sudo truffle compile
sudo truffle migrate

#start ganache server
ganache

#development network
truffle console —network development

# Enter the following command to check out if everything runs properly
web3.eth.getBlock(0) #You'll see block info

# Test contract functions
const intance = await HelloBlockChain.deployed()
intance.sayHiya.call()

```