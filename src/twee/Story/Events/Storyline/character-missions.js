
setup.getMissions = function () {
    let missions = [
        {
            employer: "Vernon",
            missions: [

            ],
            conclusions: [

            ]
        },
        {
            employer: "Amanda",
            missions: [
                {
                    name: "Dead Drop",
                    passage: "Storyline - Dead Drop",
                    requirements: []
                }
            ],
            conclusions: [

            ]
        }
    ];
    return missions;
};

/*
{
            name: "Vernon Dinner",
            buttonName: "Go have dinner with Mr. Venere.",
            passage: "Storyline - Vernon Dinner",
            requirements: [{id: 'Vernon-Dinner-00', type: 'story-active', level: 0},{id: 'Time', type: 'day', level: 5},{id: 'Time', type: 'time', level: 2}]
        },
        {
            name: "Amanda Meet Up 00",
            buttonName: "An eventia guard stands by your pod.",
            passage: "Storyline - Amanda Meet Up",
            requirements: [{id: 'Amanda-Meeting-00', type: 'story-incomplete', level: 0},{id: 'Vernon-Dinner-00', type: 'story-completed', level: 0},{id: 'Time', type: 'time', level: 0}]
        },
        {
            name: "Amanda Meet Up 01",
            buttonName: "Go to meet Amanda.",
            passage: "Storyline - Amanda Re-Introduction",
            requirements: [{id: 'Amanda-Meeting-01', type: 'story-incomplete', level: 0},{id: 'Amanda-Meeting-01', type: 'story-active', level: 0}]
        },
        {
            name: "Amanda Meet Up 02",
            buttonName: "Go to meet Amanda.",
            passage: "Storyline - Amanda Bug Mission (Complete)",
            requirements: [{id: 'Amanda-Meeting-02', type: 'story-incomplete', level: 0},{id: 'Amanda-Meeting-02', type: 'story-active', level: 0}]
        },
        {
            name: "Amanda Meet Up 03",
            buttonName: "Go to meet Amanda.",
            passage: "Storyline - Amanda Seduction Mission Intro",
            requirements: [{id: 'Amanda-Meeting-02', type: 'story-completed', level: 0},{id: 'Amanda-Meeting-03', type: 'story-incomplete', level: 0}]
        },
        {
            name: "Amanda Seduction Mission",
            buttonName: "Meet Amanda in the lounge.",
            passage: "Storyline - Amanda Seduction Party Begin",
            requirements: [{id: 'Amanda-Meeting-03', type: 'story-completed', level: 0},{id: 'Amanda-Quest-01', type: 'story-incomplete', level: 0}]
        },
        {
            name: "Amanda Final Wager",
            buttonName: "Meet Amanda for the final time.",
            passage: "Storyline - The Final Wager",
            requirements: [{id: 'Amanda-Quest-01', type: 'story-completed', level: 0},{id: 'Amanda-Final-Wager', type: 'story-incomplete', level: 0}]
        }
*/