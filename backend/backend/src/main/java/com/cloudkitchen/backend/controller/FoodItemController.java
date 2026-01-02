package com.cloudkitchen.backend.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cloudkitchen.backend.entity.FoodItem;
import com.cloudkitchen.backend.service.FoodItemService;

@RestController
@RequestMapping("/api/food")
@CrossOrigin(origins = "http://localhost:3000")
public class FoodItemController {

    private final FoodItemService foodItemService;

    // Constructor Injection (BEST PRACTICE)
    public FoodItemController(FoodItemService foodItemService) {
        this.foodItemService = foodItemService;
    }

    // ================= CREATE =================
    @PostMapping
    public FoodItem addFoodItem(@RequestBody FoodItem foodItem) {
        return foodItemService.addFoodItem(foodItem);
    }

    // ================= READ ALL =================
    @GetMapping
    public List<FoodItem> getAllFoodItems() {
        return foodItemService.getAllFoodItems();
    }

    // ================= READ BY ID =================
    @GetMapping("/{id}")
    public FoodItem getFoodById(@PathVariable Long id) {
        return foodItemService.getFoodById(id);
    }

    // ================= UPDATE =================
    @PutMapping("/{id}")
    public FoodItem updateFoodItem(
            @PathVariable Long id,
            @RequestBody FoodItem foodItem) {

        return foodItemService.updateFoodItem(id, foodItem);
    }

    // ================= DELETE =================
    @DeleteMapping("/{id}")
    public void deleteFoodItem(@PathVariable Long id) {
        foodItemService.deleteFoodItem(id);
    }
}
