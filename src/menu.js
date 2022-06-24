import {
  mdiAccountCircle,
  mdiDesktopMac,
  mdiGithub,
  mdiLock,
  mdiAlertCircle,
  mdiMonitorShimmer,
  mdiSquareEditOutline,
  mdiTable,
  mdiViewList,
  mdiTelevisionGuide,
  mdiResponsive,
  mdiPalette
} from '@mdi/js'

export default [
  'General',
  [
    {
      to: '/dashboard',
      icon: mdiDesktopMac,
      label: 'Dashboard'
    },
      {
      label: 'Utilisateur',
      icon: mdiViewList,
      menu: [
        {
          label: 'Liste',
          to: '/utilisateur',
        },
        {
          label: 'Creer',
          to: '/utilisateur/create',
        }
      ]
    },
    {
      label: 'Categorie',
      icon: mdiViewList,
      menu: [
        {
          label: 'Liste',
          to: '/categorie',
        },
        {
          label: 'Creer',
          to: '/categorie/create',
        }
      ]
    },
    {
      label: 'Produit',
      icon: mdiViewList,
      menu: [
        {
          label: 'Liste',
          to: '/produit',
        },
        {
          label: 'Creer',
          to: '/produit/create',
        }
      ]
    }

  ],
  'Examples',
  [
    {
      to: '/tables',
      label: 'Tabls',
      icon: mdiTable
    },
    {
      to: '/forms',
      label: 'Forms',
      icon: mdiSquareEditOutline
    },
    {
      to: '/ui',
      label: 'UI',
      icon: mdiTelevisionGuide
    },
    {
      to: '/responsive',
      label: 'Responsive',
      icon: mdiResponsive
    },
    {
      to: '/',
      label: 'Styles',
      icon: mdiPalette
    },
    {
      to: '/profile',
      label: 'Profile',
      icon: mdiAccountCircle
    },
    {
      to: '/login',
      label: 'Login',
      icon: mdiLock
    },
    {
      to: '/error',
      label: 'Error',
      icon: mdiAlertCircle
    },
    {
      label: 'Submenus',
      subLabel: 'Submenus Example',
      icon: mdiViewList,
      menu: [
        {
          label: 'Sub-item One'
        },
        {
          label: 'Sub-item Two'
        }
      ]
    }
  ],
  'About',
  [
    {
      href: 'https://justboil.me/tailwind-admin-templates/vue-dashboard/',
      label: 'Premium version',
      icon: mdiMonitorShimmer,
      target: '_blank'
    },
    {
      href: 'https://github.com/justboil/admin-one-vue-tailwind',
      label: 'GitHub',
      icon: mdiGithub,
      target: '_blank'
    }
  ]
]
