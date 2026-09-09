<template>
    <header class="navbar bg-base-100 border-b border-base-300 px-4 shadow-sm">
        <nav class="flex w-full justify-center gap-1" aria-label="Navigation principale">
            <RouterLink to="/" class="btn btn-ghost">Accueil</RouterLink>
            <RouterLink to="/about" class="btn btn-ghost">À propos</RouterLink>
            <RouterLink to="/services" class="btn btn-ghost">Services</RouterLink>
            <RouterLink to="/contact" class="btn btn-ghost">Contact</RouterLink>
            <RouterLink to="/interpol" class="btn btn-ghost">Text Interpolation</RouterLink>
        </nav>
    </header>
</template>

<script setup lang='ts'>
</script>

<style scoped lang="css">
</style>