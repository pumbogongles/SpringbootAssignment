package org.generation.todolist.controller;

import org.generation.todolist.controller.dto.ListDTO;
import org.generation.todolist.repository.entity.List;
import org.generation.todolist.service.ListService;
import org.hibernate.cache.spi.support.AbstractReadWriteAccess;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;

@RestController
@RequestMapping("/list")
public class ListController {

    final ListService listService;
    public ListController(@Autowired ListService listService) {
        this.listService = listService;
    }

    @CrossOrigin
    @GetMapping("/all")
    public Iterable<List> getList() {
        return this.listService.all();
    }

    @CrossOrigin
    @PostMapping("/add")
    public void save(@RequestParam(name = "title", required = true) String title,
                     @RequestParam(name = "description", required = true) String description,
                     @RequestParam(name = "targetDate", required = true) LocalDate targetDate) {

        ListDTO listDTO = new ListDTO(title, description, targetDate);
        List list = new List(listDTO);
        listService.save(list);


    }


}
