import Phaser from 'phaser'
import data from '../data'

export default class extends Phaser.State {
    create() {
        let ref = data.main.content[0]
        this.addBackground(ref.bg)
    }

    addBackground(asset){
        if(this.background){
            this.background.kill()
        }
        this.background = this.add.sprite(0,0,asset)

    }
}