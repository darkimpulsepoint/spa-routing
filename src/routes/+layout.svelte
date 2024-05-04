<script>
    export let data;
</script>

<nav>
	<a href="/">home</a>

	{#each data.route as r}
	    -> <a href={r.path}>{r.name}</a>
	{/each}
</nav>

<slot />

<style>
    * {
        font-size:14pt;
    }

    a:visited {
        color: green;
    }
</style>