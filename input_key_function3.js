document.addEventListener('keyup', checkKeypress, false);

function checkKeypress(key)
      {
        if (key.keyCode == 70) // F
        {
          z[m]= 1;
          m++
          a++
          console.log("F pressed")
        }
        else if (key.keyCode == 74) // J
        {
          z[m]= 2;
          m++
          a++
          console.log("J pressed")
        }
        else if (key.keyCode == 32) //Space bar 32
        {
          keyinputs = z;
          c++
          console.log("Spacebar pressed")
          if (w==0)
          {
            if (a == 4)
            {
            console.log("First evaluation")
            for (r=0; r < 4; )
                  {
                  function indxComparison(y)
                      { return y==keyinputs[r] ;}
                        var index = matrix[tmp_state].findIndex(indxComparison)
                        all_states[r+1] = index;
                        tmp_state = index;
                        r++;
                   }
                   w = 1;
             }
             else {z = [];
             m = 0;}
         }
           else if (w==1) {
             console.log("Second evaluation")
             if (a == 4)
             {
             for (r=0; r < 4; )
                   {
             function indexComparison2(y)
                 { return y==keyinputs[r+4*g] ;} // r+4
                   var index = matrix[tmp_state].findIndex(indexComparison2)
                   all_states[r+1] = index;
                   tmp_state = index;
                   console.log(keyinputs[r])
                   r++;
                 }
                  g++;
           }
           else {z = [];
           w = 0;
         m = 0;}
         }
          }
        }

  function random_targets ()
  {
    // if (random_state == 0)
    if (new_state == 0)
    {
      if(random_value == 0)
      {target = 1;}
      else if (random_value == 1)
      {target = 4;}
    }
    //
    if (new_state == 1)
    {
      if(random_value == 0)
      {target = 2;}
      else if (random_value == 1)
      {target = 5;}
    }
    //
    if (new_state == 2)
    {
      if(random_value == 0)
      {target = 3;}
      else if (random_value == 1)
      {target = 0;}
    }
    //
    if (new_state == 3)
    {
      if(random_value == 0)
      {target = 4;}
      else if (random_value == 1)
      {target = 1;}
    }
    //
    if (new_state == 4)
    {
      if(random_value == 0)
      {target = 5;}
      else if (random_value == 1)
      {target = 2;}
    }
    //
    if (new_state == 5)
    {
      if(random_value == 0)
      {target = 0;}
      else if (random_value == 1)
      {target = 3;}
    }
  }
