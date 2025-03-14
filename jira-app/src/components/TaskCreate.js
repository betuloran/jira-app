import {useState } from "react";

function TaskCreate() {
    const [title, setTitle] = useState('false');

    const handleChange = () => {

    }

    return <div className="task-create">
        <h3>Lütfen task ekleyiniz!</h3>
        <form className="forms">
            <label className="task-baslik">Başlık</label>
            <input value={title} onChange={handleChange} className="box"/>
            <label className="task-baslik">Task Giriniz</label>
            <textarea className="box" rows={5} />
            <button className="btn">Oluştur</button>
        </form>
    </div> ;
}

export default TaskCreate;