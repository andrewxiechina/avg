import Phaser from 'phaser'

export default class extends Phaser.State {
    create() {
        this.add.sprite(0,0,'bg_start')
    }
}