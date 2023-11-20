<script>
  import { userProfile as user } from '../../../scripts/stores/user-store';
</script>

<div class="info-content flex-col">
  <div class="avatar-wrap flex-row">
    <img src={$user.avatar_url} class="avatar" alt="User's avatar" />
  </div>

  <section class="user-info flex-col">
    <h3 class="name">{$user.name}</h3>
    <h4 class="username">{$user.username}</h4>
    <p class="joined">{$user.join_date}</p>
  </section>
</div>

<section class="bio-wrap">
  <p class="user-bio">{$user.bio}</p>
</section>

<style>
  .info-content {
    justify-content: center;
    align-items: center;
  }

  .avatar-wrap {
    justify-content: center;
    margin-block-start: var(--spacing-sm);
    margin-block-end: var(--spacing-md);
  }

  .avatar {
    max-width: calc(100px + 3vw);
    border-radius: 50%;
  }

  .user-info {
    margin-block-end: var(--gap-xl);
    text-align: center;
  }

  .name {
    color: var(--primary-text);
    font-family: var(--secondary-font);
    font-weight: 500;
  }

  .username,
  .joined {
    font-weight: 600;
  }

  .username {
    color: var(--primary);
    font-family: var(--secondary-font);
    letter-spacing: 1.1px;
  }

  .joined {
    color: var(--secondary-text);
    font-family: var(--secondary-font);
  }

  .bio-wrap {
    margin-block-end: var(--gap-xl);
  }

  .user-bio {
    color: var(--primary-text);
    text-align: center;
  }
</style>
