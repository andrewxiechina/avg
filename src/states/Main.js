import Phaser from 'phaser'
import data from '../data'

export default class extends Phaser.State {
    constructor(){
        super()
        this.status = {}
    }
    create() {
        let ref = data.main.content[0]
        this.addBackground(ref.bg)
        this.addTextFrame(ref.textFrame)
        this.status.tweens[0].start()
    }

    addBackground(asset){
        if(this.background){
            this.background.kill()
        }
        this.background = this.add.sprite(0,0,asset)
        this.background.alpha = 0
        let tween = this.add.tween(this.background).to({alpha: 1}, 1000, Phaser.Easing.Bounce.in)
        // TODO: Need to rethink the logic of tweens.
        this.status.tweens = []
        this.status.tweens.push(tween)
    }
    addTextFrame(asset) {
        if(this.textFrame){
            this.textFrame.kill()
        }
        this.textFrame = this.add.sprite(0,600,asset)
        this.textFrame.anchor.setTo(0,1)
        this.textFrame.alpha = 0
        let tween = this.add.tween(this.textFrame).to({alpha: 1}, 1000, Phaser.Easing.Bounce.in)
        this.status.tweens[this.status.tweens.length - 1].chain(tween)
        this.status.tweens.push(tween)

    }
}