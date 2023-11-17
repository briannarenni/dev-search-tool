<script>
  import { Header, Search, Card, Footer } from './lib/layout/index';
</script>

<div class="app-container">
  <Header />

  <main class="main-container">
    <Search />
    <Card />
  </main>

  <Footer />
</div>

<style>
  .app-container {
    padding-block: var(--padding-xl);
    padding-inline: var(--padding-lg);
  }

  .main-container {
     display: flex;
  justify-content: center;
  align-items: center;
  }

@media (min-width: 425px) {
    .app-container {
    padding-inline: var(--padding-xxl);
  }
}
</style>
