import Phaser from 'phaser'
import ButtonWithText from '../sprites/ButtonWithText'

export default class extends Phaser.State {
    create() {
        this.add.sprite(0,0,'bg_start')
        this.startBtn = new ButtonWithText(this.game,this.world.centerX,this.world.centerY,'button', "START GAME",this.onStartClick, this)
        this.game.currentStage = 'main'
        this.state.start('Preloader')
    }
    onStartClick() {
        this.game.currentStage = 'main'
        this.state.start('Preloader')
    }
}