<template>
    TEXT INTERPOLATION
    <p>{{ bjr() }} {{ number }} {{ tab[2] }} {{ text }} {{ object.codename }}</p>
</template>

<script setup lang='ts'>
    let number = 1;
    let tab = [1,2,3];
    let text = "WELCOME TO TEXT INTERPOLATION";
    let object = {
        id: 1,
        name: 'test',
        codename: 'raiden'
    }
    function bjr(){
        return 'Bonjour !'
    }
</script>

<style scoped lang="css">
</style>

// Afficher une donnée d'un tableau, afficher une donnée d'un objet et une condition ternaire et une fonction qui retourne bonjour que j'exécute dans le template.