package org.proway.student.country_spaback.domain.dto;

import org.proway.student.country_spaback.domain.Role;

public record RegisterDto(String name, String email, String password, Role role){}