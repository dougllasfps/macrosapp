package org.dougllas.macrosapp;

import org.dougllas.macrosapp.model.Usuario;
import org.dougllas.macrosapp.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class BeforeStart implements CommandLineRunner{

    @Autowired
    private UsuarioRepository usuarioRepository;

    public void run(String... strings) throws Exception {
        addUsers();
    }

    private void addUsers(){
        Usuario u = new Usuario();
        u.setNome("DOUGLLAS");
        u.setLogin("DOUGLLAS");
        u.setSenha("DOUGLLAS");
        u.setAtivo(true);
        usuarioRepository.save(u);
    }
}
