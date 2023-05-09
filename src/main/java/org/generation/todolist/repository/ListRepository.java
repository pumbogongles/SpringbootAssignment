package org.generation.todolist.repository;

import org.generation.todolist.repository.entity.List;
import org.springframework.data.repository.CrudRepository;

public interface ListRepository extends CrudRepository<List, Integer> {


}
