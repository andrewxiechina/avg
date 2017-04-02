import Phaser from 'phaser'

export default class extends Phaser.Button {
    constructor ( game, x, y, asset, callback, that) {
        super(game, x, y, asset, callback, that, 1,0,2)
        this.anchor.setTo(0.5)
        game.add.existing(this)
    }
}
