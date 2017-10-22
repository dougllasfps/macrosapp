package org.dougllas.macrosapp.model;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "alimento")
public class Alimento implements Serializable {

    @Id@GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column
    private String descricao;
}
