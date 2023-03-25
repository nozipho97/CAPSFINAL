<template>
  <div class="container-fluid">
  <div class="showcase-area" id="showcase">
      <h1 class="main-title" id="home">SEEK YOUR LIFESTYLE</h1>
      
      <a href="/products" class="btn btn-light">Menu</a>
  </div>

  <div class="container">
    <div class="row">
      <div class="col" style="height: 10px;">
       <p></p>
      </div>
      <div class="col">
        <body id="wwrapper">
          <div class="wrapper" id=wwrapper>
                  <h2>
                   <div class="rw-words rw-words-2">
                          <span>THINK.</span>
                          <span>EAT.</span>
                          <span>RELAX.</span>
                          <span>DANCE.</span>
                          <span>ENJOY.</span>
                      </div>
                  </h2>
          </div>
      </body>
      </div>
      <div class="col">
        <!-- <img src="https://i.postimg.cc/Y9JfqQx7/logo-seek-fococlipping-standard.png" alt=""> -->
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Home',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container-fluid{
  min-height: 90vh;
  overflow-x: hidden !important;
}
@import url('https://fonts.googleapis.com/css?family=Roboto:700');
body {
    background-color: sandybrown;
}
.wrapper{
	width: 50%;
	position: absolute;
	font-family: 'Roboto';
    font-size : 4vh;
    background-color: sandybrown;
}
.rw-words span{
	position: absolute;
    left: 80%;
    top: 820%;
	opacity: 0;
	overflow: hidden;
	width: 100%;
	/* color: black; */
    /* background-color:black; */
}
.rw-sentence span{
	color: #444;
	white-space: nowrap;
	font-size: 200%;
	font-weight: normal;
}
.rw-words-2 span{
	animation: rotateWordsSecond 5s linear infinite 0s;
}
.rw-words span:nth-child(2) { 
	animation-delay: 1s; 
	color: saddlebrown;
}
.rw-words span:nth-child(3) { 
	animation-delay: 2s; 
	color: saddlebrown;	
}
.rw-words span:nth-child(4) { 
	animation-delay: 3s; 
	color: saddlebrown;
}
.rw-words span:nth-child(5) { 
	animation-delay: 4s; 
	color: saddlebrown;
}
.rw-words span:nth-child(6) {  
	animation-delay: 5s; 
	color: saddlebrown;
}
@keyframes rotateWordsSecond {
    0% { opacity: 2; animation-timing-function: ease-out; width: 0px; }
    10% { opacity: 1; width: 20%; }
	20% { opacity: 1; width: 30%; }
    27% { opacity: 0; width: 50%; }
    /* 100% { opacity: 0; } */
}


.main-title {
  text-transform: uppercase;
  margin-top: 1.5em;
}



h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
p{
  text-align: center;
  margin: 10px;
  padding: 1.5px;
  font-size: 1.8rem;
  font-weight: bold;
  font-family: Georgia, 'Times New Roman', Times, serif;
  color: sandybrown;
}
img{
  
    box-shadow: 2px 2px 10px yellow;
  
  
}
.col{
  margin-top: 7px;
}

</style>























