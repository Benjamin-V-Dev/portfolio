import React from 'react';
import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';
import styles from '../ContactForm/ContactForm.module.css';


const ContactForm = () => {
    const [isSubmitted, setIsSubmitted] = useState(false); // État pour gérer la confirmation

    // États initiaux étendus pour inclure RGPD
    const initialValues = {
        name: '',
        email: '',
        message: '',
        rgpd: false, // Ajout de l'état initial pour RGPD
    };

    // Étendre la fonction de validation pour inclure les nouveaux champs
    const validate = values => {
        const errors = {};
        if (!values.name) {
            errors.name = 'Nom et prénom requis';
        }
        if (!values.email) {
            errors.email = 'Email requis';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = 'Adresse email invalide';
        }
        if (!values.message) {
            errors.message = 'Message requis';
        }
        if (!values.rgpd) {
            errors.rgpd = 'Vous devez accepter la politique de confidentialité pour continuer.';
        }
        return errors;
    };
    
    // Fonction appelée lors de la soumission du formulaire
    const onSubmit = (values, { setSubmitting, resetForm }) => {
        
        // Envoi des données du formulaire via Axios
        axios.post('https://portfolio.benjamin-vallon.fr/api/send', values)
        .then(response => {
            console.log('Message envoyé', response); // Traitement en cas de succès
            setIsSubmitted(true); // Mise à jour de l'état isSubmitted
            resetForm(); // Réinitialisation du formulaire
        })
        .catch(error => {
            console.error('Erreur d\'envoi', error); // Traitement en cas d'erreur
        })
        .finally(() => {
            setSubmitting(false); // Mise à jour de l'état de soumission dans tous les cas
        });
    };

    return (
      <main>
        <section>
          <Formik initialValues={initialValues} validate={validate} onSubmit={onSubmit}>
              <Form>
                  <Field className="Field" type="text" name="name" placeholder="Nom et prénom" />
                  <ErrorMessage name="name" component="div" />

                  <Field className="Field" type="email" name="email" placeholder="Adresse email" />
                  <ErrorMessage name="email" component="div" />

                  <Field className="Field Field-message" as="textarea" name="message" placeholder="Votre message" />
                  <ErrorMessage name="message" component="div" />

                  <div>
                      <Field type="checkbox" name="rgpd" />
                      <label htmlFor="rgpd">J'accepte la <a href="/CGU" className={styles.cgu}>politique de traitement des données personnelles.</a></label>
                  </div>
                  <p>Monsieur Benjamin Vallon traite les données recueillies pour répondre à vos demandes. Pour en savoir plus sur la gestion de vos données personnelles et pour exercer vos droits, reportez-vous à notre <a href="/CGU" className={styles.cgu}>politique de confidentialité.</a></p>
                  <ErrorMessage name="rgpd" component="div" />

                  <button className='defaultButton' type="submit">Envoyer</button>
                  {isSubmitted && <p className='validatetext'>Votre message a été envoyé avec succès !</p>}
              </Form>
          </Formik>
        </section>
      </main>
    );
}

export default ContactForm;
