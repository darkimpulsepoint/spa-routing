<script>
    export let data
</script>

<div id="albums">
    <p>Альбомы пользователя</p>
    {#await data.albs then albs}
        {#each albs as alb, i}
            <p>{i+1}) <a href="{window.location.href}/{alb.id}">{alb.title}</a></p>
        {/each}
    {/await}

</div>

<style>
    * {
        font-size:14pt;
    }

    a {
            outline: none;
            text-decoration: none;
        }

    a:visited {
            color: green;
        }
</style>