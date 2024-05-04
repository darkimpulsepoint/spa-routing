<script>
    export let users;
</script>

<div class="users">
    {#each users as user, i}
        <div class="user">
            <p>{i+1}) <a href="users/{user.id}/albums">{user.name}</p>
        </div>
    {/each}
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