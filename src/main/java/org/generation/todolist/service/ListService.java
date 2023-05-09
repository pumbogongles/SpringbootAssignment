package org.generation.todolist.service;

import org.generation.todolist.repository.entity.List;

import java.util.ArrayList;

public interface ListService {
    List save (List list);

    ArrayList<List> all();
}
