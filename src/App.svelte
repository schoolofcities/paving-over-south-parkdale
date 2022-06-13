<script>
	import TopSofC from './lib/TopSofC.svelte'
	import Compare1947v1964 from './lib/Compare1947v1964.svelte'
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

	#title {
		display: flex;
		justify-content: center;
		align-items: center;
		
	}
	#title img {
		margin: 0px;
		padding: 0px;
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
		max-width: 800px;
		min-width: 300px;
		padding: 10px;
		font-size: 21px;
		font-family: Bitter, serif;
		line-height: 1.5;
	}

	.image {
		margin: auto;
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
		opacity: 0.65;
	}
	.image img:hover {
		opacity: 0.89;
	}

</style>



<TopSofC/>


<div id="title">
	<img src={airphoto1957} alt="Air Photo 1957">
	<h1>Paving Over South Parkdale</h1>
</div>


<div class="body-text">
	<p><b><i>A series of maps documenting the loss of a neighbourhood:</i></b></p>
	<p>
	The mid-20th century was an time of contentious highway construction. 
	There were already several intra-urban expressways in southern Ontario (400, 401, QEW).	
	By the mid-1950s, Metro Toronto were planning five expressways that connected existing the then-peripheral expressways to the downtown core. 
	</p>
	<p>
	Here's an excerpt from the The Globe and Mail from December 1, 1955, showing their approximate location and priority.
	</p>
</div>

<div class="image">
	<a href={globe1955}><img src={globe1955} alt="Globe and Mail, Dec 1, 1955"></a>
</div>

<div class="body-text">
	<p>
		The two (later renamed after QQQQQ QQQ Gardiner) were 

		The routes of these expressways generally followed greenspace and industrial land, and not through.
	
		However, 
	
			
		
		One 
	</p>
</div>



<Compare1947v1964/>
