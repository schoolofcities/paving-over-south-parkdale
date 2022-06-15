<script>
	import TopSofC from './lib/TopSofC.svelte'
	import Compare1947v1964 from './lib/Compare1947v1964.svelte'
	import Compare1979 from './lib/Compare1979.svelte'
	import airphoto1957 from './assets/TA_1957_screenshot.png'
	import globe1955 from './assets/1955dec1globe.png'
	import MiniMap from './assets/mini-map.png'
</script>

<svelte:head>
	<link href="https://fonts.googleapis.com/css2?family=Bitter&family=Playfair+Display&display=swap" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css2?family=Roboto&family=Source+Serif+Pro&display=swap" rel="stylesheet"> 
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
		background-color: rgb(251, 251, 251);
	}

	.road {
		background-color: rgb(248, 248, 248);
		margin: auto;
		width: 100%;
		padding: 0px;
	}

	.white {
		margin: auto;
		max-width: 1400px;
		width: 100%;
		background-color: rgb(251, 251, 251);
	}

	#top-space {
		height: 100px;
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
		font-size: 46px;
		max-width: 800px;
		margin: auto;
		padding: 10px;
		background-color: rgba(255, 255, 255, 0.54);
		border: solid 1px red;
	}

	.subtitle {
		margin: auto;
		text-align: center;
		max-width: 700px;
		min-width: 300px;
		margin-top: 35px;
		padding-top: 5px;
		font-size: 19px;
		font-family: TradeGothicBold, sans-serif;
		/* font-family: 'Roboto', sans-serif; */
		line-height: 1.45;
		border-top: solid 1px black;
		border-bottom: solid 1px black;
	}

	.body-text {
		margin: auto;
		max-width: 700px;
		min-width: 300px;
		font-size: 19px;
		font-family: 'Source Serif Pro', serif;
		/* font-family: 'Roboto', sans-serif; */
		line-height: 1.45;
		padding: 20px;
	}

	.body-text p {
		color: rgb(0, 0, 0);
	}

	.body-text .bold {
		color: red;
		font-weight: bold;
	}

	.body-text a {
		color: rgb(34, 34, 34);
		text-decoration: underline;
	}
	.body-text a:hover {
		color: red;
	}
	.body-text img {
		float: left;
		width: 154px;
		height: 154px;
		margin-top: 7px;
		margin-right: 17px;
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
		margin-top: 50px;
		border-top: solid 1px black;
		border-bottom: solid 1px black;
		max-width: 700px;
		min-width: 300px;
		padding: 20px;
		padding-top: 15px;
		padding-bottom: 25px;
		margin-bottom: 50px;
		font-size: 17px;
		font-family: Bitter, serif;
		line-height: 1.5;
	}
	.info a {
		color: rgb(34, 34, 34);
		text-decoration: underline;
	}
	.info a:hover {
		color: red;
	}

</style>




<TopSofC/>

<div id="top-space"></div>

<div class="road">
	<div class="white">
		<div id="title">
			<img src={airphoto1957} alt="Air Photo 1957">
			<h1>Paving Over South Parkdale</h1>
		</div>
	</div>
</div>

<div class="subtitle">
	<h3>A series of maps documenting the loss of a neighbourhood</h3>
</div>

<div class="body-text">
	<p>
	The mid-20th century was a time of contentious highway construction.

	By the mid-1950s, there were already several intra-urban expressways in southern Ontario (Highways 400, 401, and the QEW), and Metro Toronto officials were in the process of planning five additional expressways to connect these existing these to the downtown core. 
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

		The routes of these expressways generally followed green-space and industrial land, and not primarily through residential neighbourhoods. (The other three planned expressways on this map were to traverse a number residential neighbourhoods, and were eventually halted due to strong public opposition).
	</p>

	<img src={MiniMap} alt="Globe and Mail, Dec 1, 1955">
	<p>
		However, there was a neighbourhood along the route of the Lakeshore Expressway that was destroyed during this process, <span class="bold">South Parkdale</span>, located between the railway and Lake Ontario. The neighbourhood primarily consisted of single-detached homes, similar in style to those still found north of the railroad tracks.
		
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
		In 1979, <a href="https://en.wikipedia.org/wiki/John_Sewell">John Sewell</a> (mayor of Toronto from 1978 to 1980) and his staff released a plan for covering the expressway in aims to reduce it's noise, better connect Parkdale to the waterfront, as well as create space for residential development. Due to high costs, the plans never came to fruition, but they do illustrate how some of the detriments of the expressway could be converted into needed green space and public housing in the future.
	</p>
</div>

<div class="road">
	<div class="white">
		<Compare1979/>
	</div>
</div>

<div class="info">
	<p><b>More information:</b></p>

	<p>
		
	This page and its content were compiled by <a href="https://jamaps.github.io" target="_blank">Jeff Allen</a>. 
		
	The <a href="https://www.toronto.ca/city-government/accountability-operations-customer-service/access-city-information-or-records/city-of-toronto-archives/whats-online/maps/aerial-photographs/" target="_blank">air photos</a> and the <a href="https://gencat4.eloquent-systems.com/webcat/request/Action?ClientSession=2de590be:18165c1105c:-7ec2&UniqueID=6000_3355_2&TemplateProcessID=6000_3355&PromptID=&ParamID=&CMD_(DetailRequest)[0]=&ProcessID=6000_3363(0)&KeyValues=KEY_450943" target="_blank">1979 plans</a> were sourced from the Toronto Archives. 
	
	The image from the Globe and Mail was sourced from the University of Toronto Library.
	
	Check out the following links for further reading on South Parkdale and the history of the Lakeshore (Gardiner) Expressway:
	</p>
	<ul>
		<li><a href="http://www.gettorontomoving.ca/gardiner-expressway.html" target="_blank">The Gardiner Expressway</a></li>
		<li><a href="https://torontoguardian.com/2012/07/south-parkdale-vintage-fitted-tees-dont-exist/" target="_blank">“South Parkdale” vintage fitted tees don’t exist</a></li>
		<li><a href="http://spacing.ca/toronto/2017/03/04/lost-streets-south-parkdale/" target="_blank">The lost streets of South Parkdale</a></li>
	</ul> 
</div>
