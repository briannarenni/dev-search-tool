<script>
  import SearchBtn from './SearchBtn.svelte';
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
  .search-form {
    justify-content: center;
  }
  .search-bar {
    width: 90%;
  }
</style>
