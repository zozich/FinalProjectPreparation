package ua.com.danit.respository;

import org.springframework.data.jpa.repository.JpaRepository;
import ua.com.danit.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {
}
