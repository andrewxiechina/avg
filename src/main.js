import 'pixi'
import 'p2'
import Phaser from 'phaser'

import config from './config'

import Boot from './states/Boot'
import Preloader from './states/Preloader'
import Start from './states/Start'
import Main from './states/Main'

// import BootState from './states/Boot'
// import SplashState from './states/Splash'
// import GameState from './states/Game'
//
// import config from './config'
//
// class Game extends Phaser.Game {
//   constructor () {
//     const docElement = document.documentElement
//     const width = docElement.clientWidth > config.gameWidth ? config.gameWidth : docElement.clientWidth
//     const height = docElement.clientHeight > config.gameHeight ? config.gameHeight : docElement.clientHeight
//
//     super(width, height, Phaser.CANVAS, 'content', null)
//
//     this.state.add('Boot', BootState, false)
//     this.state.add('Splash', SplashState, false)
//     this.state.add('Game', GameState, false)
//
//     this.state.start('Boot')
//   }
// }



class Game extends Phaser.Game {
    constructor() {
        super(config.GAME_WIDTH, config.GAME_HIGHT, Phaser.AUTO,'game')

        // Shared states accross progam...
        this.currentStage = null

        this.state.add('Boot', Boot)
        this.state.add('Preloader', Preloader)
        this.state.add('Start', Start)
        this.state.add('Main', Main)

        this.state.start('Boot')
    }
}

window.game = new Game()
