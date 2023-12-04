<template>
    <!-- navigation -->
    <footer class="footer-header flex" id="navbar">
        <nav>
            <ul id="footer-navigation" class="footer-navigation underline-indicators flex"
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
                <li>
                    <!-- <button class="nav-button">
        resume
            </button> -->
                </li>
            </ul>
        </nav>
    </footer>
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
}
</script>
<style>



.footer-navigation {
    --gap: 2rem;
    --underline-gap: 1rem;
    list-style: none;
    margin-left: 4em;
    background: hsl(0 0% 100% / 0.1);
    backdrop-filter: blur(1rem);
    z-index: 4;
}

@supports(backdrop-filter: blur(1rem)) {
    .footer-navigation {
        background: hsl(0 0% 100% / 0.1);
        backdrop-filter: blur(1rem);
    }
}

.footer-navigation a {
    text-decoration: none;
    cursor: pointer;
}

.footer-navigation a>span {
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