<style>
.emails{
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 70vh;
  align-items: flex-start;
  padding: 30px 10px;
  font-family: "DM Sans", sans-serif;
  transition: background 0.4s ease-in;
}

.email-col{
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  height: 100%;
}
.email-text{
  margin-top: 8em;
}
@media screen and (min-width: 800px) {
  .email-col {
    flex: 1
  }
}


input[type=radio] {
  display: none;
}

.card {
  position: absolute;
  width: 60%;
  height: 100%;
  left: 0;
  right: 0;
  margin: auto;
  transition: transform 0.4s ease;
  cursor: pointer;
}

.slider {
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.cards {
  position: relative;
  width: 80%;
  height: 100%;
  margin-bottom: 20px;
}

img {
  width: 100%;
  height: 100%;
  border-radius: 10px;
  -o-object-fit: cover;
     object-fit: cover;
}

#item-1:checked ~ .cards #song-3, #item-2:checked ~ .cards #song-1, #item-3:checked ~ .cards #song-2 {
  transform: translatex(-40%) scale(0.8);
  opacity: 0.4;
  z-index: 0;
}

#item-1:checked ~ .cards #song-2, #item-2:checked ~ .cards #song-3, #item-3:checked ~ .cards #song-1 {
  transform: translatex(40%) scale(0.8);
  opacity: 0.4;
  z-index: 0;
}

#item-1:checked ~ .cards #song-1, #item-2:checked ~ .cards #song-2, #item-3:checked ~ .cards #song-3 {
  transform: translatex(0) scale(1);
  opacity: 1;
  z-index: 1;
}
#item-1:checked ~ .cards #song-1 img, #item-2:checked ~ .cards #song-2 img, #item-3:checked ~ .cards #song-3 img {
  box-shadow: 0px 0px 5px 0px rgba(81, 81, 81, 0.47);
}

#item-2:checked ~ .player #test {
  transform: translateY(0);
}

#item-2:checked ~ .player #test {
  transform: translateY(-40px);
}

#item-3:checked ~ .player #test {
  transform: translateY(-80px);
}
  </style>
<template>

  <div class="slider">
    <input type="radio" name="slider" id="item-1" checked>
    <input type="radio" name="slider" id="item-2">
    <input type="radio" name="slider" id="item-3">
  <div class="cards">
    <label class="card" for="item-1" id="song-1">
      <img src="https://images.unsplash.com/photo-1530651788726-1dbf58eeef1f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=882&q=80" alt="song">
    </label>
    <label class="card" for="item-2" id="song-2">
      <img src="https://images.unsplash.com/photo-1559386484-97dfc0e15539?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80" alt="song">
    </label>
    <label class="card" for="item-3" id="song-3">
      <img src="https://images.unsplash.com/photo-1533461502717-83546f485d24?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60" alt="song">
    </label>
  </div>
 
</div>
</template>
<!-- <script setup>
  $('input').on('change', function() {
  $('body').toggleClass('blue');
});

</script> -->