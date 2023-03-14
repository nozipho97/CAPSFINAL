<template>
  <div class="contact">
    <div class="container" style="display: flex; boader-size:relational;">
      <div class="row">
        <div class="col">
         
            <p>  Nkenjane Street 34, Cape Town, South Africa, 7784
              Address

              068 237 0960
              Mobile
              Basic info

              Rating · 4.8 (29 Reviews)

              Closed now
              Hours

              Price Range · $
              Price

              Dine-in · Outdoor seating · In-store pickup
              Services </p>
        </div>
        <div class="col">
          <img src="https://i.postimg.cc/7YZF4Kxd/front3.jpg" alt="">
        </div>
        <div class="col">
          
<header>
</header>
  <div class="container">
      <h1>Simple Contact Form</h1>

<form>

  <p class="name">
    <input name="name" type="text" class="feedback-input" placeholder="Name" id="name" />
  </p>

  <p class="email">
    <input name="email" type="text" class="feedback-input" id="email" placeholder="Email" />
  </p>

  <p class="text">
    <textarea name="text" class="feedback-input" id="comment" placeholder="Comment"></textarea>
  </p>


  <div class="submit">
    <input type="submit" value="SEND!" id="button-blue" />
  </div>
  <h3>Created by Sam Headland | Website: <a href="https://www.samheadland.co.uk"></a>samheadland.co.uk</h3>
</form>
  </div>



        </div>
      </div>
    </div>
  </div>
</template>

<script>



</script>

<style scoped>

body {
  width: 100%;
  margin: 0;
  font-family: sans-serif;
  background: url('https://media.istockphoto.com/id/1273557779/photo/patio-restaurant.jpg?s=612x612&w=is&k=20&c=3BY5-72ACJ5Id8-Qzrh0UK-xVUN2y4BpeSduJHgkmGU=');
  background-size: cover;
  font-family: 'Cabin', sans-serif;
}

header {
  background: #000;
  margin: 0 auto;
  width: 100%;
  padding: 0;
  opacity: 0.7;
}

h1 {
  text-align: center;
  color: black;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin: 0;
  font-family: 'Cabin', sans-serif;
  font-size: 25px;
  padding: 30px;
}

h3 {
  text-align: center;
  color: black;
  margin: 0;
  font-family: 'Cabin', sans-serif;
  padding: 10px;
}

h3 a {
  text-decoration: none;
  color: #22A7F0;
}

.container {
  height: auto;
  width: 50%;
  font-family: 'Cabin', sans-serif;
  margin: 0 auto;
  margin-top: 40px;
  display: block;
  background: white;
  padding: 20px;
  border-radius: 15px;
}

form {
  font-family: 'Cabin', sans-serif;
  padding: 0;
  width: 90%;
  border-radius: 15px;
  margin: 0 auto;
  margin-bottom: 20px;
}

.feedback-input {
  color: #000;
  font-family: 'Cabin', sans-serif;
  font-weight: 400;
  font-size: 18px;
  border-radius: 0;
  margin-right: 0;
  line-height: 22px;
  background-color: none;
  padding: 13px 13px 13px 13px;
  margin-bottom: 10px;
  width: 100%;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -ms-box-sizing: border-box;
  box-sizing: border-box;
  border-bottom: 2px solid #22A7F0;
  border-top: none;
  border-left: none;
  border-right: none;
}

.feedback-input:focus {
  box-shadow: 0;
  color: #3498db;
  transition: .4s ease;
  outline: none;
  border-bottom: 2px solid black;
  padding: 13px 13px 13px 13px;
}

.focused {
  color: #30aed6;
  border: #30aed6 solid 3px;
}

textarea {
  width: 100%;
  height: 150px;
  line-height: 150%;
  resize: vertical;
}

#button-blue {
  font-family: 'Cabin', sans-serif;
  font-weight: 400;
  width: 100%;
  border: none;
  cursor: pointer;
  background-color: #22A7F0;
  color: white;
  font-size: 24px;
  padding-top: 22px;
  padding-bottom: 22px;
  margin-top: -4px;
  font-weight: 700;
  transition: .3s ease;
}

#button-blue:hover {
  background-color: rgba(0, 0, 0, 0);
  color: black;
  background: #22A7F0;
}

.submit:hover {
  color: #22A7F0;
}



</style>