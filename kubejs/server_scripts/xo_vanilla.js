

ServerEvents.recipes(event => { 

                                                // REMOVE RECEIPES \\


                                                
  
event.remove({ output: 'minecraft:crafting_table' })
event.remove({ output: 'minecraft:end_crystal' })
event.remove({ output: '#minecraft:beds' })


                                               // OUTPUT ADJUSTMENTS \\




//LOGS TO 2x PLANKS ONLY
event.forEachRecipe({ type: 'minecraft:crafting_shapeless', input: '#minecraft:logs', output: '#minecraft:planks' },
 r => {
    let ingredients = r.originalRecipeIngredients
    let output = r.originalRecipeResult
    event.shapeless(Item.of(output.id, 2), ingredients[0]).id(r.getOrCreateId())
  })

//PLANKS TO 2x STICKS ONLY
event.forEachRecipe({ type: 'minecraft:crafting_shaped', input: '#minecraft:planks', output: 'minecraft:stick' },
 r => {
    let ingredients = r.originalRecipeIngredients
    let output = r.originalRecipeResult
    event.shapeless(Item.of(output.id, 2), ingredients[0]).id(r.getOrCreateId())
  })


//CREATE FLINT FROM GRAVEL RECIPE
event.shapeless(
    Item.of('minecraft:flint', 1), // Output
    ['3x minecraft:gravel'] // Input
  )



                                              // RECIPE ADJUSTMENTS \\


//CRAFTING TABLE
event.shaped(
  Item.of('minecraft:crafting_table'), 
  [ 
    'AA', 
    'BB'
  ],
  {
    A: 'minecraft:flint', 
    B: '#minecraft:logs'
  }
)
  




    
})





console.info('Loaded Script - Vanilla Modifications')
