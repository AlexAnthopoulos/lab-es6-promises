// Iteration 1 using callbacks
addFood(steak[0], '#steak', () => {
  // ... your code here
  addFood(steak[1], '#steak', () => {
    addFood(steak[2], `#steak`, () => {
      addFood(steak[3],`#steak`,() => {
        addFood(steak[4],`#steak`,() => {
          addFood(steak[5],`#steak`,() => {
            addFood(steak[6],`#steak`,() => {
              addFood(steak[7],`#steak`,() => {
                document.querySelector("#table").innerHTML += `<img src="public/images/steak.jpg" />`;
              })
            })
          })
        })
      })
    })

  })
});



// Iteration 2 using `.then()`
addFood(mashPotatoes[0], '#mashPotatoes').then(() => {
  // ... your code here
  addFood(mashPotatoes[1], '#mashPotatoes').then(() => {
    addFood(mashPotatoes[2],`#mashPotatoes`).then(() => {
      addFood(mashPotatoes[3],`#mashPotatoes`).then(() => {
        addFood(mashPotatoes[4],`#mashPotatoes`).then(() => {
          document.querySelector("#table").innerHTML += `<img src="public/images/mashPotatoes.jpg" />`;
        })
      })
    })
  })
});
 
BrusellsImg = () => {
  document.querySelector("#table").innerHTML += `<img src ="public/images/brusselSprouts.jpg" />`;
}
// Iteration 3 using async and await

async function makeFood() {
	for (let i = 0; i < brusselSprouts.length; i++) {
		await addFood(brusselSprouts[i], "#brusselSprouts");
	}
	await BrusellsImg();
}

makeFood();   

Promise.all([makeFood()]).then(() => {
    alert("Dinner is served!");
});
  

