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



<div class="container">
  <div class="calculator">
    <div class="first-row">
      <input type="text" bind:value={console}>
    </div>
    <div class="second-row">
      <button class="btn " on:click={()=>{setOperation('C');}}>C</button>
      <button class="btn ">+/-</button>
      <button class="btn ">.</button>
      <button class="btn btn-warning" on:click={()=>{setOperation('divide');}}> &divide</button>
    </div>

    <div class="third-row">
      <button class="btn" on:click={()=>{setValue(9);}}>9</button>
      <button class="btn" on:click={()=>{setValue(8);}}>8</button>
      <button class="btn" on:click={()=>{setValue(7);}}>7</button>
      <button class="btn btn-warning" on:click={()=>{setOperation('multiply');}}> &times; </button>
    </div>

    <div class="forth-row">
      <button class="btn" on:click={()=>{setValue(6);}}>6</button>
      <button class="btn" on:click={()=>{setValue(5);}}>5</button>
      <button class="btn" on:click={()=>{setValue(4);}}>4</button>
      <button class="btn btn-warning" on:click={()=>{setOperation('add');}}> + </button>
    </div>

    <div class="fifth-row">
      <button class="btn" on:click={()=>{setValue(3);}}>3</button>
      <button class="btn" on:click={()=>{setValue(2);}}>2</button>
      <button class="btn" on:click={()=>{setValue(1);}}>1</button>
      <button class="btn btn-warning" on:click={()=>{setOperation('substract');}}> - </button>
    </div>

    <div class="sixth-row">
      <button class="btn" on:click={()=>{setValue(0);}}>0</button>
      <button class="btn btn-error" on:click={()=>{equal();}}>=</button>
    </div>
  </div>
</div>








<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  

  .container{

    max-width: 350px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
   
  }

  .calculator{
    background-color: white;
    padding: 15px;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 10px;
  }

  .first-row {
    grid-column: 1 / 7;
    grid-row: 1;

  }

  .first-row input{
    outline: none;
    padding: 15px;
    width: 100%;
    height: 50px;
  }

  .second-row,.third-row,.forth-row,.fifth-row,.sixth-row{
    display: grid;
    grid-column: 1 / 7;
    grid-auto-flow: column;
    gap: 10px;
  }
  


</style>
