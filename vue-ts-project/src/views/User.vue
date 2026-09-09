<template>
    <main class="min-h-screen bg-base-200 p-6">
        <section class="mx-auto max-w-md">
            <div class="card border border-base-300 bg-base-100 shadow-xl">
                <figure class="p-6"><img class="rounded-lg" v-bind:src="imgUrl" /></figure>
                <div class="card-body items-center text-center">
                    <h1 class="card-title">Mes infos</h1>
                    <p class="w-full rounded-lg bg-base-200 p-3">Nom : {{ userName }}</p>
                    <p class="w-full rounded-lg bg-base-200 p-3">Âge : {{ age }}</p>
                    <p class="w-full rounded-lg bg-base-200 p-3">{{ ageTen() }}</p>
                    <p class="w-full rounded-lg bg-base-200 p-3">Numéro fétiche : {{ Math.floor(Math.random() * 100) + 1 }}</p>
                </div>
            </div>
        </section>
    </main>
</template>

<script setup lang='ts'>
    let imgUrl:string="https://picsum.photos/800/200";
    let userName:string="Raiden";
    let age:number=33;
    const ageTen=():number=>{return age+10;}
</script>

<style scoped lang="css">
</style>