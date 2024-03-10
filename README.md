# DevSearch

[Live Site](https://ghdevsearcher.netlify.app/)

A simple Github developer profile search tool made with Svelte and Pico.css, and deployed on Netlify 💜

Also used: Lucide Icons, Skeleton Elements, Ky, and date-fns

## Behavior & Features

- Light and dark mode based on user's system color scheme with additional toggle switch
- Loads Octocat's profile on initial load
- Shows dedicated messages if no user is found or a user has no bio
- If profile has no name, the username fills instead
- Other blank profile information shows as _N/A_
- Active links to a user's (valid) website, Twitter, or company Github profile

## Screenshots

**Dark Mode**

<img width="600" alt="new-screen" src="https://github.com/briannarenni/devsearch-app/assets/69635579/03327e68-e309-4ad7-9ab0-b3dc928ceed1">

**Light Mode**

<img width="600" alt="new-screen" src="https://github.com/briannarenni/devsearch-app/assets/69635579/be0cb012-9b66-4cc8-a9f7-2d860401f714">

**Mobile View**

<img width="494" alt="new-screen" src="https://github.com/briannarenni/devsearch-app/assets/69635579/886c5cb8-257f-45b5-a74f-dab1677b6271">

## Dev Notes

I've never used Svelte, so I wanted a simple project to dive into it with. Svelte's readability and intuitive syntax is very smooth to work with, and the reactivity alone is a welcomed change for me. I mixed my own custom design system (colors, spacing) with what Pico offers as well so I could focus on Svelte instead of design. I also got to try Vite for the first time, and implement a skeleton loader, which I've never added in before.
