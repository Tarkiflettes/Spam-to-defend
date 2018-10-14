
export var balancing = {
    ia: {

    },
    element: {
        maxHealth: 100,
        defense: {
            maxHealth: 100,
            price: 10,
            timeToReload: 5000,
            tower: {
                maxHealth: 100,
                price: 10,
                timeToReload: 5000,
                range: 200,
                bullet: {
                    force: 20,
                    speed: 10
                }
            },
            generator: {
                maxHealth: 100,
                price: 10,
                timeToReload: 5000,
                coins: 10
            },
            wall: {
                maxHealth: 100,
                price: 10,
                timeToReload: 5000,
                force: 50
            },
            worker: {
                maxHealth: 100,
                price: 10,
                timeToReload: 5000,
                regenerationHealth: 5,
                range: 50
            },
        },
        enemy: {
            maxHealth: 100,
            force: 1,
            speed: 2,
            timeToReload: 1000
        },
        castle: {
            maxHealth: 100,
        }
    }
}