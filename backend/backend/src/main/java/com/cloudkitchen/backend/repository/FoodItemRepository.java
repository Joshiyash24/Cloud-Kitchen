package com.cloudkitchen.backend.repository;

import com.cloudkitchen.backend.entity.FoodItem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FoodItemRepository extends JpaRepository<FoodItem, Long> {
}
