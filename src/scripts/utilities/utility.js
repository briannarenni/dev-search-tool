// const updateHTML = () => {
//   console.log(profile);
//   profileImgMobileEl.src = profile.avatar_url;
//   profileImgDeskEl.src = profile.avatar_url;

//   profileKeys.forEach((key, index) => {
//     handleNullValue(profile[key], htmlElements[index]);
//   });

//   if (profile.bio === 'This profile has no bio') {
//     bioEl.classList.add('na-text');
//   }

//   handleLinkStyle(profile.website, websiteEl);
//   handleLinkStyle(profile.twitter, twitterEl, 'twitter');
//   handleLinkStyle(profile.company, companyEl, 'company');
// };


const handleNullValue = (value, element) => {
  if (value === 0) {
    element.textContent = '0';
    element.classList.remove('na-text');
  } else {
    const textContent = typeof value === 'string' ? value.trim() || 'N/A' : value || 'N/A';
    element.textContent = textContent;
    textContent === 'N/A' ? element.classList.add('na-text') : element.classList.remove('na-text');
  }
};

const validateUrl = (url) => {
  if (!url.startsWith('http://') && !url.startsWith('https://')) {
    return `https://${url}`;
  }
  return url;
};

const handleInvalidCompany = (element) => {
  element.style.color = 'var(--primary-text)';
  element.style.textDecoration = 'none';
  element.style.pointerEvents = 'none';
  element.setAttribute('aria-disabled', 'true');
};

const resetStyles = (element) => {
  element.style.color = '';
  element.style.textDecoration = '';
  element.style.pointerEvents = '';
  element.removeAttribute('aria-disabled');
  element.classList.remove('na-text');
};

const handleLinkStyle = (value, element, linkType) => {
  resetStyles(element);
  let href;

  if (!value) {
    element.href = '#';
    element.classList.add('na-text');
    element.setAttribute('aria-disabled', 'true');
    return;
  }

  switch (linkType) {
    case 'twitter':
      href = `https://twitter.com/${value}`;
      break;
    case 'company':
      if (value.startsWith('@') && (value.match(/@/g) || []).length === 1) {
        value.trim();
        href = `https://github.com/${value.slice(1)}`;
      } else {
        href = '#';
        handleInvalidCompany(element);
        return;
      }
      break;
    default:
      href = validateUrl(value);
  }

  element.href = href;
  element.classList.remove('na-text');
  element.setAttribute('aria-disabled', 'false');
};
