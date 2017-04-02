import Phaser from 'phaser'
import Button from '../sprites/Button'

export default class extends Phaser.Button {
    constructor ( game, x, y, asset, text, callback, that) {
        super(game, x, y, asset, callback, that, 1,0,2)
        this.anchor.setTo(0.5)
        game.add.existing(this)
    }
}
