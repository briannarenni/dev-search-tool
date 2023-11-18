<script>
  import { validateSearchInput } from '../../scripts/utilities/validation';
  import { fetchUserData } from '../../scripts/utilities/fetch';
  import { mapApiData } from '../../scripts/stores/user-store';

  let searchInput;
  let searchStr = '';
  let errorText = '';
  let isInvalid = false;
  let touched = false;
  let isLoading = false;

  const submitSearch = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      validateInput();
    }
  };

  const validateInput = async () => {
    const result = validateSearchInput(searchStr);
    isInvalid = !result.isValid;
    errorText = result.errorText;

    if (!isInvalid) {
      try {
        isLoading = true;
        const userData = await fetchUserData(searchStr);
        mapApiData(userData);
        isInvalid = false;
        errorText = '';
      } catch (error) {
        if (error.message === 'No results') {
          isInvalid = true;
        } else {
          isInvalid = false;
        }
        errorText = error.message;
      } finally {
        isLoading = false;
      }
    }
  };

  $: if (touched) {
    const result = validateSearchInput(searchStr);
    isInvalid = !result.isValid;
  }

  const handleBlur = () => {
    touched = true;
    validateInput();
    searchInput.blur();
  };
  $: ariaInvalid = touched ? isInvalid : undefined;
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
    bind:this={searchInput}
    bind:value={searchStr}
    on:keydown={submitSearch}
    on:blur={handleBlur}
    aria-invalid={ariaInvalid}
  />
</form>

<!-- {#if isLoading}
  <div
    class="loading"
    aria-busy="true"
  />
{/if} -->
{#if errorText}
  <p class="error-text error-p">
    {errorText}
  </p>
{/if}

<style>
  /* .search-form {
    position: relative;
  } */

  /* .loading {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
  }
  */

  .search-form {
    margin-block-end: 0;
  }
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
