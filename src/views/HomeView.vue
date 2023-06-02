<script setup>
import TheWelcome from '../components/TheWelcome.vue'
import EmailSlider from '../components/EmailSlider.vue'
import LogoSlider from '../components/LogoSlider.vue';
import ProjectsCard from '../components/ProjectsCard.vue'
</script>

<template>
  <div class="container">
    <header class="primary-header flex">
      <button  class="mobile-nav-toggle" @click="toggleNav" :data-visible="isVisible"><span class="sr-only">Menu</span>
      </button>
      <!-- navigation -->
      <nav>
        <ul id="primary-navigation" :data-visible="isVisible" class="primary-navigation underline-indicators flex" style="min-height: 0;">
          <li class="active"><a href="#" class="uppercase text-white letter-spacing-2"><span aria-hidden="true">00.</span>
              Home</a></li>
          <li><a href="#" class="uppercase text-white letter-spacing-2"><span aria-hidden="true">01.</span> About</a></li>
          <li><a href="#" class="uppercase text-white letter-spacing-2"><span aria-hidden="true">02.</span> Web</a></li>
          <li><a href="#" class="uppercase text-white letter-spacing-2"><span aria-hidden="true">03.</span> Games</a></li>
          <li>
           <!-- <button class="nav-button">
        resume
            </button> -->
          </li>
        </ul>
      </nav>
    </header>
<!-- navigation -->
<div class="wrapper">
  <div class="lft side-bar">
  <ul class="social-icons">
    <!-- <li class="logo">
      <a href="#" class="social-link">
        <span class="link-text logo-text">Fireship</span>
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fad"
          data-icon="angle-double-right"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          class="svg-inline--fa fa-angle-double-right fa-w-14 fa-5x"
        >
          <g class="fa-group">
            <path
              fill="currentColor"
              d="M224 273L88.37 409a23.78 23.78 0 0 1-33.8 0L32 386.36a23.94 23.94 0 0 1 0-33.89l96.13-96.37L32 159.73a23.94 23.94 0 0 1 0-33.89l22.44-22.79a23.78 23.78 0 0 1 33.8 0L223.88 239a23.94 23.94 0 0 1 .1 34z"
              class="fa-secondary"
            ></path>
            <path
              fill="currentColor"
              d="M415.89 273L280.34 409a23.77 23.77 0 0 1-33.79 0L224 386.26a23.94 23.94 0 0 1 0-33.89L320.11 256l-96-96.47a23.94 23.94 0 0 1 0-33.89l22.52-22.59a23.77 23.77 0 0 1 33.79 0L416 239a24 24 0 0 1-.11 34z"
              class="fa-primary"
            ></path>
          </g>
        </svg>
      </a>
    </li> -->
    <li class="social-item">
      <a href="#" class="social-link">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0,0,256,256" width="50px" height="50px" fill-rule="nonzero"><g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(5.12,5.12)"><path d="M25,1.05078c-0.2175,0 -0.43414,0.06898 -0.61914,0.20898l-23,17.95117c-0.43,0.34 -0.50992,0.9682 -0.16992,1.4082c0.34,0.43 0.9682,0.50992 1.4082,0.16992l1.38086,-1.07812v26.28906c0,0.55 0.45,1 1,1h14v-18h12v18h14c0.55,0 1,-0.45 1,-1v-26.28906l1.38086,1.07812c0.19,0.14 0.39914,0.21094 0.61914,0.21094c0.3,0 0.58906,-0.13086 0.78906,-0.38086c0.34,-0.44 0.26008,-1.0682 -0.16992,-1.4082l-23,-17.95117c-0.185,-0.14 -0.40164,-0.20898 -0.61914,-0.20898zM35,5v1.05078l6,4.67969v-5.73047z"></path></g></g></svg>
      </a>
    </li>
    <li class="social-item">
      <a href="https://www.linkedin.com/in/gingraham/" target="_blank" class="social-link">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0,0,256,256" width="50px" height="50px" fill-rule="nonzero"><g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(5.12,5.12)"><path d="M41,4h-32c-2.76,0 -5,2.24 -5,5v32c0,2.76 2.24,5 5,5h32c2.76,0 5,-2.24 5,-5v-32c0,-2.76 -2.24,-5 -5,-5zM17,20v19h-6v-19zM11,14.47c0,-1.4 1.2,-2.47 3,-2.47c1.8,0 2.93,1.07 3,2.47c0,1.4 -1.12,2.53 -3,2.53c-1.8,0 -3,-1.13 -3,-2.53zM39,39h-6c0,0 0,-9.26 0,-10c0,-2 -1,-4 -3.5,-4.04h-0.08c-2.42,0 -3.42,2.06 -3.42,4.04c0,0.91 0,10 0,10h-6v-19h6v2.56c0,0 1.93,-2.56 5.81,-2.56c3.97,0 7.19,2.73 7.19,8.26z"></path></g></g></svg>
        
      </a>
    </li>
  
    <li class="social-item">
      <a href="https://codepen.io/gingraham/pens/showcase" target="_blank" class="social-link">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0,0,256,256" width="50px" height="50px" fill-rule="nonzero"><g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(5.12,5.12)"><path d="M25,4l-21,13.34375v15.30859l21,13.34766l21,-13.34375v-15.3125zM25,29.18359l-5.93359,-4.11328l5.93359,-4.04687l5.93359,4.04688zM27,17.60547v-7.65625l13.42969,8.53516l-6.01953,4.17188zM23,17.60547l-7.41016,5.05078l-6.01953,-4.17187l13.42969,-8.53516zM12.09375,25.04297l-4.09375,2.78906v-5.62891zM15.57031,27.45313l7.42969,5.15234v7.44531l-13.41016,-8.52344zM27,32.60547l7.42969,-5.15234l5.98047,4.07422l-13.41016,8.52344zM37.90625,25.04297l4.09375,-2.83984v5.62891z"></path></g></g></svg>
      </a>
    </li>

    <li class="social-item">
      <a href="https://github.com/gingraham" target="_blank" class="social-link">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0,0,256,256" width="60px" height="60px" fill-rule="nonzero"><g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(8.53333,8.53333)"><path d="M15,3c-6.627,0 -12,5.373 -12,12c0,5.623 3.872,10.328 9.092,11.63c-0.056,-0.162 -0.092,-0.35 -0.092,-0.583v-2.051c-0.487,0 -1.303,0 -1.508,0c-0.821,0 -1.551,-0.353 -1.905,-1.009c-0.393,-0.729 -0.461,-1.844 -1.435,-2.526c-0.289,-0.227 -0.069,-0.486 0.264,-0.451c0.615,0.174 1.125,0.596 1.605,1.222c0.478,0.627 0.703,0.769 1.596,0.769c0.433,0 1.081,-0.025 1.691,-0.121c0.328,-0.833 0.895,-1.6 1.588,-1.962c-3.996,-0.411 -5.903,-2.399 -5.903,-5.098c0,-1.162 0.495,-2.286 1.336,-3.233c-0.276,-0.94 -0.623,-2.857 0.106,-3.587c1.798,0 2.885,1.166 3.146,1.481c0.896,-0.307 1.88,-0.481 2.914,-0.481c1.036,0 2.024,0.174 2.922,0.483c0.258,-0.313 1.346,-1.483 3.148,-1.483c0.732,0.731 0.381,2.656 0.102,3.594c0.836,0.945 1.328,2.066 1.328,3.226c0,2.697 -1.904,4.684 -5.894,5.097c1.098,0.573 1.899,2.183 1.899,3.396v2.734c0,0.104 -0.023,0.179 -0.035,0.268c4.676,-1.639 8.035,-6.079 8.035,-11.315c0,-6.627 -5.373,-12 -12,-12z"></path></g></g></svg>
      </a>
    </li>
  </ul>
</div>
      <div class="content-container">
        <div class="content marquee">
          <h1 class="text-accent fs-500 ff-sans-cond">
         Hello, <br>
          <span>I'm</span> <span class="text-white fs-800 ff-sans-cond" style="font-weight: 600;">Gerald Ingraham</span> <span>and</span><br>
          <span class="text-accent fs-700 ff-sans-cond" style="font-weight: 600;">I build digital marketing technology.</span><br><br>
          <span class="text-accent fs-400 ff-sans-normal blurb">
          
          </span>
        </h1>
        <p class="blurb">
          A software engineer that specializes in building sites, applications and emails that increase ROI. I'm an ambassador for diversity and inclusion in tech and a lover of all things game related.
        </p>
        <button>
          Get an Email
        </button>
        <br><br><br>
        </div>
        <div class="content email">
         <div class="content-header">
          <h1 class="text-white fs-800 ff-sans-cond" style="font-weight: 600;"> EMAIL STUFF
        </h1>
        <p>I've built email templates that are responsive and render beautifully on any device. Give me a design and I can make it happen and scalable.</p>
         </div>
        <div class="column-layout">
          <EmailSlider class="col"></EmailSlider>
          
        </div>
        </div>

        <div class="content">
          <div class="content-header">
          <h1 class="text-white fs-800 ff-sans-cond" style="font-weight: 600;"> WEB STUFF
        </h1>
        <p>Some things I've built that live on the internet. Some for clients others for fun.</p>
         </div>
         <!-- <ProjectsCard></ProjectsCard> -->
        </div>
        <div class="content">
          <div class="content-header">
          <h1 class="text-white fs-800 ff-sans-cond" style="font-weight: 600;"> ABOUT ME STUFF
        </h1>
        <p>Outlook sucks, but I build for it anyway.</p>
         </div>
         <div class="column-layout">
          <div class="col">I do CRM! My expertise lies in creating responsive emails that combine cutting-edge design with flawless performance on various devices worldwide, because building good emails is hard. I'm proficient in building and maintaining websites and applications using Javascript or most recently the MEVN stack (MongoDB, Express.js, Vue.js, Node.js). This multifaceted experience allows me to bring a holistic perspective to front-end engineering, delivering cohesive and seamless digital experiences. 
          </div>
          <div class="col"><img src="https://placehold.co/600x400/EEE/31343C" alt="" class="profile"></div>
         </div>
        </div>
        <footer class="footer">
  <div class="container">
    <nav class="footer-nav">
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Portfolio</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  </div>
</footer>
      </div>
    <div class="rgt side-bar">
  <ul class="social-icons myemail">
    <a href="mailto:geraldingraham@icloud.com">geraldingraham@icloud.com</a>
  </ul>
</div>
</div>
  </div>
</template>
<style>
.footer {
  color: white;
  padding: 20px 0;
}

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

.footer-nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: center;
}

.footer-nav ul li {
  display: inline-block;
  margin-right: 10px;
}

.footer-nav ul li:last-child {
  margin-right: 0;
}

.footer-nav ul li a {
  color: white;
  text-decoration: none;
}

.footer-nav ul li a:hover {
  text-decoration: underline;
}

</style>

<script>
export default {
  data() {
    return {
      isVisible: false
    }
  },
  methods: {
    toggleNav() {
      console.log("hello")
      this.isVisible = !this.isVisible
    }
  },
  components: {
    EmailSlider
  }
}
</script>