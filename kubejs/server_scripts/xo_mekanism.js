//MODIFIES MEKANISM RECIPES

ServerEvents.recipes(event => { 
  
    
    event.remove({output: 'mekanism:basic_control_circut'})
    event.remove({output: 'mekanism:advanced_control_circut'})
    event.remove({output: 'mekanism:elite_control_circut'})
    event.remove({output: 'mekanism:ultimate_control_circut'})

        
    })
    
    
console.info('Loaded Script - Mekanism Modifications')