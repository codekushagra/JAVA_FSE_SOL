package com.cognizant.spring_learn.jwt.controller;

import com.cognizant.spring_learn.jwt.util.JwtUtil;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Base64;
import java.util.HashMap;
import java.util.Map;

@RestController
public class AuthController {

    @Autowired
    private JwtUtil jwtUtil;

    @GetMapping("/authenticate")
    public Map<String, String> authenticate(HttpServletRequest request) {
        String authHeader = request.getHeader("Authorization"); // Basic base64(user:pwd)

        if (authHeader != null && authHeader.startsWith("Basic ")) {
            String base64Creds = authHeader.substring("Basic ".length());
            byte[] decoded = Base64.getDecoder().decode(base64Creds);
            String[] creds = new String(decoded).split(":", 2);
            String username = creds[0];
            String password = creds[1];

            if ("user".equals(username) && "pwd".equals(password)) {
                // ✅ Call instance method
                String token = jwtUtil.generateToken(username);

                Map<String, String> map = new HashMap<>();
                map.put("token", token);
                return map;
            }
        }


        throw new RuntimeException("Invalid credentials");
    }
}
