import React, {useState} from 'react';
import { StyleSheet, View, Text, Button, FlatList, TouchableOpacity, ImageBackground } from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';
import ContentWithBackground from '../shared/content-with-background';
import CustomModal from '../shared/custom-modal';
import { MaterialIcons } from '@expo/vector-icons';

export default function Home({ navigation }) {
    const [isModalOpen, setIsModalOpen] = useState({ value: false });

    const [reviews, setReviews] = useState([
        { title: 'GTA San Andreas', rating: 5, body: 'Some game body', key: '1' },
        { title: 'Call of duty', rating: 4, body: 'Some game body', key: '2' },
        { title: 'FIFA 2020', rating: 3, body: 'Some game body', key: '3' }
    ]);

    const addReview = (review) => {
        review.key = Math.random().toString();
        setReviews((currentReviews) => {
            return [review, ...currentReviews];
        })
        setIsModalOpen(false);
    }
    
    return (
            <ContentWithBackground style={globalStyles.container}>
                <FlatList 
                data={reviews}
                renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
                            <Card>
                                <Text style={globalStyles.titleText}>{item.title}</Text>
                            </Card>
                        </TouchableOpacity>
                )}
                /> 

                <CustomModal 
                  isOpen={isModalOpen}
                  onClose={() => setIsModalOpen(false)}
                  onSubmit={addReview}
                />

                <MaterialIcons 
                  name='add'
                  size={28}
                  onPress={() => setIsModalOpen(true)} 
                  style={styles.modalToggle}/>
            </ContentWithBackground>   
    );
}
    
const styles = StyleSheet.create({
  modalToggle: {
      marginBottom: 10,
      marginTop: 10,
      borderWidth: 1,
      borderColor: '#eee',
      borderRadius: 10,
      padding: 10,
      alignSelf: 'flex-end'
  }
});