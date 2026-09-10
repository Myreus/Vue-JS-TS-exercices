<template>
	<main class="p-6">
		<div class="card mx-auto max-w-3xl bg-base-200 shadow-xl">
			<div class="card-body">
				<h2 class="card-title self-center mb-5">Colors</h2>
				<div class="mx-auto flex w-full max-w-lg flex-wrap justify-center gap-30">
					<button class="card flex w-40 items-center justify-center bg-base-100 p-8 text-center text-lg shadow" @click="changeColorCard1" :style="activeColor1">Card 1</button>
					<button class="card flex w-40 items-center justify-center bg-base-100 p-8 text-center text-lg shadow" @click="changeColorCard2" :style="activeColor2">Card 2</button>
					<div class="card flex w-40 items-center justify-center bg-base-100 p-8 text-center text-lg shadow">Card 3</div>
					<div class="card flex w-40 items-center justify-center bg-base-100 p-8 text-center text-lg shadow">Card 4</div>
				</div>
			</div>
		</div>
	</main>
</template>

<script setup lang='ts'>
import { ref } from 'vue'

const activeColor1 = ref({
    backgroundColor:'blue',
});
const activeColor2 = ref({
    backgroundColor:'red',
});

function changeColorCard1():void {
    activeColor1.value.backgroundColor = activeColor1.value.backgroundColor === 'blue' ? 'pink' : 'blue';
}
function changeColorCard2():void {
    activeColor2.value.backgroundColor = activeColor2.value.backgroundColor === 'red' ? 'green' : 'red';
}

</script>

<style scoped lang="css">
</style>