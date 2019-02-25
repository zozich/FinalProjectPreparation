package ua.com.danit.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "zozich_users")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class User extends BaseEntity {
    @Column(name = "user_name")
    private String name;
    private String surname;
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private String password;

//    @OneToMany(mappedBy = "owner")
    @OneToMany
    @JoinColumn(name = "owner_id")
    private List<Photo> photos;

    @ManyToMany
    @JoinTable(name = "user_roles",
    joinColumns = {@JoinColumn(name = "user_id")},
    inverseJoinColumns = {@JoinColumn(name = "role_id")})
    private List<Role> roles;

    @JsonSerialize
    public String initials() {
        return (name.substring(0, 1) + surname.substring(0, 1)).toUpperCase();
    }
}
