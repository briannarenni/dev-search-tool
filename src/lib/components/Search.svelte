<script>
  import { fetchUserData } from '@scripts/utilities/fetch.js';
  import { mapApiData, resetStore, userProfile as user } from '@scripts/stores/user-store.js';

  let searchInput;
  let searchStr = '';
  let errorText = '';

  const submitSearch = async (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      if (searchInput.checkValidity()) {
        try {
          const userData = await fetchUserData(searchStr);
          mapApiData(userData);
          searchStr = '';
        } catch (error) {
          if (error.message === 'No results') {
            errorText = 'No users found';
            return;
          } else {
            isInvalid = false;
            errorText = 'An unexpected API error occurred: ' + error.message;
          }
        } finally {
          searchStr = '';
        }
      }
    }
  };
</script>

<form action="#" class="search-form flex-row" novalidate>
  <input
    type="search"
    id="search"
    class="search-bar"
    name="search"
    placeholder="Enter Github username"
    aria-label="Search Github username"
    bind:this={searchInput}
    bind:value={searchStr}
    on:keydown={submitSearch}
    required
  />
</form>

{#if searchInput && !searchInput.validity.valid}
  <p class="error-text error-p">Field cannot be empty</p>
{/if}

<style>
  input:user-valid {
    border-color: green;
  }

  input:user-invalid {
    border-color: red;
  }

  .search-form {
    max-width: 98%;
    margin: 0 auto;
    margin-block-end: 0;
  }

  .search-bar {
    border: 0.5px solid var(--primary);
    margin-block-end: 0;
  }

  .error-text {
    text-align: center;
  }

  @media (min-width: 700px) and (max-width: 1024px) {
    .search-form {
      padding-inline: var(--gap-sm);
    }
  }
</style>
