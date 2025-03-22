function TaskShow({ task }) {
    return <div className="tasks">
        <div className="task-show" >
          <h3 className="task-title">Göreviniz</h3>
        <p>{task.title}</p>
            <h3 className="task-title">Yapılacaklar</h3>
        <p>{task.taskDesc}</p>
        <div>
                <button className="task-delete">Sil</button>
                <button className="task-update" >Güncelle</button>
        </div>  
        </div>
        
    </div> ;
}

export default TaskShow;