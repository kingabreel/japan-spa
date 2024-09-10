package org.proway.student.country_spaback.domain;

public enum Role {
    ADMIN("admin"),
    USER("user");

    private String role;

    Role(String role){
        this.role = role;
    }

    public String getRole(){
        return this.role;
    }

}
