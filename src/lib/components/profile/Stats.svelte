<script>
  import { userProfile as user } from '../../../scripts/stores/user-store';
</script>

<section class="user-stats flex-row">
  <div class="group flex-col">
    <p class="stat-title">Repos</p>
    <p class="stat">{$user.repos}</p>
  </div>
  <div class="group flex-col">
    <p class="stat-title">Followers</p>
    <p class="stat">{$user.followers}</p>
  </div>

  <div class="group flex-col">
    <p class="stat-title">Following</p>
    <p class="stat">{$user.following}</p>
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
