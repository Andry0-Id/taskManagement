package com.project.Project.task;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity(name = "task")
public class Task {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_task")
    private Integer idTask;

    @Column(name = "task")
    private String task;

    @Column(name = "achievements")
    private boolean achievements;

    public Task(Integer idTask, String task, boolean achievements) {
        this.idTask = idTask;
        this.task = task;
        this.achievements = achievements;
    }

    public Task() {
    }

    public Integer getIdTask() {
        return idTask;
    }

    public void setIdTask(Integer idTask) {
        this.idTask = idTask;
    }

    public String getTask() {
        return task;
    }

    public void setTask(String task) {
        this.task = task;
    }

    public boolean isAchievements() {
        return achievements;
    }

    public void setAchievements(boolean achievements) {
        this.achievements = achievements;
    }

}
