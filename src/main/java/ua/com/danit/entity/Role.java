package ua.com.danit.entity;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.ManyToMany;
import javax.persistence.Table;
import java.util.List;

@Entity
@Data
@Table(name = "zozich_roles")
public class Role extends BaseEntity {
    private String roleName;

    @ManyToMany
    private List<User> users;
}
