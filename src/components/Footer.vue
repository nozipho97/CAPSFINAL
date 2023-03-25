<template>
    <footer>
      <p>&copy;2020 SEEK LOUNGE | All Rights Reserved</p>
    </footer>
     
  </template>
  
  <script>

  export default {
    
  }
  </script>
  
    
  
  <style scoped>
      footer {
        position: relative;
        background-color: sandybrown;
        min-height: 3%;
        width: 100%;
        padding: 1em 3em;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
       
        
      }
      footer p {
        color: saddlebrown;
        text-align: center;
        margin-top: 15px;
        margin-bottom: 10px;
        font-size: 1rem;
      }
      @media screen and (min-width: 300px) and (max-width: 720px) {
        footer {
          display: grid;
          grid-template-columns: auto auto auto;
        }
      }
  </style >
    