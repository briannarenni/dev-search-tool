<script>
  import SearchBtn from '../components/SearchBtn.svelte';
</script>

<form
  action="#"
  class="search-form flex-row"
  novalidate
>
  <input
    type="search"
    id="search"
    class="search-bar"
    name="search"
    placeholder="Enter Github username"
    aria-label="Search Github username"
  />

  <!-- TODO: Add Button -->
</form>

<style>
  @media (min-width: 768px) {
    .search-form {
      padding-inline: var(--gap-sm);
    }
  }

  @media (min-width: 1024px) {
    .search-form {
      padding-inline: var(--gap-md);
    }
  }
</style>
