<script>
  import { validateSearchInput } from '@scripts/utilities/validation.js';
  import { fetchUserData } from '@scripts/utilities/fetch.js';
  import { mapApiData, resetStore, userProfile as user } from '@scripts/stores/user-store.js';

  let searchInput;
  let searchStr = '';
  let errorText = '';
  let isInvalid = false;
  let touched = false;

  const submitSearch = async (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      touched = true;
      if (searchStr.trim() !== '') {
        validateInput();
      } else {
        isInvalid = true;
        errorText = 'Field cannot be empty';
      }
    }
  };

  const validateInput = async () => {
    const result = validateSearchInput(searchStr);
    isInvalid = !result.isValid;
    errorText = result.errorText;

    if (!isInvalid) {
      resetStore();
      try {
        const userData = await fetchUserData(searchStr);
        mapApiData(userData);
        isInvalid = false;
        errorText = '';
      } catch (error) {
        if (error.message === 'No results') {
          isInvalid = true;
          resetStore();
        } else {
          isInvalid = false;
        }
        errorText = error.message;
      } finally {
        searchStr = '';
        isInvalid = false;
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
    aria-invalid={isInvalid}
  />
</form>

{#if errorText}
  <p class="error-text error-p">
    {errorText}
  </p>
{/if}

<style>
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
