function isTouching(object1, object2){
    if (object1.x - object2.x < object2.width/2 + object1.width/2 &&
      object2.x - object1.x < object2.width/2 + object1.width/2 &&
       object1.y - object2.y < object2.height/2 + object1.height/2 &&
       object2.y - object1.y < object2.height/2 + object1.height/2) {
          return true;
    // movingRect.velocityX = movingRect.velocityX * (-1);
      //fixedRect.velocityX = fixedRect.velocityX * (-1);
    }else{
      return false;
    }
  } 
  
  
  function addition(num1, num2){
    return num1+num2;
  }
  
  function bounceOff(object1 , object2){
    if (object1.x - object2.x < object2.width/2 + object1.width/2 &&
      object2.x - object1.x < object2.width/2 + object1.width/2 &&
       object1.y - object2.y < object2.height/2 + object1.height/2 &&
       object2.y - object1.y < object2.height/2 + object1.height/2) {
         object1.velocityX = object1.velocityX * (-1);
         object2.velocityX = object2.velocityX * (-1);
       }
  }   