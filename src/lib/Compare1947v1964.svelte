<script lang="ts">
	import { CompareImage } from "svelte-compare-image";
	import img_1947 from '../assets/Q_1947.png'
	import img_1964 from '../assets/Q_1964.png'
</script>

<div id="compare-images">
	<div id="years">
		<div id="left-year">1947</div>
		<div id="right-year">1964</div>
	</div>
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
	#years {
		overflow: hidden;
		color: red;
	}
	#left-year {
		float: left;
		text-align: left;
		padding-left: 5px;
	}
	#right-year {
		text-align: right;
		padding-right: 5px;
	}
	#compare-images {
		margin: auto;
		max-width: 1000px;
	}
	
</style>