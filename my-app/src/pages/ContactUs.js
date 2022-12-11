import '../index.css'
import '../styles/ContactUs.css'

const ContactUs = () => {
    return (
        <div className='container'>
            <h1 className='CU-title'>Contact Us</h1>
            <form className='CU-form'>
                <label className='CU-label'>
                    Name
                    <input type='text' name="name" className='CU-input'/>
                </label>
                <label className='CU-label'>
                    Email
                    <input type='text' name="email" className='CU-input'/>
                </label>
                <label className='CU-label'>
                    Message
                    <textarea type='text' name="message" className='CU-textarea'/>
                </label>
                <input type="submit" value="Submit" className='CU-submit'/>
            </form>
        </div>
    );
}
 
export default ContactUs;