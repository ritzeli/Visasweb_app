import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
    {
        path: '', title: 'Personal', icon: '', class: 'nav-small-cap', label: '', labelClass: '', extralink: true, submenu: []
    },
    {
      path: '/dashboard', title: 'Home', icon: 'mdi mdi-gauge', class: '', label: '', labelClass: '', extralink: false, submenu: []
    },
    {
    path: '', title: 'Información', icon: '', class: 'nav-small-cap', label: '', labelClass: '', extralink: true, submenu: []
    },
    {
    path: '', title: 'Cursos', icon: 'mdi mdi-school', class: 'has-arrow', label: '', labelClass: '', extralink: false,
      submenu: [{ path: '/courses', title: 'Migración Australia', icon: 'fa fa-youtube-play', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
        { path: '/dashboard', title: 'Vivir en Australia', icon: 'fa fa-youtube-play', class: '', label: '', labelClass: '', extralink: false, submenu: [] }]
    },
    {
        path: '', title: 'Servicios', icon: '', class: 'nav-small-cap', label: '', labelClass: '', extralink: true, submenu: []
    },
  {path: '', title: 'Agentes', icon: 'mdi mdi-contacts', class: 'has-arrow', label: '', labelClass: '', extralink: false,
    submenu: [
      { path: '/agent', title: 'Buscar Agentes', icon: 'mdi mdi-account-search', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
      { path: '/agent', title: 'Chat Agentes', icon: 'mdi mdi-message-text', class: '', label: '', labelClass: '', extralink: false, submenu: [] }
    ]
    },
  {path: '', title: 'Agente Bot', icon: 'mdi mdi-robot', class: 'has-arrow', label: '', labelClass: '', extralink: false,
    submenu: [
      { path: '/chat-bot', title: 'Chat Agente Bot', icon: 'mdi mdi-message-text', class: '', label: '', labelClass: '', extralink: false, submenu: [] }
    ]
  }
];

