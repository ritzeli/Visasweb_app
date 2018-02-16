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
    path: '', title: 'Cursos', icon: 'fa fa-mortar-board ', class: 'has-arrow', label: '', labelClass: '', extralink: false,
      submenu: [{ path: '/courses', title: 'Migración Australia', icon: 'fa fa-youtube-play', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
        { path: '/dashboard', title: 'Vivir en Australia', icon: 'fa fa-youtube-play', class: '', label: '', labelClass: '', extralink: false, submenu: [] }]
    },

    {
        path: '', title: 'Servicios', icon: '', class: 'nav-small-cap', label: '', labelClass: '', extralink: true, submenu: []
    },{
        path: '', title: 'Agente Bot', icon: 'fa fa fa-grav', class: 'has-arrow', label: '', labelClass: '', extralink: false,
        submenu: [
            { path: '/chat-bot', title: 'Chat Agente Bot', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] }
        ]
    },
    {
        path: '', title: 'Menu Levels', icon: 'mdi mdi-arrange-send-backward', class: 'has-arrow', label: '', labelClass: '', extralink: false,
        submenu: [
            { path: 'javascript:void(0);', title: 'Second Level', icon: '', class: '', label: '', labelClass: '', extralink: true, submenu: [] },
            {
                path: '', title: 'Second Child', icon: '', class: 'has-arrow', label: '', labelClass: '', extralink: false,
                submenu: [
                    { path: 'javascript:void(0);', title: 'Third 1.1', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
                    { path: 'javascript:void(0);', title: 'Third 1.2', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
                ]
            },
        ]
    }

];

