import  { useState} from "react";
import Modal from "./modal";

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [buttonModal,setButtonModal]=useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }
    return (
        <div className="auth-form-container">
            <h2>Register</h2>
            <form className="register-form" onSubmit={handleSubmit}>
                <label htmlFor="name">ФИО</label>
                <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="ФИО" />
                <label htmlFor="email">Е.ПОЧТА</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <main>
                    <button type="Modal" onClick={()=> setButtonModal(true)}>РЕГИСТРАЦИЯ</button>
                </main>
                <Modal trigger ={buttonModal} setTrigger={setButtonModal()}>
                    РЕГИСТРАЦИЯ ПРОШЛА УСПЕШНО!
                </Modal>
            </form>
        </div>
    )
};
export default Register;