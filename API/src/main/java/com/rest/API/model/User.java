package com.rest.API.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class User{

    @Id
    @GeneratedValue
    @Column(name="username")
    private String username;
    @Column(name="password")
    private String password;
    @Column(name="nickname")
    private String nickname;
    @Column(name="email")
    private String email;

    public User(){
        super();
    }

    public User(String username, String password, String nickname, String email){
        super();
        this.username=username;
        this.password=password;
        this.nickname=nickname;
        this.email=email;
    }

    public String getusername(){
        return username;
    }

    public void setusername(String username){
        this.username=username;
    }

    public String getpassword(){
        return password;
    }

    public void setpassword(String password){
        this.password=password;
    }
    public String getnickname(){
        return nickname;
    }

    public void setnickname(String nickname){
        this.nickname=nickname;
    }
    public String getemail(){
        return email;
    }

    public void setemail(String email){
        this.email=email;
    }

}