

let chooseElement = null;

const move = function() {
  const elements = document.querySelectorAll('.element');

  elements.forEach(element => {
    element.addEventListener("mousedown", () => {
      element.style.position = "absolute";
      chooseElement = element;
      let timeoutId;
      document.onmousemove = (e) => {
       
        if (chooseElement) {
          var x = e.pageX;
          var y = e.pageY;

          chooseElement.style.left = x + "px";
          chooseElement.style.top = y + "px";

          element.innerHTML=`${["X:"+x,"Y:"+y]}`

           
          timeoutId=setTimeout(function(){
            const red = Math.floor(Math.random() * x);
          
            const green = Math.floor(Math.random() *  y );
            const blue = Math.floor(Math.random() *  x);
          
  
            const randomColor = `rgb(${red}, ${green}, ${blue})`;
             chooseElement.style.backgroundColor = randomColor;

          },50)
         

        

    
        }
      };
    });
  });

  document.onmouseup = function(e) {

    chooseElement = null;
  };
};

