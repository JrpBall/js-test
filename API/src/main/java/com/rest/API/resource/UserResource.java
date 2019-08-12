package com.rest.API.resource;

import java.util.List;

import com.rest.API.model.User;
import com.rest.API.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value="/rest/user")
public class UserResource {

    @Autowired
    UserRepository userRepository;

    @GetMapping(value = "/all")
    public List<User> getAll(){
        return userRepository.findAll();
    }

    @PostMapping(value = "/load")
    public List<User> persist(@RequestBody final User user) {
        userRepository.save(user);
        return userRepository.findAll();
    }
}