import React, { useState } from 'react';
import TimerForm from './TimerForm'; 
import Timer from './Timer';
export default function EditableTimer({ id, title,project, elapsed, isRunning}){
    const [editFormOpen, setEditFormOpen] = useState(false)
    if (editFormOpen) {
        return <TimerForm id={id} title={title} project={project} 
        openEditForm={() => setEditFormOpen(true)}
            closeEditForm={() =>setEditFormOpen(false)}
        />;
    }
    return ( <Timer
            id={id}
            title={title}
            project={project}
            elapsed={elapsed}
            isRunning={isRunning}
            openEditForm={() => setEditFormOpen(true)}
            closeEditForm={() =>setEditFormOpen(false)}
            />
    );
}