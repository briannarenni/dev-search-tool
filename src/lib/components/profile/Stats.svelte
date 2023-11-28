<script>
  import { SkeletonText } from 'skeleton-elements/svelte';
  import { userProfile as user } from '../../../scripts/stores/user-store';
</script>

<section class="user-stats flex-row">
  <div class="group flex-col">
    {#if !$user.avatar_url}
      <SkeletonText width="50%" effect="wave">Followers</SkeletonText>
      <SkeletonText width="50%" effect="wave">0</SkeletonText>
    {:else}
      <p class="stat-title">Repos</p>
      <p class="stat">{$user.repos}</p>
    {/if}
  </div>
  <div class="group flex-col">
    {#if !$user.avatar_url}
      <SkeletonText width="50%" effect="wave">Followers</SkeletonText>
      <SkeletonText width="50%" effect="wave">0</SkeletonText>
    {:else}
      <p class="stat-title">Followers</p>
      <p class="stat">{$user.followers}</p>
    {/if}
  </div>
  <div class="group flex-col">
    {#if !$user.avatar_url}
      <SkeletonText width="50%" effect="wave">Following</SkeletonText>
      <SkeletonText width="50%" effect="wave">0</SkeletonText>
    {:else}
      <p class="stat-title">Following</p>
      <p class="stat">{$user.following}</p>
    {/if}
  </div>
</section>

<style>
  .user-stats {
    justify-content: space-around;
    text-align: center;
    gap: 0.5em;
    padding-inline: var(--spacing-sm);
    background-color: var(--secondary-bg);
    border-radius: 1em;
  }

  .group {
    padding: var(--spacing-sm);
  }

  .stat-title {
    color: var(--secondary-text);
    font-family: var(--secondary-font);
    font-size: calc(0.8em + 0.5vw);
  }

  .stat {
    color: var(--primary-text);
    font-weight: 600;
    font-size: calc(1em + 0.6vw);
  }

  @media (min-width: 500px) {
    .user-stats {
      padding-inline: var(--spacing-sm);
      margin-inline: var(--spacing-lg);
    }
  }
</style>
