package ua.com.danit.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import ua.com.danit.entity.User;
import ua.com.danit.service.UserService;

@RestController
@RequestMapping("api/users")
@Slf4j
public class UserController {
    private UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

//    @GetMapping("current")
//    public User getCurrentUser() {
//        log.info("Method get current user");
//
//        return new User(1L, "Andrew", "Koziulia", "12345");
//    }

    @PostMapping("new")
    public User createNewUser(@RequestBody User user) {
        return userService.createNewUser(user);
    }

    @GetMapping("{user_id}")
    public User getUserById(@PathVariable("user_id") Long userId) {
        return userService.getUserById(userId);
    }
}
