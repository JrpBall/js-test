package com.rest.API.repository;

import com.rest.API.model.User;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, String>{

}
