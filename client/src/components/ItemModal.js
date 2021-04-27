import React, { Component } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';
import {connect} from 'react-redux';
import {addItem} from '../actions/itemActions';

class ItemModal extends Component{

    state = {
        modal :true,
        name: ''
    }
    toogle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    onChange = e => {
        this.setState({ [e.target.name] : e.target.value});
    }

    onSubmit = e => {
        e.preventDefault();
        const newItem = {
            name: this.state.name
        }
        this.props.addItem(newItem);
        //close the modal
        this.toogle();
    }

    render(){
        return(
            <div>
                <Button color="dark" style={{marginBottom:'2rm'}} onClick={this.toogle}>
                    addItem
                </Button>
                <Modal isOpen={this.state.modal} toggle={this.toogle}>
                    <ModalHeader toggle={this.toogle}>Add to Shopping list</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="item">Item</Label>
                                <Input type="text" name="name" id="item" placeholder="Add shopping item" onChange={this.onChange} />
                            </FormGroup>
                            <Button color="dark" style={{marginBottom:'2rm'}} block>Add Item</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
            
        );
    }
}
const mapStateToProps = (state) => ({
    item : state.item
});
export default connect(mapStateToProps,{addItem}) (ItemModal) ;