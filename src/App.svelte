<script>
  let total =0;
  let console = 0;
  let state =null;
  function resolveState(){

  }
  function setOperation(operation){

  }
  function setValue(value){

  }
  function equal(){

  }

</script>



<div class="container">
  <div class="calculator">
    <div class="first-row">
      <input type="text" bind:value={console}>
    </div>
    <div class="second-row">
      <button class="btn btn-ghost">AC</button>
      <button class="btn btn-ghost">+/-</button>
      <button class="btn btn-ghost">.</button>
      <button class="btn btn-warning">/</button>
    </div>

    <div class="third-row">
      <button class="btn">9</button>
      <button class="btn">8</button>
      <button class="btn">7</button>
      <button class="btn btn-warning"></button>
    </div>

    <div class="forth-row">
      <button class="btn">6</button>
      <button class="btn">5</button>
      <button class="btn">4</button>
      <button class="btn btn-warning"></button>
    </div>

    <div class="fifth-row">
      <button class="btn">3</button>
      <button class="btn">2</button>
      <button class="btn">1</button>
      <button class="btn btn-warning"></button>
    </div>

    <div class="sixth-row">
      <button class="btn">0</button>
      <button class="btn btn-warning">=</button>
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
    padding: 10px;
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
