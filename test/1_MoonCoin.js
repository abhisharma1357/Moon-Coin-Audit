const MoonCoin = artifacts.require('MoonCoin.sol');
var Web3 = require("web3");
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

contract('Moon Coin Token Contract', async (accounts) => {

  it('Should correctly initialize constructor values of Moon Coin Token Contract', async () => {
    
    this.tokenhold = await MoonCoin.new({from : accounts[0], gas: 60000000 });
  
  });

  it('Should check the Total Supply of Moon Coin Tokens', async () => {


  let totalSupply = await this.tokenhold.totalSupply();
  assert.equal(totalSupply/10**18,1000000); 
  });

  it('Should check the Name of a token of Moon Coin contract', async () => {

    let name = await this.tokenhold.name();
    assert.equal(name,'MoonToken'); 

  });

  it('Should check the symbol of a token of Moon Coin contract', async () => {

    let symbol = await this.tokenhold.symbol();
    assert.equal(symbol,'MT2'); 

  });

  it('Should check the decimal of a token of Moon Coin contract', async () => {

    let decimal = await this.tokenhold.decimals();
    assert.equal(decimal.toNumber(),18); 

  });

  it('Should check the balance of a Owner', async () => {

    let balanceOfOwner = await this.tokenhold.balanceOf(accounts[0]);
    assert.equal(balanceOfOwner/10**18,1000000); 

  });

})

