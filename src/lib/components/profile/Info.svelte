<script>
  import { Cake } from 'lucide-svelte';
  import { userProfile as user } from '../../../scripts/stores/user-store';

  const iconColor = getComputedStyle(document.documentElement)
    .getPropertyValue('--icon-color')
    .trim();
</script>

<div class="info-content flex-col">
  <div class="avatar-wrap flex-row">
    <img src={$user.avatar_url} class="avatar" alt="User's avatar" />
  </div>

  <section class="user-info flex-col">
    {#if $user.name !== null}
      <h3 class="name">{$user.name}</h3>
    {:else}
      <h3 class="name">{$user.username}</h3>
    {/if}
    <h4 class="username">{$user.username}</h4>
    <p class="joined flex-row"><Cake size={20} color={iconColor} /> {$user.join_date}</p>
  </section>
</div>

<section class="bio-wrap">
  {#if $user.bio === '(Profile has no bio)'}
    <p class="user-bio null-text">{$user.bio}</p>
  {:else}
    <p class="user-bio">{$user.bio}</p>
  {/if}
</section>

<style>
  .info-content {
    font-family: var(--secondary-font);
    justify-content: center;
    align-items: center;
  }

  .avatar-wrap {
    justify-content: center;
    margin-block-start: var(--spacing-sm);
    margin-block-end: var(--spacing-md);
  }

  .avatar {
    max-width: calc(85px + 3vw);
    border-radius: 50%;
  }

  .user-info {
    margin-block-end: var(--gap-lg);
    text-align: center;
  }

  .name {
    color: var(--primary-text);
    font-family: var(--primary-font);
    font-weight: 500;
  }

  .username {
    color: var(--primary);
    font-family: var(--primary-font);
    font-weight: 600;
    letter-spacing: 1.1px;
  }

  .joined {
    justify-content: center;
    gap: var(--spacing-sm);
    margin-block: var(--spacing-xs);
  }

  .bio-wrap {
    color: var(--primary-text);
    font-family: var(--secondary-font);
    margin-block-end: var(--gap-xl);
  }

  .user-bio {
    text-align: center;
  }
</style>
