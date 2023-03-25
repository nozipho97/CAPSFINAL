<template>
  <div class="contain">

    <div class="wrapper">
  
      <div class="form">
        <h4>GET IN TOUCH</h4>
        <h2 class="form-headline">Send us a message</h2>
        <form id="submit-form" action="https://formspree.io/f/xzbqvlgp"  method="post">
          <p>
            <input id="name" class="form-input" type="text" placeholder="Your Name*">
            <small class="name-error"></small>
          </p>
          <p>
            <input id="email" class="form-input" type="email" placeholder="Your Email*">
            <small class="name-error"></small>
          </p>
          <p class="full-width">
            <input id="company-name" class="form-input" type="text" placeholder="Company Name*" required>
            <small></small>
          </p>
          <p class="full-width">
            <textarea  minlength="10" id="message" cols="30" rows="7" placeholder="Your Message*" required></textarea>
            <small></small>
          </p>
          <p class="full-width">
            <input type="checkbox" id="checkbox" name="checkbox" checked> Yes, I would like to receive communications by call / email about Restuarant's services.
          </p>
          <p class="full-width">
            <input type="submit" class="submit-btn" value="Submit" onclick="checkValidations()">
            <button class="reset-btn" onclick="reset()">Reset</button>
          </p>
        </form>
      </div>
  
      <div class="contacts contact-wrapper">
  
        <ul>
          <li>We're people driven and provide high profile <span class="highlight-text-grey">service</span> for our clients. Ready to know
            how we can help you?</li>
          <span class="hightlight-contact-info">
            <li class="email-info"><i class="fa fa-envelope" aria-hidden="true"></i> seeklounge@gmail.com</li>
            <li><i class="fa fa-phone" aria-hidden="true"></i> <span class="highlight-text">+27 68 652 2900</span></li>
          </span>
          <i class="fa-brands fa-facebook" href="https://www.facebook.com/seekcpt/about_profile_transparency"></i>
          <i class="fa-brands fa-whatsapp" href="#"></i>
          <i class="fa-brands fa-instagram" href="https://www.instagram.com/seekcpt/"></i>
           
        </ul>

      </div>
    </div>
  </div>
</template>

<script>



</script>

<style scoped>
* {
  box-sizing: border-box;
}

body {
  padding: 1rem;
  color: #212d31;
  font-family: Georgia, 'Times New Roman', Times, serif;
}

.contain {
  background-color: sandybrown;
  max-width: 1170px;
  margin-left: auto;
  margin-right: auto;
  padding: 1em;
}

div.form {
  background-color: #eee;
}
.contact-wrapper {
  margin: auto 0;
}

.submit-btn {
  float: left;
}
.reset-btn {
  float: right;
}

.form-headline:after {
  content: "";
  display: block;
  width: 10%;
  padding-top: 10px;
  border-bottom: 3px solid saddlebrown;
}

.highlight-text {
  color: saddlebrown;
}

.hightlight-contact-info {
  font-weight: 700;
  font-size: 22px;
  line-height: 1.5;
}

.highlight-text-grey {
  font-weight: 500;
}

.email-info {
    margin-top: 20px;
}

::-webkit-input-placeholder { /* Chrome */
  font-family: 'Roboto', sans-serif;
}

.required-input {
  color: black;
}
@media (min-width: 600px) {
  .contain {
    padding: 0;
  }
}

h3,
ul {
  margin: 0;
}

h3 {
  margin-bottom: 1rem;
}

.form-input:focus,
textarea:focus{
  outline: 1.5px solid saddlebrown;
}

.form-input,
textarea {
  width: 100%;
  border: 1px solid #bdbdbd;
  border-radius: 5px;
}

.wrapper > * {
  padding: 1em;
}
@media (min-width: 700px) {
  .wrapper {
    display: grid;
    grid-template-columns: 2fr 1fr;
  }
  .wrapper > * {
    padding: 2em 2em;
  }
}

ul {
  list-style: none;
  padding: 0;
}

.contacts {
  color: #212d31;
}

.form {
  background: #fff;
}

form {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
}
form label {
  display: block;
}
form p {
  margin: 0;
}

.full-width {
  grid-column: 1 / 3;
}

button,
.submit-btn,
.form-input,
textarea {
  padding: 1em;
}

button, .submit-btn {
  background: transparent;
  border: 1px solid saddlebrown;
  color: sa;
  border-radius: 15px;
  padding: 5px 20px;
  text-transform: uppercase;
}
button:hover, .submit-btn:hover,
button:focus , .submit-btn:focus{
  background: saddlebrown;
  outline: 0;
  color: #eee;
}
.error {
  color: saddlebrown;
}
ul i {
  font-size: 1.5em;
  color:white;
  margin: 0 10px;
  transition: 0.5s;
  justify-content: space-evenly;
  cursor: pointer;
}
ul i:hover {
  transform: translateY(-10px);
}

</style>