<script>
    import {getPhotos} from '$lib/index.js'
    let page = 1;
    let isLoading = false
    export let data

    const handleScroll = async () => {
    	if (isLoading) return;
    	if (document.documentElement.clientHeight +
    		document.documentElement.scrollTop>= document.documentElement.scrollHeight - 50) {

            isLoading = true;
            ++page;
    		data.photos = [...data.photos, ...(await getPhotos(data.albid, page))]
    		isLoading = false;
    	}
    }

</script>

<svelte:window on:scroll={handleScroll} />

<h1>Photos</h1>

<div id="photos">
    {#await data.photos then photos}
        {#each photos as photo}
            <img class="photo" src={photo.thumbnailUrl} alt={photo.title}>
        {/each}
    {/await}
</div>

<style>
    * {
        margin: 0 auto;
        font-size: 14pt;
    }

    h1 {
        text-align: center;
    }

    #photos {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;
    }

    .photo {
        width: 250px;
        height: auto;
    }
</style>