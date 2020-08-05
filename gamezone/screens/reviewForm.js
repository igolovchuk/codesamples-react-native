import React from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '../styles/global';
import { Formik } from 'formik';
import { TextInput } from 'react-native-gesture-handler';
import * as yup from 'yup'
import FlatButton from '../shared/flat-button';

const ReviewSchema = yup.object({
    title: yup
            .string()
            .required()
            .min(4),
    body: yup
            .string()
            .required()
            .min(10),
    rating: yup
            .string()
            .required()
            .test('num is 1-5 ', 'Reting should be from 1 to 5', (val) => {
                return parseInt(val) > 0 && parseInt(val) < 6;
            })
})

export default function ReviewForm({ addReview }) {
    
    return (
        <View style={globalStyles.container}>
            <Formik
              initialValues={{ title: '', body: '', rating: ''}}
              validationSchema={ReviewSchema}
              onSubmit={(values, actions) => {
                actions.resetForm();
                addReview(values);
              }}
            >
            {(formikProps) => (
                <View>
                    <TextInput 
                      style={globalStyles.input}
                      placeholder='Game name'
                      onChangeText={formikProps.handleChange('title')}
                      value={formikProps.values.title}
                      onBlur={formikProps.handleBlur('title')}
                    />

                    <Text style={globalStyles.errorText}>{ formikProps.touched.title && formikProps.errors.title}</Text>

                    <TextInput 
                      multiline minHeight={80}
                      style={globalStyles.input}
                      placeholder='Review details'
                      onChangeText={formikProps.handleChange('body')}
                      value={formikProps.values.body}
                      onBlur={formikProps.handleBlur('body')}
                    />

                     <Text style={globalStyles.errorText}>{formikProps.touched.body && formikProps.errors.body}</Text>

                    <TextInput 
                      style={globalStyles.input}
                      placeholder='Rating (1-5)'
                      onChangeText={formikProps.handleChange('rating')}
                      value={formikProps.values.rating}
                      keyboardType='numeric'
                      onBlur={formikProps.handleBlur('rating')}
                    />

                     <Text style={globalStyles.errorText}>{formikProps.touched.rating && formikProps.errors.rating}</Text>
                    
                    <FlatButton title='Submit' onSubmit={formikProps.handleSubmit} />
                </View>
            )}
            </Formik>
        </View>
    );
}