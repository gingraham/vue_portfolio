<template>
  <div class="emails">
    <div class="email-col slider">
      <input type="radio" name="slider" id="item-1" value="card-1" v-model="selectedCard" checked>
      <input type="radio" name="slider" id="item-2" value="card-2" v-model="selectedCard">
      <input type="radio" name="slider" id="item-3" value="card-3" v-model="selectedCard">
      <div class="cards">
        <label class="card" for="item-1" id="card-1">
          <img src="../assets/images/nba_3.png" alt="card">
        </label>
        <label class="card" for="item-2" id="card-2">
          <img src="../assets/images/quarry_2.png" alt="card">
        </label>
        <label class="card" for="item-3" id="card-3">
          <img src="../assets/images/midnight_suns.png" alt="card">
        </label>
      </div>
    </div>
    <div class="email-col email-text">
      <div v-show="selectedCard === 'card-1'" class="text">
        <p>I have five years of experience as the "Email Guy" at 2K Games, building and managing email campaigns for prestigious studios like the NBA, WWE, Firaxis, and Nintendo.</p>
      </div>
      <div v-show="selectedCard === 'card-2'" class="text">
        <p>I spearheaded the development of highly engaging email campaigns that reached millions of recipients across 200 countries supported in multiple languages using technologies such as Litmus, Mailchimp, and Salesforce AmpScript and Marketing Cloud.</p>
      </div>
      <div v-show="selectedCard === 'card-3'" class="text">
        <p>I am proud to have contributed to the success of the NBA franchise by designing and implementing a comprehensive "welcome journey" that enhanced user experience and increased customer engagement.</p>
      </div>
    </div>
  </div>
</template>

<style>
.emails {
  display: flex;
  flex-wrap: wrap;
  max-width: 60rem;
  height: 80vh;
  align-items: flex-start;
  padding: 30px 10px;
  font-family: "DM Sans", sans-serif;
  transition: background 0.4s ease-in;
}

.email-col {
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
}

.email-text {
  margin-top: 8em;
}

@media only screen and (max-width: 768px) {
  .email-text {
    margin-top: 0;
  }
}

@media screen and (min-width: 768px) {
  .emails {
    display: flex;
    flex-wrap: nowrap;
    align-items: flex-start;
  }
  .email-col {
    flex: 1;
  }
}

input[type="radio"] {
  display: none;
}

.cards {
  position: relative;
  width: 90%;
  height: 100%;
  margin-bottom: 20px;
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

img {
  width: 100%;
  height: 100%;
  border-radius: 10px;
}

#item-1:checked ~ .cards #card-3,
#item-2:checked ~ .cards #card-1,
#item-3:checked ~ .cards #card-2 {
  transform: translateX(-40%) scale(0.8);
  opacity: 0.4;
  z-index: 0;
}

#item-1:checked ~ .cards #card-2,
#item-2:checked ~ .cards #card-3,
#item-3:checked ~ .cards #card-1 {
  transform: translateX(40%) scale(0.8);
  opacity: 0.4;
  z-index: 0;
}

#item-1:checked ~ .cards #card-1,
#item-2:checked ~ .cards #card-2,
#item-3:checked ~ .cards #card-3 {
  transform: translateX(0) scale(1);
  opacity: 1;
  z-index: 1;
}

#item-1:checked ~ .cards #card-1 img,
#item-2:checked ~ .cards #card-2 img,
#item-3:checked ~ .cards #card-3 img {
  box-shadow: 0px 0px 5px 0px rgba(81, 81, 81, 0.47);
}

.text {
  opacity: 0;
  transition: opacity 0.3s ease;
  animation-name: fadeIn;
  animation-duration: 0.5s;
  animation-delay: 0.2s;
  animation-fill-mode: forwards;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const selectedCard = ref('card-1');
    const changeSelectedCard = (event) => {
      selectedCard.value = event.target.value;
    }

    return {
      selectedCard,
      changeSelectedCard
    };
  }
};
</script>
