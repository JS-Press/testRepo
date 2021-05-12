const h6 = document.createElement('h6');
h6.textContent = "Another One, Please";

//const input = document.getElementById('input');

const worm = document.querySelector('img');

document.querySelector('body').appendChild(h6); 

h6.addEventListener('click', function() {
   // alert('In a sec, JEEZ!');
    worm.src = "./images/worm9.jpg"
    h6.textContent = "Mhm, And One More";
    h6.addEventListener('click', function() {
         worm.src = "./images/worm23.jpg"
         h6.textContent = "Now Hold On";
         
            h6.addEventListener('click', function() {
                worm.src = "./images/worm19.jpg"
                h6.textContent = "...Worms";
                h6.addEventListener('click', function() {
                    worm.src = "./images/worm13.jpg"
                    h6.textContent = "With Eyes...";
                    h6.addEventListener('click', function() {
                        worm.src = "./images/worm15.jpg"
                        h6.textContent = "...And A Mouth...";
                        h6.addEventListener('click', function() {
                            worm.src = "./images/worm20.jpg"
                            h6.textContent = "Or Is It A Rabbit?";
                            h6.addEventListener('click', function() {
                                worm.src = "./images/worm17.jpg"
                                h6.textContent = "With Ears?";
                                h6.addEventListener('click', function() {
                                    worm.src = "./images/worm8.jpg"
                                    h6.textContent = "And Also Eyes...";
                                    h6.addEventListener('click', function() {
                                        worm.src = "./images/worm18.jpg"
                                        h6.textContent = "Nah...";
                                        h6.addEventListener('click', function() {
                                            worm.src = "./images/worm11.jpg"
                                            h6.textContent = "It's A Worm";
                                            h6.addEventListener('click', function() {
                                                worm.src = "./images/worm26.jpg"
                                                h6.textContent = "Just A Weird One.";
                                                h6.addEventListener('click', function() {
                                                    worm.src = "./images/worm21.jpg"
                                                    h6.textContent = "Ok, Just a Few More";
                                                    h6.addEventListener('click', function() {
                                                        worm.src = "./images/worm14.jpg"
                                                        h6.textContent = "There's this one";
                                                        h6.addEventListener('click', function() {
                                                            worm.src = "./images/worm24.jpg"
                                                            h6.textContent = "This one";
                                                            h6.addEventListener('click', function() {
                                                                worm.src = "./images/worm25.jpg"
                                                                h6.textContent = "And This Last one";
                                                              });
                                                          });
                                                      });
                                                  });
                                              });
                                          });
                                      });
                                  });
                              });
                          });
                      });
                  });
            
          });
       });
  });
 