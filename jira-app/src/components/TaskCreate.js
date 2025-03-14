import { useState } from "react";

function TaskCreate({onCreate}) {
    const [title, setTitle] = useState('');
    const [taskDesc, setTaskDesc] = useState('');

    const handleChange = (event) => {
        setTitle(event.target.value);
    }

    const handleTaskChange = (event) => {
        setTaskDesc(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        onCreate(title, taskDesc);
        setTitle('');
        setTaskDesc('');
    }

    return <div className="task-create">
        <h3>Lütfen task ekleyiniz!</h3>
        <form className="forms">
            <label className="task-baslik">Başlık</label>
            <input value={title} onChange={handleChange} className="box" />
            <label className="task-baslik">Task Giriniz</label>
            <textarea value={taskDesc} onChange={handleTaskChange} className="box" rows={5} />
            <button className="btn" onClick={handleSubmit}>Oluştur</button>
        </form>
    </div>;
}

export default TaskCreate;