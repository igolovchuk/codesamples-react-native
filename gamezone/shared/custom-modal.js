import React from 'react';
import { StyleSheet, View, Modal, TouchableWithoutFeedback, Keyboard} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import ReviewForm from '../screens/reviewForm';

export default function CustomModal({ isOpen, onClose, onSubmit }) {

    return (
        <Modal visible={isOpen} animationType='slide'>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.modalContent}>
                    <MaterialIcons 
                    name='close'
                    size={28}
                    onPress={onClose} 
                    style={styles.modalIcon}/>

                    <ReviewForm addReview={onSubmit} />
                </View>
            </TouchableWithoutFeedback>
        </Modal>       
    );
}

const styles = StyleSheet.create({
    modalContent:{
       flex: 1,
       marginTop: 50
    },
    modalLabel: {
        fontSize: 24,
        fontFamily: 'nunito-bold'
    },
    modalIcon:{
       alignSelf:'flex-start',
       marginStart: 20
    }
});