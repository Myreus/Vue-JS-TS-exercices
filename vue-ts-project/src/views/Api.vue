<template>
	<main class="flex min-h-screen items-start justify-center p-6">
		<section class="h-auto w-1/2 rounded-lg bg-base-100 p-6 shadow-xl">
			<h1 class="text-xl font-bold">Noms des Pokémons</h1>
			<h2 class="text-xl font-bold">Météo</h2>
			<h2 class="text-xl font-bold">Faux Pokémons</h2>
		</section>
	</main>
</template>

<script setup lang="ts">
    import { ref } from 'vue';

    const tabPoke = ref<string[]>([]);

    fetch('https://pokeapi.co/api/v2/pokemon/')
        .then(response => {
            if (!response.ok){
				throw new Error(`Erreur lors de la récupération des Pokémon, Statut HTTP : ${response.status}`);
            } else {
                return response.json();
            }
        })
        .then(dataTransformed => {
            console.log('dataTransformed : ', dataTransformed);
            console.log('dataTransformed.results : ', dataTransformed.results);
            for (let i = 0; i < dataTransformed.results.length; i++) {
                tabPoke.value.push(dataTransformed.results[i].name);
            }
            console.log('tabPoké.value = ', tabPoke.value);
        })
        .catch(e => {
            console.error(e);
        });
    

</script>

<style scoped lang="css">
</style>
