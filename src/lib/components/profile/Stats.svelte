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
  /* User Data */
  .user-stats {
    background-color: var(--secondary-bg);
    justify-content: space-evenly;
    text-align: center;
    gap: 0.7em;
    border-radius: 1em;
  }

  .group {
    padding: var(--spacing-sm);
  }

  .stat-title {
    color: var(--secondary-text);
    font-size: calc(0.8em + 0.5vw);
  }

  .stat {
    color: var(--primary-text);
    font-weight: 700;
    font-size: calc(1em + 0.6vw);
  }
</style>
