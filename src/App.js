import './App.css';

function App() {

  
  const array = [{
    name : "WMATIC",
    value : 1000,
    dolor : 1000.51,
  },{
    name : "USDT",
    value : 1000,
    dolor : 1000.51,
  },{
    name : "USDC",
    value : 1000,
    dolor : 1000.51,
  },{
    name : "GONE",
    value : 1000,
    dolor : 1000.51,
  },{
    name : "POLYDOGE",
    value : 1000,
    dolor : 1000.51,
  },{
    name : "MPT",
    value : 1000,
    dolor : 1000.51,
  },{
    name : "MLGE",
    value : 1000,
    dolor : 1000.51,
  },{
    name : "BPT",
    value : 1000,
    dolor : 1000.51,
  },{
    name : "MPV",
    value : 1000,
    dolor : 1000.51,
  }]

  return (
    <div>
    <nav>
    <div class="nav_left">
        <img src="https://github.com/user-attachments/assets/0d256f86-bb9b-4d3d-98ea-56d47bc586fa"/>
    </div>
    <a href="#">MAIN</a>
    <a href="#">GAME</a>
    <a href="#">SHOP</a>
    <a href="#">EXPLORER</a>
    <a href="#">CLUB</a>
    <a href="#">EARN</a>

    <div class="nav_right">
        <a href="#">LOG</a>
        <a href="#">ENG</a>
    </div>    
</nav>

<header>
    <div class="wallet-status_header">WALLET STATUS</div>
</header>

<body>
 <div class="container">
    <div class="row">
    {array.map((item, index) => 
    <div class="outer-box" key={index}>
    <div className='token-info__box'>
      <img src='https://github.com/user-attachments/assets/ad0a26d2-59d9-48ff-935b-f4d509d9e42f'/>
      <p>{item.name}</p>
    </div>

    <div className='token-value__box'>
      <p className='token-value__number'>{item.value}</p>
      <p className='token-value__dolor'>${item.dolor}</p>
    </div>
  </div>)}  
    </div>
</div>
</body>

<footer>
</footer>
</div>
  );
}

export default App;
