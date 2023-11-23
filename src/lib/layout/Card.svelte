<script>
  import { userProfile as user } from '../../scripts/stores/user-store';
  import { Info, Stats, Details } from '../components/profile/index.js';
  import Loading from '../components/Loading.svelte';
</script>

<article class="card">
  {#if $user.isLoading}
    <Loading />
  {:else if $user.username}
    <Info />
    <Stats />
    <Details />
  {/if}
</article>

<style>
  .card {
    min-height: 400px;
    margin-block: var(--spacing-md);
    padding-block-start: var(--spacing-md);
    padding-block-end: var(--spacing-sm);
    border-radius: 1em;
  }
</style>
