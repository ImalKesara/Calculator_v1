<script>
  let total = 0;
  let console = "";
  let state =null;
  function resolveState(){
    switch(state){
      case 'add':
        total += parseFloat(console);
        console = "0";
        break;

      case 'substract':
      total -= parseFloat(console);
      console = "0";
      break;

      case 'multiply':
      total *= parseFloat(console);
      console = "0";
      break;

      case 'divide':
      total /= parseFloat(console);
      console = "0";
      break;

      default:
      total = parseFloat(console);
      console = "0";
      break;


    }

  }
  function setOperation(operation){
    resolveState();
    state = operation;
  }
  function setValue(value){
    if(console.toString() == "0" || state == "equal"){
      console = "";
    }

    if(value == "C"){
      total =0;
      state = null;
      console = ""
      return
    }

    console = console + value;

  }
  function equal(){
    resolveState()
    console = total.toString();
    state = "equal"
  }

</script>


<div class="fix">

<div class="container  shadow-md">
  <div class="calculator backdrop-blur-md bg-white/60">
    <div class="first-row">
      <input type="text" bind:value={console}>
    </div>
    <div class="second-row">
      <button class="btn btn-warning" on:click={()=>{setOperation('C');}}>C</button>
      <button class="btn btn-warning">💀</button>
      <button class="btn btn-warning">❤️</button>
      <button class="btn btn-warning" on:click={()=>{setOperation('divide');}}> &divide</button>
    </div>

    <div class="third-row">
      <button class="btn btn-warning btn-circle" on:click={()=>{setValue(9);}}>9</button>
      <button class="btn btn-warning" on:click={()=>{setValue(8);}}>8</button>
      <button class="btn btn-warning" on:click={()=>{setValue(7);}}>7</button>
      <button class="btn btn-warning" on:click={()=>{setOperation('multiply');}}> &times; </button>
    </div>

    <div class="forth-row">
      <button class="btn btn-warning" on:click={()=>{setValue(6);}}>6</button>
      <button class="btn btn-warning" on:click={()=>{setValue(5);}}>5</button>
      <button class="btn btn-warning" on:click={()=>{setValue(4);}}>4</button>
      <button class="btn btn-warning" on:click={()=>{setOperation('add');}}> + </button>
    </div>

    <div class="fifth-row">
      <button class="btn btn-warning btn-xs sm:btn-sm md:btn-md lg:btn-lg" on:click={()=>{setValue(3);}}>3</button>
      <button class="btn btn-warning" on:click={()=>{setValue(2);}}>2</button>
      <button class="btn btn-warning " on:click={()=>{setValue(1);}}>1</button>
      <button class="btn btn-warning" on:click={()=>{setOperation('substract');}}> - </button>
    </div>

    <div class="sixth-row">
      <button class="btn btn-warning" on:click={()=>{setValue(0);}}>0</button>
      <button class="btn btn-error" on:click={()=>{equal();}}>=</button>
    </div>
  </div>
</div>
</div>


<style global lang="postcss">

  @tailwind base;
  @tailwind components;
  @tailwind utilities;


.fix{
  background-color: #0093E9;
background-image: linear-gradient(160deg, #0093E9 0%, #80D0C7 100%);

/* background-color: #FFDEE9;
background-image: linear-gradient(0deg, #FFDEE9 0%, #B5FFFC 100%); */


/* background-color: #8EC5FC;
background-image: linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%); */


  width: 100%;
  height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
} 

.container {
  
  max-width: 380px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.sixth-row button:first-child {
  display: grid;
  width: 200px; /* Half the original width */
  height: 60px;
  font-size: 20px;
  border-radius: 10px;
  color: white;
}

.sixth-row button:last-child {
  display: grid;
  width: 100px; /* Half the original width */
  height: 60px;
  font-size: 20px;
  border-radius: 10px;
  color: white;
}



.fifth-row button,.forth-row button,.third-row button,.second-row button{
  display: grid;
  width: 60px;
  height:60px;
  outline: none;
  font-size: 20px;
  border-radius: 10px;
  color: white;
}

.calculator {
  padding: 20px ;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 18px;
  border-radius: 10px;
}

.first-row {
  grid-column: 1 / 7;
  grid-row: 1;
}

.first-row input {
  background-color: white;
  outline: none;
  padding: 15px;
  width: 100%;
  height: 70px;
  border-radius: 10px;
}

.second-row,
.third-row,
.forth-row,
.fifth-row,
.sixth-row {
  display: grid;
  grid-column: 1 / 7;
  grid-auto-flow: column;
  justify-items: center;
  align-items: center;
  gap: 10px;
  font-family: sans-serif;
  font-weight: bold;
}

</style>

