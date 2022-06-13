<script lang="ts">
	import { CompareImage } from "svelte-compare-image";
	import img_1947 from '../assets/Q_1947.png'
	import img_1964 from '../assets/Q_1964.png'
</script>

<div id="compare-images">
<CompareImage
	imageLeftSrc={img_1947}
	imageLeftAlt="left"
	imageRightSrc={img_1964}
	imageRightAlt="right"
	--handle-size="3rem"
	--slider-color="#ffffff"
	--slider-width="0.2rem"
/>
</div>

<style>
	#compare-images {
		max-width: 1000px;
	}
</style>