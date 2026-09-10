<template>
    <main class="mx-auto flex max-w-xl flex-col gap-4 p-6">
        <h1 class="text-2xl font-bold">Films</h1>
        <input v-model="movieName" @input="checkMovie" type="text" class="input input-bordered w-full" />
        <button class="btn btn-primary" :disabled="movieExists" @click="addMovie">Ajouter un film</button>
        <p v-if="matchingMovie" class="text-base-content/70">Film trouvé : {{ matchingMovie.name }} (id : {{ matchingMovie.id }})</p>
        <p v-else class="text-base-content/70"></p>
        <p
            v-for="movie in movies"
            :key="movie.id"
            class="cursor-pointer rounded-lg bg-base-200 p-3"
            @click="removeMovie(movie.id)"
        >
            {{ movie.name }}
        </p>
    </main>
</template>

<script setup lang="ts">
import { ref } from 'vue';

type Movie = {
    id: number;
    name: string;
};

const movies = ref<Movie[]>([
    { id: 1, name: 'Le Seigneur des Anneaux'},
    { id: 2, name: 'Le Silence des Agneaux'},
    { id: 3, name: 'Fargo'},
    { id: 4, name: 'The Backrooms'},
    { id: 5, name: 'Inception'},
    { id: 6, name: 'Interstellar'},
    { id: 7, name: 'Pulp Fiction'},
    { id: 8, name: 'Parasite'},
    { id: 9, name: 'Gladiator'},
]);

const movieName = ref('');
const matchingMovie = ref<Movie>();
const movieExists = ref(false);

function checkMovie(): void {
    matchingMovie.value = movies.value.find(
        movie => movie.name.toLowerCase() === movieName.value.trim().toLowerCase(),
    );
    movieExists.value = matchingMovie.value !== undefined;
}

function addMovie(): void {
    const name = movieName.value.trim();

    if (name === '') return;

    movies.value.push({
        id: movies.value.length + 1,
        name,
    });
    movieName.value = '';
    matchingMovie.value = undefined;
    movieExists.value = false;
}

function removeMovie(movieId: number): void {
    movies.value = movies.value.filter(movie => movie.id !== movieId);
}

</script>

<style scoped lang="css">
</style>
