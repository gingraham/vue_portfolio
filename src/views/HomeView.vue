<script setup>
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <main class="container">
  <h1>Div System</h1>

    <div class="bg-accent text-dark" style="padding: 1rem">
      light blue bg, with dark text
    </div>
    <div class="bg-white text-dark" style="padding: 1rem">
      white bg, with dark text
    </div>
    <div class="bg-accent text-white" style="padding: 1rem">
      light blue bg with a 20% alpha and white text
    </div>

    <section id="interactive-elements">
      <h2 class="numbered-title"><span>01</span> Interactive elements</h2>
      <!-- navigation -->
      <div>
        <nav>
          <ul class="primary-navigation underline-indicators flex">
            <li><a href="#" class="uppercase text-white letter-spacing-2"><span>01</span> Active</a></li>
            <li><a href="#" class="uppercase text-white letter-spacing-2"><span>01</span> Hovered</a></li>
            <li><a href="#" class="uppercase text-white letter-spacing-2"><span>01</span> Idle</a></li>
          </ul>
        </nav>
      </div>

      <div class="flex">
        <div style="margin-top: 5rem;">
          <!-- explore button -->
          <a href="#" class="large-button text-dark bg-white ff-serif fs-600 wht-glow">Explore</a>
        </div>
        <div>
          <!-- Tabs -->
          <!-- Dots -->
          <!-- Numbers -->
        </div>
      </div>
    </section>
  </main>
</template>
