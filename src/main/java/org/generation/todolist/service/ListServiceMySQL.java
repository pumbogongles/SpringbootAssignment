package org.generation.todolist.service;

import org.generation.todolist.repository.entity.List;
import org.generation.todolist.repository.ListRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class ListServiceMySQL implements ListService {

    private final ListRepository listRepository;

    public ListServiceMySQL(@Autowired ListRepository listRepository) {
        this.listRepository = listRepository;
    }

    @Override
    public List save(List list) {
        return this.listRepository.save(list);
    }

    @Override
    public ArrayList<List> all() {
        ArrayList<List> result = new ArrayList<>();
        this.listRepository.findAll().forEach(result:: add);
        return result;
    }


}
