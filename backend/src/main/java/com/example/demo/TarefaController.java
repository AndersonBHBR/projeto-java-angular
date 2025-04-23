package com.example.demo;

import org.springframework.web.bind.annotation.*;
import java.util.*;

@RestController
@RequestMapping("/api/tarefas")
public class TarefaController {

    private List<Tarefa> tarefas = new ArrayList<>(
        List.of(
            new Tarefa(1, "Estudar Angular"),
            new Tarefa(2, "Criar API Java")
        )
    );

    @GetMapping
    public List<Tarefa> listarTarefas() {
        return tarefas;
    }

    @PostMapping
    public Tarefa adicionarTarefa(@RequestBody Tarefa nova) {
        nova.setId(tarefas.size() + 1);
        tarefas.add(nova);
        return nova;
    }
}