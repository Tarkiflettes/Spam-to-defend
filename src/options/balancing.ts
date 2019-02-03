
export var balancing = {
    coins: 50,
    ia: {
        interval: 2000,
        random: 40
    },
    element: {
        maxHealth: 100,
        defense: {
            maxHealth: 100,
            price: 10,
            timeToReload: 5000,
            tower: {
                maxHealth: 30,
                price: 5,
                timeToReload: 2000,
                range: 200,
                bullet: {
                    force: 5,
                    speed: 10
                }
            },
            generator: {
                maxHealth: 30,
                price: 10,
                timeToReload: 1000,
                coins: 5
            },
            wall: {
                maxHealth: 50,
                price: 20,
                timeToReload: 5000,
                force: 10
            },
            worker: {
                maxHealth: 15,
                price: 10,
                timeToReload: 3000,
                regenerationHealth: 20,
                range: 50
            },
        },
        enemy: {
            maxHealth: 10,
            force: 5,
            speed: 0.5,
            timeToReload: 1000
        },
        castle: {
            maxHealth: 100,
        }
    }
}