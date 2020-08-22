

import React, { Component } from 'react'
import Button from '@atlaskit/button';
import Modal, { ModalTransition } from '@atlaskit/modal-dialog';
import Modals from './Modals'; 
type Props = {
    hello?: Boolean,
    customHeader?: React$Element<any> | Function,

}
type State = {
    opeMod: Boolean,
    isOpen: Boolean
}

export default class App extends Component<Props,State> {
    constructor(){
        super()
        this.state = {
opeMod:false,
isOpen:false,

        }
        
    }


    onModalOpen() {
alert('yo')
    }




 closed = ()=>{this.setState({isOpen: false}) }
    render() {
        return (
            <div>
                 <Button  appearance = 'primary' onClick = { () => {this.setState({isOpen: true}) && this.props.hello} } >
                     Open modal
                     </Button>
                     <ModalTransition>
        {this.state.isOpen && (
<Modal 
onClose = {this.closed.bind(this)}
appearance="primary"
isChromeless = 'true'
>
<Modals _onClosed = {this.closed}  />
</Modal>
        )}
        </ModalTransition>

            </div>
        )
    }
}
