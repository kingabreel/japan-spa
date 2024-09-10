package org.proway.student.country_spaback.controller;

import jakarta.validation.Valid;
import org.proway.student.country_spaback.domain.Role;
import org.proway.student.country_spaback.domain.User;
import org.proway.student.country_spaback.domain.dto.LoginDto;
import org.proway.student.country_spaback.domain.dto.RegisterDto;
import org.proway.student.country_spaback.domain.response.LoginResponse;
import org.proway.student.country_spaback.infra.security.TokenService;
import org.proway.student.country_spaback.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/auth")
public class AuthController {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private TokenService tokenService;

    @PostMapping("/login")
    public ResponseEntity login(@RequestBody @Valid LoginDto data){
        var usernamePassword = new UsernamePasswordAuthenticationToken(data.email(), data.password());

        var auth = this.authenticationManager.authenticate(usernamePassword);

        var token = tokenService.gerenateToken((User) auth.getPrincipal());

        return ResponseEntity.ok(new LoginResponse(token));
    }

    @PostMapping("/register")
    public ResponseEntity register(@RequestBody @Valid RegisterDto data){
        if(this.userRepository.findByEmail(data.email()) != null) return ResponseEntity.badRequest().build();

        String encPass = new BCryptPasswordEncoder().encode(data.password());

        this.userRepository.save(new User(data.name(), data.email(), encPass, Role.USER));

        return ResponseEntity.ok().build();
    }

}
