<script>
  import { MapPin, Link, Twitter, Building } from 'lucide-svelte';
  import { userProfile as user } from '../../../scripts/stores/user-store';
  import { validateCompany, validateUrl } from '../../../scripts/utilities/validation';

  const iconColor = getComputedStyle(document.documentElement)
    .getPropertyValue('--icon-color')
    .trim();
</script>

<section>
  <ul class="user-details">
    <li class="detail location">
      <MapPin color={iconColor} />
      {#if $user.location === 'N/A'}
        <span class="null-text">N/A</span>
      {:else}
        <span>{$user.location}</span>
      {/if}
    </li>

    <li class="detail company">
      <Building color={iconColor} />
      {#if $user.company === 'N/A'}
        <span class="null-text">N/A</span>
      {:else if validateCompany($user.company)}
        <span>
          <a class="link-text" href="https://github.com/{$user.company.slice(1)}" target="_blank">
            {$user.company}
          </a>
        </span>
      {:else}
        <span>{$user.company}</span>
      {/if}
    </li>

    <li class="detail twitter">
      <Twitter color={iconColor} />
      {#if $user.twitter === 'N/A'}
        <span class="null-text">N/A</span>
      {:else}
        <span>
          <a class="link-text" href={`https://twitter.com/${$user.twitter}`} target="_blank"
            >{$user.twitter}</a
          >
        </span>
      {/if}
    </li>

    <li class="detail website">
      <Link color={iconColor} />
      {#if !$user.website}
        <span class="null-text">N/A</span>
      {:else}
        <span>
          <a class="link-text" href={validateUrl($user.website)} target="_blank">{$user.website}</a>
        </span>
      {/if}
    </li>
  </ul>
</section>

<style>
  section {
    margin-block-end: var(--spacing-md);
  }

  .user-details {
    display: grid;
    margin-block-end: 0;
  }

  .user-details .detail {
    list-style: none;
    position: relative;
    padding-inline-start: 0;
  }

  .detail {
    color: var(--secondary-text);
    margin-block-end: var(--spacing-lg);
  }

  .detail span {
    margin-inline-start: var(--spacing-sm);
  }

  .detail:last-child {
    margin-block-end: var(--spacing-xs);
  }

  @media (max-width: 395px) {
    .user-details {
      padding-inline-start: 0;
    }
  }

  @media (min-width: 500px) {
    .detail {
      margin-inline-start: var(--spacing-md);
    }
  }

  @media (min-width: 850px) {
    section {
      display: flex;
      justify-content: center;
    }

    .detail {
      margin-block-end: 0;
    }

    .detail span {
      margin-inline-start: var(--spacing-xs);
    }

    .user-details {
      grid-template-columns: repeat(2, 1fr);
      width: 95%;
      gap: var(--spacing-md);
    }

    .location {
      grid-row: 1 / 2;
    }

    .twitter {
      grid-row: 1 / 2;
    }

    .website {
      grid-row: 2 / 3;
    }

    .company {
      grid-row: 2 / 3;
    }
  }
</style>
