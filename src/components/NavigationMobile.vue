<template>
    <!-- navigation -->
    <header class="mobile-header flex" id="navbar">
        <div id="navigation-icon" @click="toggleMobileNav">
            <i class="mobile-nav-toggle" v-if="!showNav" :class="{'icon-active': !showNav}"></i>
            <i class="mobile-nav-toggle-close" v-if="showNav"></i>
        </div>
        <nav>
            <ul id="mobile-navigation" :class="{ 'open': showNav }" class="mobile-navigation underline-indicators flex">
                <li :class="{ active: activeItem === 'home' }">
                    <a @click="scroll('home'); closeMobileNav()" class="uppercase text-white letter-spacing-2">
                        <span aria-hidden="true">00.</span>
                        Home
                    </a>
                </li>
                <!-- <li :class="{ active: activeItem === 'projects' }">
                    <a @click="scroll('projects'); closeMobileNav()" class="uppercase text-white letter-spacing-2">
                        <span aria-hidden="true">01.</span> Projects
                    </a>
                </li> -->
                <li :class="{ active: activeItem === 'email' }">
                    <a @click="scroll('email'); closeMobileNav()" class="uppercase text-white letter-spacing-2">
                        <span aria-hidden="true">02.</span> Email
                    </a>
                </li>
                <li :class="{ active: activeItem === 'web' }">
                    <a @click="scroll('web'); closeMobileNav()" class="uppercase text-white letter-spacing-2">
                        <span aria-hidden="true">03.</span>
                        Web
                    </a>
                </li>
                <li :class="{ active: activeItem === 'about' }">
                    <a @click="scroll('about'); closeMobileNav()" class="uppercase text-white letter-spacing-2">
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
            activeItem: 'home',
            showNav: false,
        };
    },
    methods: {
        scroll(refName) {
            this.activeItem = refName;
            const element = document.getElementById(refName);
            element.scrollIntoView({ behavior: "smooth" });
        },
        toggleMobileNav() {
            this.showNav = !this.showNav;
        },
        closeMobileNav() {
            // Close the mobile nav when a link is clicked
            this.showNav = false;
        },
    },
};
</script>
<style>

/* fixed position applied to navbar */
.sticky {
    position: fixed;
    top: 0;
    width: 100%;
}


    .content {
        padding: 0 !important
    }

/* Navbar icon */
.mobile-nav-toggle,
.mobile-nav-toggle-close {
    display: block;
    position: relative;
    background-size: contain;
    background-repeat: no-repeat;
    width: 2rem;
    aspect-ratio: 1;
}

.mobile-nav-toggle {
    background-image: url("../assets/images/hamburger.png");
    z-index: 11000;
    transition: .8s ease all;
}

.mobile-nav-toggle-close {
    background-image: url("../assets/images/close-icon.png");
    z-index: 99999;
}
.icon-active{
    transform: rotate(180deg);
}
/* Navbar with contents pushed to the right */
.mobile-header {
    cursor: pointer;
    justify-content: flex-end;
    flex-wrap: wrap;
    margin-top: 2em;
    position: fixed;
    top: 0px;
    right: 0px;
} 
    /* Define the blurry background */
    .mobile-navigation {
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
    }
.open{
    transform: translateX(0);
}


/* Link style and Hover effects */
.mobile-navigation a {
    text-decoration: none;
    cursor: pointer;
}

.mobile-navigation a>span {
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