import React from 'react';
import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';

const ContactForm = () => {

    const [isSubmitted, setIsSubmitted] = useState(false); // État pour gérer la confirmation

    // États initiaux étendus pour inclure les menus déroulants
    const initialValues = {
        name: '',
        email: '',
        message: '',
    };

    // Étendre la fonction de validation pour inclure les nouveaux champs
    const validate = values => {
        const errors = {};
        if (!values.email) {
            errors.email = 'Email requis';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = 'Adresse email invalide';
        }
        return errors;
    };
    
    // Fonction appelée lors de la soumission du formulaire
    const onSubmit = (values, { setSubmitting }) => {
        
        // Envoi des données du formulaire via Axios
        axios.post('http://localhost:8800/api/send', values)
        .then(response => {
            console.log('Message envoyé', response); // Traitement en cas de succès
            setSubmitting(false); // Mise à jour de l'état de soumission
            setIsSubmitted(true)
        })
        .catch(error => {
            console.error('Erreur d\'envoi', error); // Traitement en cas d'erreur
            setSubmitting(false); // Mise à jour de l'état de soumission
            setIsSubmitted(false)
        });
    };

    return (
        <Formik initialValues={initialValues} validate={validate} onSubmit={onSubmit}>
            <Form>
                <Field className="Field" type="text" name="name" placeholder="Full name" />
                <ErrorMessage name="name" component="div" />

                <Field className="Field" type="email" name="email" placeholder="you@xyz.com" />
                <ErrorMessage name="email" component="div" />

                <Field className="Field Field-message" as="textarea" name="message" placeholder="Enter here..." />
                <ErrorMessage name="message" component="div" />

                <button className='defaultButton' type="submit">Envoyer</button>
                {/* Message de confirmation */}
                {isSubmitted && <p className='validatetext'>Votre message a été envoyé avec succès !</p>}
            </Form>
        </Formik>
    )
}

export default ContactForm;
