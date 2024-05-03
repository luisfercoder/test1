

// function limesToCut(wedgesNeeded,limes){
//   let totalWedges=0;
//   let limescut=0;
//   let wedges=0;
//     while(limescut<limes.length && totalWedges <=wedgesNeeded){
//       switch(limes[limescut]){
//         case "small":
//         wedges = 6;
//         break;
//         case "medium":
//         wedges = 8;
//         break;
//         case "large":
//         wedges = 10;
//         break;
//       }
//       totalWedges += wedges;
//       if(wedgesNeeded > 0){
//         limescut ++;
//       }

//     }
//     return limescut;
// };
// console.log(limesToCut(25, ['small', 'small', 'large', 'medium', 'small']));


function remainingOrders(timeLeft, orders) {
  let totalnames=0;
  let order=0;
  let name=0;
  while(order<orders.length && totalnames>=timeLeft){
    switch(orders[name]){
      case "Pure Strawberry Joy":
        name =0.5;
        break;
      case "Energizer":
        name= 1.5;
        break;
      case "Green Garden":
        name=1.5;
        break;
      case "Tropical Island":
        name =3;
        break;
      case "All or Nothing":
        name =5;
        break;
      default:
        name =2.5;
        break;
    }
    timeLeft -=name;
    if(){
      orders++;
    }
  }

}
console.log(remainingOrders(5, ['Energizer', 'All or Nothing', 'Green Garden'])
);