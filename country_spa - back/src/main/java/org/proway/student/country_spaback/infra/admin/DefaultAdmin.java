package org.proway.student.country_spaback.infra.admin;

import org.proway.student.country_spaback.domain.Role;
import org.proway.student.country_spaback.domain.User;
import org.proway.student.country_spaback.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
public class DefaultAdmin {
    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private UserRepository userRepository;

    @Bean
    CommandLineRunner initAdmin() {
        return args -> {
            String adminEmail = "admin@hospital.com";
            if (userRepository.findByEmail(adminEmail) == null) {
                User admin = new User();
                admin.setName("Admin");
                admin.setEmail(adminEmail);
                admin.setPassword(passwordEncoder.encode("00000"));
                admin.setRole(Role.ADMIN);
                userRepository.save(admin);
                System.out.println("Admin create: " + adminEmail);
            }
        };
    }
}
