package com.cloudkitchen.backend.service;

import java.util.List;

import com.cloudkitchen.backend.entity.FoodItem;

public interface FoodItemService {

    FoodItem addFoodItem(FoodItem foodItem);

    List<FoodItem> getAllFoodItems();

    FoodItem getFoodById(Long id);

    FoodItem updateFoodItem(Long id, FoodItem foodItem);

    void deleteFoodItem(Long id);
}
