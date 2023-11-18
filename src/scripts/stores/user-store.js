import { writable } from 'svelte/store';
import { format, parseISO } from 'date-fns';

export const userProfile = writable({
  avatar_url: '',
  name: '',
  username: '',
  join_date: '',
  bio: '',
  repos: 0,
  followers: 0,
  following: 0,
  location: '',
  website: '',
  twitter: '',
  company: ''
});

export const mapApiData = (data) => {
  userProfile.set({
    avatar_url: data.avatar_url,
    name: data.name ?? data.login,
    username: `@${data.login}`,
    join_date: `Joined ${format(parseISO(data.created_at), 'dd MMM yyyy')}`,
    bio: data.bio ?? 'This profile has no bio',
    repos: data.public_repos,
    followers: data.followers,
    following: data.following,
    location: data.location ?? 'Not available',
    website: data.blog ?? 'Not available',
    twitter: data.twitter_username ?? 'Not available',
    company: data.company ?? 'Not available'
  });
};
