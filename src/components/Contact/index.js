import React from 'react';

// import { validateEmail } from '../../utils/helper';

function Contact() {
    return (
        <div className="contactMe">
            <h1 className="titleFonts">Contact Me!</h1>
            <p className="paragraphFonts">
                Feel free to reach out to me by selecting any of the icons! My github and LinkedIn are linked to their respective icons or if you would like to email me you can select the envelope icon to directly send me an email!
            </p>
        </div>
    );
}

// function Contact() {
//     const [ formState, setFormState] =useState(
//         { 
//             name: '',
//             email: '',
//             message: ''
//         });

//         const [errorMessage, setErrorMessage] = useState('');
//         const { name, email, message } = formState;

//         const handleSubmit = (e) => {
//             e.preventDefault();
//             if (!errorMessage) {
//                 setFormState({ [e.target.name]: e.target.value });
//                 console.log('Form', formState);
//             }
//         };

//         const handleChange = (e) => {
//             if (e.target.name === 'email') {
//                 const isValid = validateEmail(e.target.value);
//                 if (!isValid) {
//                     setErrorMessage('Your eamil is invalid');
//                 } else {
//                     setErrorMessage('');
//                 }
//             } else {
//                 if (!e.target.value.length) {
//                     setErrorMessage(`${e.target.name} is required.`);
//                 } else {
//                     setErrorMessage('');
//                 }
//             }
//         };

//         return(
//             <section>
//                 <h1 data-testid="h1tag">Contact Me</h1>
//                 <form id="contact-form" onSubmit={handleSubmit}>
//                     <div>
//                         <label htmlFor="name">Name:</label>
//                         <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
//                     </div>
//                     <div>
//                         <label htmlFor="email">Email address:</label>
//                         <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
//                     </div>
//                     <div>
//                         <label htmlFor="message">Message:</label>
//                         <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} />
//                     </div>
//                     {errorMessage && (
//                         <div>
//                             <p className="error-text">{errorMessage}</p>
//                         </div>
//                     )}
//                     <button data-testid="button"
//                     type="submit">Submit</button>
//                 </form>
//             </section>
//         );
// }

export default Contact;