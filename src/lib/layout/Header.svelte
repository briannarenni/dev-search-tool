<script>
  import Toggle from '../components/Toggle.svelte';
</script>

<header class="header flex-row">
  <h1 class="site-logo">devfinder</h1>

  <Toggle />
</header>

<style>
  .header {
    justify-content: space-between;
  }
  .site-logo {
    color: var(--primary);
  }
</style>
