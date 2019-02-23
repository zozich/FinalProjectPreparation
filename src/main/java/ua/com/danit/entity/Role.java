package ua.com.danit.entity;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.ManyToMany;
import java.util.List;

@Entity
@Data
public class Role extends BaseEntity {
    private String roleName;

    @ManyToMany
    private List<User> users;
}
