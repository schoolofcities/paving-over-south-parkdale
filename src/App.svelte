<script>
	import TopSofC from './lib/TopSofC.svelte'
	import Compare1947v1964 from './lib/Compare1947v1964.svelte'
	import Compare1979 from './lib/Compare1979.svelte'
	import airphoto1957 from './assets/TA_1957_screenshot.png'
	import globe1955 from './assets/1955dec1globe.png'
</script>

<svelte:head>
	<link href="https://fonts.googleapis.com/css2?family=Bitter&family=Playfair+Display&display=swap" rel="stylesheet"> 
</svelte:head>

<style>
	@font-face {
		font-family: TradeGothicBold;
		src: url("./assets/Trade Gothic LT Bold.ttf");
	}

	:root {
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
		Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	}
	:global(body) {
		padding: 0px;
		margin: 0px;
	}

	.road {
		background-color: rgb(249, 249, 249);
		margin: auto;
		width: 100%;
		padding: 0px;
	}
	.white {
		margin: auto;
		max-width: 1400px;
		width: 100%;
		background-color: white;
	}

	#title {
		display: flex;
		justify-content: center;
		align-items: center;
		
	}
	#title img {
		margin: 0px;
		padding: 0px;
		width: 100%;
		max-width: 1000px;
		box-shadow: 5px 5px 0 0 rgb(244, 244, 244);
	}
	#title h1 {
		font-family: TradeGothicBold, sans-serif;
		color: rgb(0, 0, 0);
		text-align: center;
		position: absolute;
		font-size: 44px;
		max-width: 800px;
		margin: auto;
		padding: 10px;
		background-color: rgba(255, 255, 255, 0.54);
		border: solid 1px red;
	}

	.body-text {
		margin: auto;
		max-width: 700px;
		min-width: 300px;
		padding-top: 25px;
		padding-bottom: 25px;
		font-size: 21px;
		font-family: Bitter, serif;
		line-height: 1.5;
	}

	.body-text p {
		padding: 10px;
	}

	.body-text .bold {
		color: red;
		font-weight: bold;
	}

	.image {
		margin: auto;
		width: 100%;
		max-width: 1000px;
		border: 1px solid rgb(213, 213, 213);
		box-shadow: 5px 5px 0 0 rgb(244, 244, 244);
	}
	.image:hover {
		border: 1px solid red;
	}
	.image img {
		max-width: 980px;
		padding: 10px;
		width: 100%;
		opacity: 0.65;
	}
	.image img:hover {
		opacity: 0.89;
	}

	.info {
		margin: auto;
		max-width: 700px;
		min-width: 300px;
		padding-top: 25px;
		padding-bottom: 25px;
		font-size: 17px;
		font-family: Bitter, serif;
		line-height: 1.5;
	}

</style>




<TopSofC/>

<div class="road">
	<div class="white">
		<div id="title">
			<img src={airphoto1957} alt="Air Photo 1957">
			<h1>Paving Over South Parkdale</h1>
		</div>
	</div>
</div>

<div class="body-text">
	<p><b><i>A series of maps documenting the loss of a neighbourhood:</i></b></p>
	<p>
	The mid-20th century was a time of contentious highway construction.

	By the 1950s, there were already several intra-urban expressways in southern Ontario (Highwys 400, 401, and the QEW) and Metro Toronto officials were planning five additional expressways to connect these existing then-peripheral expressways to the downtown core. 	
	</p>
	<p>
	Here's an excerpt from the The Globe and Mail from December 1, 1955, showing their approximate location and priority.
	</p>
</div>

<div class="road">
	<div class="white">
		<div class="image">
			<a href={globe1955} target="_blank"><img src={globe1955} alt="Globe and Mail, Dec 1, 1955"></a>
		</div>
	</div>
</div>

<div class="body-text">
	<p>
		The two top priority highways, the Don Valley Parkway and The Lakeshore Expressway (later renamed after the first chair of the Metro Council, Frederick G. Gardiner) were built during the late 1950s and early 1960s.

		The routes of these expressways generally followed greenspace and industrial land, and not primarilly through residential neighbourhoods. 
	</p>

	<p>
		However, there was one neighbourhood that was destroyed during this process, <span class="bold">South Parkdale</span>, located between the . The neighbourhood primarilly consisted of single-detached homes of similar architectural style to those still found north of the railrod tracks. 
	</p>

	<p>
		The following air photos show South Parkdale in 1947, several years before the construction of the Lakeshore Expressway, and what the newly finished roadway looked like in 1964. The 1947 image also shows how the neighbourhood had already undergone some deformant in the 1920s, when Lakeshore Boulavard was extended through the neighbourhood. By the early 1960s, all houses below the railway were gone, replaced by 12+ lanes of traffic and swaths of manicured grass.
	</p>
</div>

<div class="road">
	<div class="white">
		<Compare1947v1964/>
	</div>
</div>

<div class="body-text">	
	<p>
		John Sewell, mayor of Toronto from 1978 to 1980, and staff released a plan for covering the expressway to reduce it's noise, better connect Parkdale to the waterfront, and create space for residential development. Due to high costs, the plans never came to fruition, but they do illustrate how the detriments of the expressway could be converted into needed green space and public housing in the future.
	</p>
</div>

<div class="road">
	<div class="white">
		<Compare1979/>
	</div>
</div>






<div class="info">
	<p><b>More information and image sources</b></p>
	<p>Include here!</p>
</div>
