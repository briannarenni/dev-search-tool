<script>
  import { validateSearchInput } from '../../scripts/validation';

  let searchStr = '';
  let errorText = '';
  let isInvalid = false;
  let touched = false;

  const submitSearch = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      validateInput();
    }
  };

  const validateInput = () => {
    const result = validateSearchInput(searchStr);
    isInvalid = !result.isValid;
    errorText = result.errorText;

    if (!isInvalid) {
      // TODO: fetchUser(searchStr);
    }
  };

  $: if (touched) {
    const result = validateSearchInput(searchStr);
    isInvalid = !result.isValid;
  }

  const handleBlur = () => {
    touched = true;
    validateInput();
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
    bind:value={searchStr}
    on:keydown={submitSearch}
    on:blur={handleBlur}
    aria-invalid={ariaInvalid}
  />
</form>

{#if errorText}
  <p class="error-text error-p">
    {errorText}
  </p>
{/if}

<style>
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
