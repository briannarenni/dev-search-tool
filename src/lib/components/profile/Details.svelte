<script>
  import { MapPin, Link, Twitter, Building } from 'lucide-svelte';
  import { userProfile as user } from '../../../scripts/stores/user-store';

  const iconColor = getComputedStyle(document.documentElement)
    .getPropertyValue('--icon-color')
    .trim();
</script>

<section>
  <ul class="user-details">
    <li class="detail location">
      <MapPin color={iconColor} />
      <span>{$user.location}</span>
    </li>
    <li class="detail website">
      <Link color={iconColor} />
      <span>{$user.website}</span>
    </li>
    <li class="detail twitter">
      <Twitter color={iconColor} />
      <span>{$user.twitter}</span>
    </li>
    <li class="detail company">
      <Building color={iconColor} />
      <span>{$user.company}</span>
    </li>
  </ul>
</section>

<style>
  section {
    margin-block-end: var(--spacing-md);
  }

  .user-details {
    padding-left: 0;
    margin-block-end: 0;
  }

  .user-details .detail {
    list-style: none;
    position: relative;
    padding-inline-start: 0;
  }

  .detail {
    color: var(--primary-text);
    margin-block-end: var(--spacing-lg);
  }

  li span {
    margin-inline-start: var(--spacing-sm);
  }
</style>
