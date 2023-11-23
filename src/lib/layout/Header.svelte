<script>
  import Toggle from '../components/Toggle.svelte';
</script>

<header class="header flex-row">
  <h1 class="site-logo">devSearch</h1>
  <Toggle />
</header>

<style>
  .header {
    justify-content: space-between;
  }

  .site-logo {
    color: var(--primary);
    font-family: var(--primary-font), monospace;
    font-size: 2.125em;
    font-weight: 600;
  }

  @media (min-width: 1440px) {
    .site-logo {
      font-size: 2.25em;
    }
  }
</style>
