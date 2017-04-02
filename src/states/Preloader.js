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

        let spritesheets = data[this.game.currentStage].preload.spritesheets
        if(spritesheets){
            spritesheets.forEach(arr => {
                let file = arr[0]
                let filename = file.slice(0, file.length - 4)
                this.load.spritesheet(filename,"./assets/spritesheets/" + file, arr[1], arr[2])
            })
        }
    }
    create() {
        if(this.game.currentStage == 'start') {
            this.state.start('Start')
        }
    }
}