package ua.com.danit.respository;

import org.springframework.data.jpa.repository.JpaRepository;
import ua.com.danit.entity.Photo;

public interface PhotoRepository extends JpaRepository<Photo, Long> {
}
