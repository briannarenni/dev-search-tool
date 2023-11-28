<script>
  import { onMount } from 'svelte';

  import { fetchUserData } from '@scripts/utilities/fetch.js';
  import { mapApiData, userProfile as user } from '@scripts/stores/user-store.js';
  import { Info, Stats, Details } from '@components/profile/index.js';

  onMount(async () => {
    const userData = await fetchUserData('octocat');
    mapApiData(userData);
  });
</script>

<article class="card">
  <Info />
  <Stats />
  <Details />
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
