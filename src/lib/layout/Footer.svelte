<script>
  import { Github } from 'lucide-svelte';
</script>

<footer class="footer">
  <p>
    Made by Brianna Renni |
    <a href="https://github.com/briannarenni/" target="_blank"><Github /></a>
  </p>
</footer>

<style>
  .footer {
    font-family: var(--secondary-font);
    text-align: center;
  }

  .footer a {
    color: var(--action-text);
    padding: 7px;
  }

  .footer a:hover {
    color: var(--action-text);
    font-weight: bold;
    outline: 1px solid var(--action-text);
    border-radius: 50%;
  }
</style>
