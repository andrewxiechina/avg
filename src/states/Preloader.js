import Phaser from 'phaser'

export default class extends Phaser.State {
    create() {
        this.loaderBg = this.add.sprite(this.world.centerX, this.world.centerY, 'loader-bg')
        this.loaderBar = this.add.sprite(this.world.centerX, this.world.centerY, 'loader-bar')
        this.loaderBar.anchor.setTo(0.5)
        this.loaderBg.anchor.setTo(0.5)
    }
}