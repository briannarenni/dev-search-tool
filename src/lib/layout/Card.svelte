<script>
  import { Info, Stats, Details } from '../components/profile/index.js';
</script>

<article class="card">
  <Info />
  <Stats />
  <Details />
</article>

<style>
  .card {
    margin-block: var(--spacing-md);
    padding-block-start: var(--spacing-md);
    border-radius: 1em;
  }
</style>
