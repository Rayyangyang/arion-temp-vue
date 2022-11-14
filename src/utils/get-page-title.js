import defaultSettings from '@/settings';

const title = defaultSettings.title || 'Arion Web Template';

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`;
  }
  return `${title}`;
}
