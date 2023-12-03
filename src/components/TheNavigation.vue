<template>
    <!-- navigation -->
    <header class="primary-header flex" id="navbar">
        <nav>
            <ul id="primary-navigation "  class=" primary-navigation underline-indicators flex"
                style="min-height: 0;">
                <li :class="{ active: activeItem === 'home' }">
                    <a @click="scroll('home')" class="uppercase text-white letter-spacing-2">
                        <span aria-hidden="true">00.</span>
                        Home
                    </a>
                </li>
                <li :class="{ active: activeItem === 'projects' }">
                    <a @click="scroll('projects')" class="uppercase text-white letter-spacing-2">
                        <span aria-hidden="true">01.</span> Projects
                    </a>
                </li>
                <li :class="{ active: activeItem === 'email' }">
                    <a @click="scroll('email')" class="uppercase text-white letter-spacing-2">
                        <span aria-hidden="true">02.</span> Email
                    </a>
                </li>
                <li :class="{ active: activeItem === 'web' }">
                    <a @click="scroll('web')"  class="uppercase text-white letter-spacing-2">
                        <span aria-hidden="true">03.</span>
                        Web
                    </a>
                </li>
                <li :class="{ active: activeItem === 'about' }">
                    <a @click="scroll('about')"  class="uppercase text-white letter-spacing-2">
                        <span aria-hidden="true">04.</span> About
                    </a>
                </li>
            </ul>
        </nav>
    </header>
    <!-- navigation -->
</template>

<script>
export default {
    data() {
        return {
            // Initially, you can set the activeItem to 'home' or any default value
            activeItem: 'home',
        };
    },
    methods:{
        scroll(refName){
            this.activeItem = refName; 
            const element = document.getElementById(refName);
            element.scrollIntoView({behavior: "smooth"})
        },
        toggleMobileNav() {
      console.log("hello")
      
    }
    }
    
}
</script>
<style>

/* fixed position applied to navbar */
.sticky {
    position: fixed;
    top: 0;
    width: 100%;
}
/* Navbar with contents pushed to the right */
.primary-header {
    justify-content: flex-end;
    flex-wrap: wrap;
    margin-top: 2em;
    position: sticky;
    top: 0px;
} 
    /* Navbar contents general styling and spacing */
.primary-navigation {
    --gap: 2rem;
    --underline-gap: 1rem;
    list-style: none;
    margin: 0;
    background: hsl(0 0% 100% / 0.1);
    backdrop-filter: blur(1rem);
    z-index: 4;
    padding-right: 40px;
}

/* Mobile navigation */







/* Link style and Hover effects */
.primary-navigation a {
    text-decoration: none;
    cursor: pointer;
}

.primary-navigation a>span {
    color: hsl(var(--clr-white));
    font-weight: 700;
}

.underline-indicators>* {
    padding: var(--underline-gap, 1rem) 0;
    border-bottom: .2rem solid hsl(var(--clr-white)/0)
}

.underline-indicators>*:hover,
.underline-indicators>*:focus {
    border-color: hsl(var(--clr-white) /.5)
}

.underline-indicators>.active {
    border-color: hsl(var(--clr-white) /1);
}
</style>