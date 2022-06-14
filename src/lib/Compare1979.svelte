<script lang="ts">
	import { CompareImage } from "svelte-compare-image";
	import plan_1979_A from '../assets/plan_1979_A.jpg'
	import plan_1979_B from '../assets/plan_1979_B.jpg'
</script>

<div id="compare-images">
	<!-- <div id="years">
		<div id="left-year">1947</div>
		<div id="right-year">1964</div>
	</div> -->
	<CompareImage
		imageLeftSrc={plan_1979_A}
		imageLeftAlt="left"
		imageRightSrc={plan_1979_B}
		imageRightAlt="right"
		--handle-size="3rem"
		--slider-color="white"
		--slider-width="0.17rem"
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
