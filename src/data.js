export default {
    start: {
        preload:{
            images: [
                'bg_start.png'
            ],
            spritesheets: [
                ['button.png', 337, 61]
            ]
        },
    },
    main: {
        preload:{
            images: [
                'bg1_morning.png',
                'bg1_evening.png',
            ]
        },
        content: [
            {
                bg: 'bg1_morning'
            }
        ]
    }
}