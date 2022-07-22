import {
  TiSocialFacebook,
  TiSocialTwitter,
  TiSocialYoutube,
} from 'react-icons/ti'
const data = {
  menu: [
    { type: 'contacts', data: '', link: '/contacts' },
    { type: 'about us', data: '', link: '/about' },
    { type: 'privacy', data: '', link: '/privacy' },
  ],
  links: [
    {
      type: 'facebook',
      link: 'https://www.facebook.com',
      logo: <TiSocialFacebook size={30} />,
    },
    {
      type: 'youtube',
      link: 'https://www.youtube.com',
      logo: <TiSocialYoutube size={30} />,
    },
    {
      type: 'twitter',
      link: 'https://www.twitter.com',
      logo: <TiSocialTwitter size={30} />,
    },
  ],
}

export default data
