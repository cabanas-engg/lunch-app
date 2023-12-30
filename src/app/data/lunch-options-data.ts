export interface option {
    icon: string,
    icon_color: string,
    title: string,
    tags: string[],
    active: boolean
}

export const lunch_options: option[] = [
    {
        icon_color: '#451400',
        icon: '🌯',
        title: 'Chipotle',
        tags: ['Mexican', 'Bowls', 'Burritos'],
        active: false
    },
    {
        icon_color: '#fe0100',
        icon: '🍱',
        title: 'Shogun',
        tags: ['Japanese', 'Bento Box'],
        active: false
    },
    {
        icon_color: '#dd0032',
        icon: '🍗',
        title: 'Chick-fil-A',
        tags: ['Chicken'],
        active: false
    },
    {
        icon_color: '#ffc600',
        icon: '🍟',
        title: 'Buffalo Wild Wings',
        tags: ['Chicken'],
        active: false
    },
    {
        icon_color: '#ee3124',
        icon: '🌶️',
        title: "Chili's",
        tags: ['Mexican'],
        active: false
    },
    {
        icon_color: '#15487c',
        icon: '🥖',
        title: "Jersey Mike's",
        tags: ['Subs'],
        active: false
    },
    {
        icon_color: '#000000',
        icon: '🥙',
        title: "The Greek Pita Place",
        tags: ['Greek', 'Gyros'],
        active: false
    },
    {
        icon_color: '#e7e01f',
        icon: '🌮',
        title: "Tacos Chabelita",
        tags: ['Mexican', 'Tacos'],
        active: false
    },
    {
        icon_color: '#0565a2',
        icon: '🍔',
        title: "Smash N' Dash",
        tags: ['Burgers', 'Shakes'],
        active: false
    },
    {
        icon_color: '#b91833',
        icon: '🍙',
        title: "Manna",
        tags: ['Japanese'],
        active: false
    },
    {
        icon_color: '#f58025',
        icon: '🥩',
        title: "Mission BBQ",
        tags: ['BBQ', 'Subs'],
        active: false
    },
    {
        icon_color: '#caa61a',
        icon: '🍕',
        title: "Laurel Pizzeria",
        tags: ['Pizza'],
        active: false
    },
    {
        icon_color: '#008c2c',
        icon: '🥪',
        title: "Subway",
        tags: ['Subs'],
        active: false
    },

] 