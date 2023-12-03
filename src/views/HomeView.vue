<script setup>
import EmailSlider from '../components/EmailSlider.vue';
import LogoSlider from '../components/LogoSlider.vue';
import ProjectsCard from '../components/ProjectsCard.vue';
import Navbar from '../components/TheNavigation.vue';
import Footer from '../components/TheFooter.vue';
</script>

<template >
  <!-- site container -->
  <div class="container" id="home">
    <!-- mobile navigation icon -->
    <div id="navigation-icon" v-if="mobileView">
    <i class="mobile-nav-toggle"></i>
    </div>
    <!-- Nav -->
    <Navbar v-if="!mobileView" />
     <!-- Nav -->

    <!-- content wrapper -->
    <div class="wrapper">
      <!-- Left sidebar Nav -->
      <div class="lft side-bar">
        <ul class="social-icons">
          <li class="social-item">
            <a href="#" class="social-link">
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0,0,256,256"
                width="50px" height="50px" fill-rule="nonzero">
                <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt"
                  stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0"
                  font-family="none" font-weight="none" font-size="none" text-anchor="none"
                  style="mix-blend-mode: normal">
                  <g transform="scale(5.12,5.12)">
                    <path
                      d="M25,1.05078c-0.2175,0 -0.43414,0.06898 -0.61914,0.20898l-23,17.95117c-0.43,0.34 -0.50992,0.9682 -0.16992,1.4082c0.34,0.43 0.9682,0.50992 1.4082,0.16992l1.38086,-1.07812v26.28906c0,0.55 0.45,1 1,1h14v-18h12v18h14c0.55,0 1,-0.45 1,-1v-26.28906l1.38086,1.07812c0.19,0.14 0.39914,0.21094 0.61914,0.21094c0.3,0 0.58906,-0.13086 0.78906,-0.38086c0.34,-0.44 0.26008,-1.0682 -0.16992,-1.4082l-23,-17.95117c-0.185,-0.14 -0.40164,-0.20898 -0.61914,-0.20898zM35,5v1.05078l6,4.67969v-5.73047z">
                    </path>
                  </g>
                </g>
              </svg>
            </a>
          </li>
          <li class="social-item">
            <a href="https://www.mobygames.com/person/1035929/gerald-ingraham/" target="_blank" class="social-link">
              <svg width="74px" height="74px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="#ffffff">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <rect x="0" fill="none" width="20" height="20"></rect>
                  <g>
                    <path
                      d="M15.9 5.5C15.3 4.5 14.2 4 13 4H7c-1.2 0-2.3.5-2.9 1.5-2.3 3.5-2.8 8.8-1.2 9.9 1.6 1.1 5.2-3.7 7.1-3.7s5.4 4.8 7.1 3.7c1.6-1.1 1.1-6.4-1.2-9.9zM8 9H7v1H6V9H5V8h1V7h1v1h1v1zm5.4.5c0 .5-.4.9-.9.9s-.9-.4-.9-.9.4-.9.9-.9.9.4.9.9zm1.9-2c0 .5-.4.9-.9.9s-.9-.4-.9-.9.4-.9.9-.9.9.4.9.9z">
                    </path>
                  </g>
                </g>
              </svg>
            </a>
          </li>
          <li class="social-item">
            <a href="https://www.linkedin.com/in/gingraham/" target="_blank" class="social-link">
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0,0,256,256"
                width="50px" height="50px" fill-rule="nonzero">
                <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt"
                  stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0"
                  font-family="none" font-weight="none" font-size="none" text-anchor="none"
                  style="mix-blend-mode: normal">
                  <g transform="scale(5.12,5.12)">
                    <path
                      d="M41,4h-32c-2.76,0 -5,2.24 -5,5v32c0,2.76 2.24,5 5,5h32c2.76,0 5,-2.24 5,-5v-32c0,-2.76 -2.24,-5 -5,-5zM17,20v19h-6v-19zM11,14.47c0,-1.4 1.2,-2.47 3,-2.47c1.8,0 2.93,1.07 3,2.47c0,1.4 -1.12,2.53 -3,2.53c-1.8,0 -3,-1.13 -3,-2.53zM39,39h-6c0,0 0,-9.26 0,-10c0,-2 -1,-4 -3.5,-4.04h-0.08c-2.42,0 -3.42,2.06 -3.42,4.04c0,0.91 0,10 0,10h-6v-19h6v2.56c0,0 1.93,-2.56 5.81,-2.56c3.97,0 7.19,2.73 7.19,8.26z">
                    </path>
                  </g>
                </g>
              </svg>

            </a>
          </li>

          <li class="social-item">
            <a href="https://codepen.io/gingraham/pens/showcase" target="_blank" class="social-link">
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0,0,256,256"
                width="50px" height="50px" fill-rule="nonzero">
                <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt"
                  stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0"
                  font-family="none" font-weight="none" font-size="none" text-anchor="none"
                  style="mix-blend-mode: normal">
                  <g transform="scale(5.12,5.12)">
                    <path
                      d="M25,4l-21,13.34375v15.30859l21,13.34766l21,-13.34375v-15.3125zM25,29.18359l-5.93359,-4.11328l5.93359,-4.04687l5.93359,4.04688zM27,17.60547v-7.65625l13.42969,8.53516l-6.01953,4.17188zM23,17.60547l-7.41016,5.05078l-6.01953,-4.17187l13.42969,-8.53516zM12.09375,25.04297l-4.09375,2.78906v-5.62891zM15.57031,27.45313l7.42969,5.15234v7.44531l-13.41016,-8.52344zM27,32.60547l7.42969,-5.15234l5.98047,4.07422l-13.41016,8.52344zM37.90625,25.04297l4.09375,-2.83984v5.62891z">
                    </path>
                  </g>
                </g>
              </svg>
            </a>
          </li>

          <li class="social-item">
            <a href="https://github.com/gingraham" target="_blank" class="social-link">
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0,0,256,256"
                width="60px" height="60px" fill-rule="nonzero">
                <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt"
                  stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0"
                  font-family="none" font-weight="none" font-size="none" text-anchor="none"
                  style="mix-blend-mode: normal">
                  <g transform="scale(8.53333,8.53333)">
                    <path
                      d="M15,3c-6.627,0 -12,5.373 -12,12c0,5.623 3.872,10.328 9.092,11.63c-0.056,-0.162 -0.092,-0.35 -0.092,-0.583v-2.051c-0.487,0 -1.303,0 -1.508,0c-0.821,0 -1.551,-0.353 -1.905,-1.009c-0.393,-0.729 -0.461,-1.844 -1.435,-2.526c-0.289,-0.227 -0.069,-0.486 0.264,-0.451c0.615,0.174 1.125,0.596 1.605,1.222c0.478,0.627 0.703,0.769 1.596,0.769c0.433,0 1.081,-0.025 1.691,-0.121c0.328,-0.833 0.895,-1.6 1.588,-1.962c-3.996,-0.411 -5.903,-2.399 -5.903,-5.098c0,-1.162 0.495,-2.286 1.336,-3.233c-0.276,-0.94 -0.623,-2.857 0.106,-3.587c1.798,0 2.885,1.166 3.146,1.481c0.896,-0.307 1.88,-0.481 2.914,-0.481c1.036,0 2.024,0.174 2.922,0.483c0.258,-0.313 1.346,-1.483 3.148,-1.483c0.732,0.731 0.381,2.656 0.102,3.594c0.836,0.945 1.328,2.066 1.328,3.226c0,2.697 -1.904,4.684 -5.894,5.097c1.098,0.573 1.899,2.183 1.899,3.396v2.734c0,0.104 -0.023,0.179 -0.035,0.268c4.676,-1.639 8.035,-6.079 8.035,-11.315c0,-6.627 -5.373,-12 -12,-12z">
                    </path>
                  </g>
                </g>
              </svg>
            </a>
          </li>
        </ul>
      </div>
      <!-- End Left sidebar Nav -->
      <!-- site content  -->
      <div class="content-container">
        <!-- Jumbotron header section -->
        <section class="content marquee">
          <h1 class="text-accent fs-500 ff-sans-cond">
            Hello, <br>
            <span>I'm</span> <span class="text-white fs-800 ff-sans-cond" style="font-weight: 600;">Gerald Ingraham</span>
            <span> and</span><br>
            <span class="text-accent fs-700 ff-sans-cond" style="font-weight: 600;">I build digital marketing
              technology.</span><br><br>
            <span class="text-accent fs-400 ff-sans-normal blurb">

            </span>
          </h1>
          <p class="blurb">
            A software engineer that specializes in building sites, applications and emails that increase ROI. I'm an
            ambassador for diversity and inclusion in tech and a lover of all things game related.
          </p>
          <button>
            My Resume
          </button>
          <br><br><br>
        </section>
        <!--End Jumbotron header section -->
        <!-- Email section -->

        <section class="content email" id="email">
        <div class="content-header">
          <h1 class="text-white fs-800 ff-sans-cond" style="font-weight: 600;"> EMAIL STUFF
            </h1>
            <p>I've built email templates that are responsive and render beautifully on any device. Give me a design and I
              can make it happen and scalable.</p>
        </div>
        <div class="column-layout">
          <div class="col">
            <EmailSlider></EmailSlider>
          </div>
        </div>
      </section>
        <!-- End Email section -->
        <!-- Web section -->
        <section class="content web" id="web">
        <div class="content-header">
          <h1 class="text-white fs-800 ff-sans-cond" style="font-weight: 600;"> WEB STUFF
          </h1>
          <p>Some things I've built that live on the internet. Some for clients others for fun.</p>
        </div>
        <ProjectsCard></ProjectsCard>
      </section>
      <!-- End Web section -->
      <!-- About section -->
      <section class="content about" id="about">
        <div class="content-header">
          <h1 class="text-white fs-800 ff-sans-cond" style="font-weight: 600;"> ABOUT ME STUFF
          </h1>
          <p>Bring the Pain Forward</p>
        </div>
        <div class="column-layout">
          <div class="col about-content">I <span class="text-accent fs-300 ff-sans-cond">LOVE</span> a good challenge!  I'm a <span class="text-accent fs-300 ff-sans-cond">PASSIONATE</span> developer fluent in JavaScript, specializing in the MEVN stack (MongoDB, Express.js, Vue.js, Node.js). With a background in marketing, I bring a <span class="text-accent fs-300 ff-sans-cond">UNIQUE</span> perspective to front-end engineering, crafting seamless digital experiences. I also do <span class="text-accent fs-300 ff-sans-cond">CRM!</span> With expertise creating responsive emails that use AWS AmpScript for dynamic, personalized content. I excel in designing emails that look great on all devices, even handling the challenges of Outlook.
          </div>
          <div class="col"><img src="https://placehold.co/600x400/EEE/31343C" alt="" class="profile"></div>
        </div>
      </section>
      <!-- End About section -->
    </div>
    <!--End site content  -->
    <!-- right sidebar with email -->
    <div class="rgt side-bar">
      <ul class="social-icons myemail">
        <a href="mailto:geraldingraham@icloud.com">geraldingraham@icloud.com</a>
      </ul>
    </div>
    <!--End right sidebar with email -->
  </div>
  <!--End Content wrapper -->

  <!-- Footer -->
  <Footer />
  <!-- End Footer -->
</div>
<!-- End site container -->
</template>


<script>
export default {
  data() {
    return {
      mobileView: false,
      showNav: false,
    }
  },

  components: {
    EmailSlider,
    Navbar,
    Footer
  }
}
</script>

<style>

    .container {
        padding: 0;
    }

    .content {
        padding: 0 !important
    }
    /* Define the blurry background */
    /* .primary-navigation {
        position: fixed;
        z-index: 10000;
        inset: 0 0 0 30%;
        flex-direction: column;
        transform: translateX(100%);
        transition: transform 350ms ease-out;
        padding: min(30vh, 10rem) 2em !important;
        background: hsl(0 0% 100% / 0.1);
        backdrop-filter: blur(1rem);
        --gap: 0em !important;
    } */
    .mobile{
        cursor: pointer;
    }

    .mobile-nav-toggle {
        position: absolute;
        display: block;
        z-index: 9999;
        background-color: transparent;
        background: url("../assets/images/hamburger.png");
        background-size: contain;
        background-repeat: no-repeat;
        width: 2rem;
        aspect-ratio: 1;
        top: 2rem;
        right: 2rem;
        border: none;
    }

    /* .mobile-nav-toggle-close {
        background-image: url("../assets/images/close-icon.png");
        z-index: 11000;
    } */

</style>