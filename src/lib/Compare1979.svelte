<script lang="ts">
	import plan_1979_A from '../assets/plan_1979_A.jpg'
	import plan_1979_B from '../assets/plan_1979_B.jpg'

	import {fade} from 'svelte/transition'
	
	const carouselPhotos = [
		plan_1979_B, plan_1979_A
	]
	
	let index = 0
	
	const next = () => {
		index = (index + 1) % carouselPhotos.length
	}
</script>


<style>
	
	#compare-images {
		margin: auto;
		max-width: 1000px;
		width: 100%;
		border: 1px solid rgb(213, 213, 213);
		box-shadow: 5px 5px 0 0 rgb(244, 244, 244);
		opacity: 0.89;
	}

	#compare-images:hover {
		border: 1px solid red;
		cursor: pointer;
		opacity: 0.99;
	}

	img {
		max-width: 1000px;
		width: 100%;
		height: 100%;
	}

</style>



<div id="compare-images">
	{#each [carouselPhotos[index]] as src (index)}
		<img {src} on:click={next} alt="" />	
	{/each}
</div>
