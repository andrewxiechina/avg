import Phaser from 'phaser'
import Button from '../sprites/Button'

export default class extends Phaser.Button {
    constructor ( game, x, y, asset, text, callback, that) {
        super(game, x, y, asset, callback, that, 1,0,2)
        this.anchor.setTo(0.5)
        game.add.existing(this)

        let style = { font: "bold 32px Arial", fill: "#000", boundsAlignH: "center", boundsAlignV: "middle" }
        this.text = game.add.text(x,y,text,style)
        this.text.anchor.setTo(0.5)
    }
}
