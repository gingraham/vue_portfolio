<template>
   <div class="logo-slider">
  <div class="logo-slide-track">
    <div class="logo-slide">
      <img src="https://cdn.freebiesupply.com/logos/thumbs/2x/mcdonalds-black-logo.png" alt="">
    </div>
    <div class="logo-slide">
      <img src="https://cdn.freebiesupply.com/images/large/2x/starbucks-logo-black-and-white.png" alt="">
    </div>
    <div class="logo-slide">
      <img src="https://cdn.freebiesupply.com/logos/large/2x/general-electric-black-logo-png-transparent.png" alt="">
    </div>
    <div class="logo-slide">
      <img src="https://cdn.freebiesupply.com/logos/large/2x/nfl-logo-png-transparent.png" alt="">
    </div>
    <div class="logo-slide">
      <img src="https://cdn.freebiesupply.com/logos/large/2x/mercedes-benz-6-logo-png-transparent.png" alt="">
    </div>
    <div class="logo-slide">
      <img src="https://cdn.freebiesupply.com/logos/large/2x/hogwarts-logo-png-transparent.png" alt="">
    </div>
    <div class="logo-slide">
      <img src="https://cdn.freebiesupply.com/logos/thumbs/2x/mcdonalds-black-logo.png" alt="">
    </div>
    <div class="logo-slide">
      <img src="https://cdn.freebiesupply.com/images/large/2x/starbucks-logo-black-and-white.png" alt="">
    </div>
    <div class="logo-slide">
      <img src="https://cdn.freebiesupply.com/logos/large/2x/general-electric-black-logo-png-transparent.png" alt="">
    </div>
    <div class="logo-slide">
      <img src="https://cdn.freebiesupply.com/logos/large/2x/nfl-logo-png-transparent.png" alt="">
    </div>
    <div class="logo-slide">
      <img src="https://cdn.freebiesupply.com/logos/large/2x/mercedes-benz-6-logo-png-transparent.png" alt="">
    </div>
    <div class="logo-slide">
      <img src="https://cdn.freebiesupply.com/logos/large/2x/hogwarts-logo-png-transparent.png" alt="">
    </div>
    <div class="logo-slide">
      <img src="https://cdn.freebiesupply.com/logos/thumbs/2x/mcdonalds-black-logo.png" alt="">
    </div>
    <div class="logo-slide">
      <img src="https://cdn.freebiesupply.com/images/large/2x/starbucks-logo-black-and-white.png" alt="">
    </div>
    
  </div>
</div>
</template>

<style>

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-150px * 7));
  }
}
.logo-slider-container{
    align-items: center;
  justify-content: center;
}
.logo-slider {
  height: 100px;
  margin: auto;
  overflow: hidden;
  position: relative;
  
}
.logo-slider .logo-slide-track {
  animation: scroll 40s linear infinite;
  display: flex;
  /* width: calc(150px * 14); */
} 
.logo-slider .logo-slide {
  height: 100px;
  width: 250px;
}
</style>