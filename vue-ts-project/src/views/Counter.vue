<template>
    <div class="flex items-center gap-3">
        <button class="btn btn-error" v-on:click.left="reduce(33)">-</button><p class="font-semibold">Nombre : {{ counter }}</p><button class="btn btn-success" v-on:click="augment(33)">+</button>
        <p>{{ afficherNameUser }}</p>
    </div>
</template>

<script setup lang='ts'>
    import { computed, ref } from 'vue';
    const counter= ref<number>(0);
    const username = ref<string>('');
    const augment = (num:number):void=>{counter.value+=num};
    const reduce = (num:number):void=>{counter.value-=num};
    const afficherNameUser = computed((): string => {
        console.log('Je passe dans afficherNameUser');
        if (username.value === '') {
            return 'user connecté';
        }
        return 'user pas connecté';
    })
</script>

<style scoped lang="css">
</style>