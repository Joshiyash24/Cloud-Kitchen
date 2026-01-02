package com.cloudkitchen.backend.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.cloudkitchen.backend.entity.FoodItem;
import com.cloudkitchen.backend.repository.FoodItemRepository;

@Service
public class FoodItemServiceImpl implements FoodItemService {

    private final FoodItemRepository foodItemRepository;

    public FoodItemServiceImpl(FoodItemRepository foodItemRepository) {
        this.foodItemRepository = foodItemRepository;
    }

    @Override
    public FoodItem addFoodItem(FoodItem foodItem) {
        return foodItemRepository.save(foodItem);
    }

    @Override
    public List<FoodItem> getAllFoodItems() {
        return foodItemRepository.findAll();
    }

    @Override
    public FoodItem getFoodById(Long id) {
        return foodItemRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Food item not found"));
    }

    @Override
    public FoodItem updateFoodItem(Long id, FoodItem foodItem) {
        FoodItem existingFood = getFoodById(id);

        existingFood.setName(foodItem.getName());
        existingFood.setDescription(foodItem.getDescription());
        existingFood.setPrice(foodItem.getPrice());
        existingFood.setAvailable(foodItem.getAvailable());

        return foodItemRepository.save(existingFood);
    }

    @Override
    public void deleteFoodItem(Long id) {
        foodItemRepository.deleteById(id);
    }
}