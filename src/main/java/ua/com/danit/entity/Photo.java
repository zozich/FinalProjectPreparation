package ua.com.danit.entity;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@Entity
@Table(name = "zozich_photos")
@NoArgsConstructor
public class Photo extends BaseEntity {
    private String url;

//    @ManyToOne
//    private User owner;
}
