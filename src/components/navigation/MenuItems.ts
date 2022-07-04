import {
  BookmarkAltIcon,
  CalculatorIcon,
  HomeIcon,
  PhoneIcon,
  PlayIcon,
  ShieldCheckIcon,
  SupportIcon,
} from '@heroicons/react/outline';

export const services = [
  {
    name: 'Marketplace',
    description: "View properties on the marketplace to know what's available",
    href: '/marketplace',
    icon: HomeIcon,
  },
  {
    name: 'Cost Calculator',
    description: 'Learn what you can afford now.',
    href: '/calculator',
    icon: CalculatorIcon,
  },
];

export const callsToAction = [
  {
    name: 'Watch Demo',
    href: 'https://www.youtube.com/watch?v=gXvczijTQSQ',
    icon: PlayIcon,
  },
  { name: 'Contact Sales', href: 'tel:(720) 682-0321', icon: PhoneIcon },
];

export const resources = [
  {
    name: 'Help Center',
    description:
      'Get all of your questions answered in our forums or contact support.',
    href: '#',
    icon: SupportIcon,
  },
  {
    name: 'Guides',
    description:
      'Learn more about Ethereum and the technologies powering our platform.',
    href: 'https://ethereum.org/en/what-is-ethereum/',
    icon: BookmarkAltIcon,
  },
  {
    name: 'Security',
    description: 'Protect your assets through self custody.',
    href: 'https://ethereum.org/en/wallets/',
    icon: ShieldCheckIcon,
  },
];

export const blogPosts = [
  {
    id: 1,
    name: 'The Security Token Thesis',
    href: 'https://hackernoon.com/the-security-token-thesis-4c5904761063',
  },
  {
    id: 2,
    name: 'Traditional Asset Tokenization',
    href: 'https://hackernoon.com/traditional-asset-tokenization-b8a59585a7e0',
  },
  {
    id: 3,
    name: 'The Promise of Automated Compliance',
    href: 'https://medium.com/@sbmckeon/the-promise-of-automated-compliance-8316d9e164f2',
  },
];
