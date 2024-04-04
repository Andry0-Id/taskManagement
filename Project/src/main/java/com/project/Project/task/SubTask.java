package com.project.Project.task;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity(name = "subtask")
public class SubTask {
    
    @Id
    @Column(name = "id_subtask")
    private Long idSubTask;

    @Column(name = "subtask")
    private String subTask;

    @Column(name = "description")
    private String description;

    @Column(name = "achievement")
    private Boolean achievement;

    public SubTask(Long id, String subTask, String description, Boolean achievement) {
        this.id = id;
        this.subTask = subTask;
        this.description = description;
        this.achievement = achievement;
    }

    public SubTask() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getSubTask() {
        return subTask;
    }

    public void setSubTask(String subTask) {
        this.subTask = subTask;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Boolean getAchievement() {
        return achievement;
    }

    public void setAchievement(Boolean achievement) {
        this.achievement = achievement;
    }

}
