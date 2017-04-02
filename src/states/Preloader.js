import Phaser from 'phaser'
import data from '../data'

export default class extends Phaser.State {
    preload() {
        this.loaderBg = this.add.sprite(this.world.centerX, this.world.centerY, 'loader-bg')
        this.loaderBar = this.add.sprite(this.world.centerX, this.world.centerY, 'loader-bar')
        this.loaderBar.anchor.setTo(0.5)
        this.loaderBg.anchor.setTo(0.5)

        this.load.setPreloadSprite(this.loaderBar);



        let images = data[this.game.currentStage].preload.images
        if(images) {
            images.forEach(file => {
                let filename = file.slice(0, file.length - 4)
                this.load.image(filename,"./assets/images/" + file)
            })
        }

    }
    create() {
        if(this.game.currentStage == 'start') {
            this.state.start('Start')
        }
    }
}