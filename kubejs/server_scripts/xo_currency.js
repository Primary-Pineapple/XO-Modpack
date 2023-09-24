//MODIFIES LIGHTMANS CURRENCY MOD RECIPES

ServerEvents.recipes(event => { 
  

    //DELETE COIN MINT - PREVENT COINS BEING 'MINTED'
    event.remove({ output: 'lightmanscurrency:coinmint' })
 
    //PREVENT THE CREATION OF ANY COINS
    event.remove({ output: '#lightmanscurrency:coins' })
      
    //REMOVE WALLET RECEIPES - MUST BE PURCHASED
    event.remove({ output: 'lightmanscurrency:wallet_iron' })
    event.remove({ output: 'lightmanscurrency:wallet_gold' })
    event.remove({ output: 'lightmanscurrency:wallet_emerald' })
    event.remove({ output: 'lightmanscurrency:wallet_diamond' })
    event.remove({ output: 'lightmanscurrency:wallet_netherite' })
        
    })
    
    
console.info('Loaded Script - Currency Modifications')