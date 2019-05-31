document.addEventListener('keyup', checkKeypress, false);

function checkKeypress(key)
      {
        if (key.keyCode == 70) // F
        {
          z[m]= 1;
          m++
          console.log("F pressed")
        }
        else if (key.keyCode == 74) // J
        {
          z[m]= 2;
          m++
          console.log("J pressed")
        }
        else if (key.keyCode == 32) //Space bar
        {
          keyinputs = z;
          console.log("Spacebar pressed")
          for (r=0; r < 4; )
                {
                function indxComparison(y)
                    { return y==keyinputs[r] ;}
                      var index = matrix[tmp_state].findIndex(indxComparison)
                      all_states[r+1] = index;
                      tmp_state = index;
                      r++;
                }
          }
      }
