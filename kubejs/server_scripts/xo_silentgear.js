//MODIFIES SILENT GEAR RECIPES

ServerEvents.recipes(event => { 
  
    //REMOVE GUIDE BOOK, IT'S USELESS
    event.remove({ output: 'silentgear:guide_book' })
 

        
    })
    
    
console.info('Loaded Script - Silent Gear Modifications')