<template>
    <main class="min-h-screen bg-base-200 p-6">
        <section class="mx-auto max-w-3xl space-y-6">
            <div>
                <p class="text-sm font-semibold uppercase tracking-widest text-primary">Vue.js</p>
                <h1 class="mt-2 text-4xl font-bold">Text interpolation</h1>
                <p class="mt-2 text-base-content/70">
                    Quelques exemples de données affichées dynamiquement dans le template.
                </p>
            </div>

            <div class="card border border-base-300 bg-base-100 shadow-sm">
                <div class="card-body">
                    <h2 class="card-title">Résultats</h2>
                    <div class="grid gap-3 sm:grid-cols-2">
                        <p class="rounded-box bg-base-200 p-4"><span class="font-semibold">Message :</span> {{ bjr() }}</p>
                        <p class="rounded-box bg-base-200 p-4"><span class="font-semibold">Nombre :</span> {{ number }}</p>
                        <p class="rounded-box bg-base-200 p-4"><span class="font-semibold">Case du tableau :</span> {{ tab[2] }}</p>
                        <p class="rounded-box bg-base-200 p-4"><span class="font-semibold">Texte :</span> {{ text }}</p>
                        <p class="rounded-box bg-base-200 p-4"><span class="font-semibold">Codename (from object.codename) :</span> {{ object.codename }}</p>
                        <p class="rounded-box bg-primary/10 p-4"><span class="font-semibold">Jeu (depends on object.codename=='raiden' or not):</span> {{ object.codename == 'raiden' ? 'Mgs 2' : 'Mgs 1' }}</p>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script setup lang='ts'>
    let number: number = 1;
    let tab: number[] = [1,2,3];
    let text: string = "WELCOME TO TEXT INTERPOLATION";
    let object: any = {
        id: 1,
        name: 'test',
        codename: 'raiden'
    }
    function bjr(): string{
        return 'Bonjour !'
    }
</script>

<style scoped lang="css">
</style>

// Afficher une donnée d'un tableau, afficher une donnée d'un objet et une condition ternaire et une fonction qui retourne bonjour que j'exécute dans le template.