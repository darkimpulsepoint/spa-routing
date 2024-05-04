<script>
    import Users from './Users.svelte'
    export let data;
</script>

<h1>Users</h1>

{#await data.users then users}
    <Users users={users}/>
{/await}

<style>
    * {
        font-size:14pt;
    }
</style>