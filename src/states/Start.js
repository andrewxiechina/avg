import Phaser from 'phaser'
import ButtonWithText from '../sprites/ButtonWithText'

export default class extends Phaser.State {
    create() {
        this.add.sprite(0,0,'bg_start')
        this.button = new ButtonWithText(this.game,this.world.centerX,this.world.centerY,'button', "START GAME",this.onClick, this)



    }
    render() {
        //this.game.debug.spriteInfo(this.button)
    }
    onClick() {
        console.log('cliked....')
    }
}