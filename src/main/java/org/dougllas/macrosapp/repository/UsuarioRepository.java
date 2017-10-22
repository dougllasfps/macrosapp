package org.dougllas.macrosapp.repository;

import org.dougllas.macrosapp.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UsuarioRepository extends JpaRepository<Usuario,Integer>{

    Usuario findByLoginAndSenha(String login, String senha);
}
