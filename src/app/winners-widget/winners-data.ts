export interface winner_option {
    "Chipotle": winner_data,
    "Chick-fil-A": winner_data,
    "Buffalo Wild Wings": winner_data,
    "Chili's": winner_data,
    "Jersey Mike's": winner_data,
    "Subway": winner_data,
    "Panera": winner_data,
    "McDonald’s": winner_data,
    "Wendy’s": winner_data,
    "Mission BBQ": winner_data,
    "Five Guys": winner_data,
    "Pizza Hut": winner_data,
    "Domino’s": winner_data,
    "Taco Bell": winner_data,
    "Jimmy John’s": winner_data,
    "Sweetgreen": winner_data,
    "Olive Garden": winner_data,
    "Texas Roadhouse": winner_data,
}

export interface winner_data {
    color: string,
    count: number
}

export const chart_data: winner_option = {
    "Chipotle": {
        color: '#451400',
        count: 0
    },
    "Chick-fil-A": {
        color: '#dd0032',
        count: 0
    },
    "Buffalo Wild Wings": {
        color: '#ffc600',
        count: 0
    },
    "Chili's": {
        color: '#ee3124',
        count: 0
    },
    "Jersey Mike's": {
        color: '#15487c',
        count: 0
    },
    "Mission BBQ": {
        color: '#f58025',
        count: 0
    },
    "Subway": {
        color: '#008c2c',
        count: 0
    },
    "Panera": {
        color: '#008c2c',
        count: 0
    },
    "McDonald’s": {
        color: '#e31837',
        count: 0
    },
    "Wendy’s": {
        color: '#da291c',
        count: 0
    },
    "Five Guys": {
        color: '#fcb514',
        count: 0
    },
    "Pizza Hut": {
        color: '#ff1d25',
        count: 0
    },
    "Domino’s": {
        color: '#006491',
        count: 0
    },
    "Taco Bell": {
        color: '#e6002d',
        count: 0
    },
    "Jimmy John’s": {
        color: '#ff6319',
        count: 0
    },
    "Sweetgreen": {
        color: '#00704a',
        count: 0
    },
    "Olive Garden": {
        color: '#003a8f',
        count: 0
    },
    "Texas Roadhouse": {
        color: '#8b0000',
        count: 0
    }
    
}

