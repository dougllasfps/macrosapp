package org.dougllas.macrosapp.controller;

import org.dougllas.macrosapp.model.Usuario;
import org.dougllas.macrosapp.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.Serializable;
import java.util.List;

@RestController
@RequestMapping("/usuarios")
public class UsuarioController implements Serializable {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @RequestMapping
    @ResponseBody
    public List<Usuario> findAll(){
        return usuarioRepository.findAll();
    }

    @RequestMapping(method = RequestMethod.POST)
    @ResponseBody
    public ResponseEntity<Usuario> findUsuario(@RequestBody Usuario requestUsuario){
        Usuario usuario = usuarioRepository.findByLoginAndSenha(requestUsuario.getLogin(), requestUsuario.getSenha());
        return new ResponseEntity<Usuario>(usuario, usuario == null ? HttpStatus.NOT_FOUND : HttpStatus.OK);
    }
}