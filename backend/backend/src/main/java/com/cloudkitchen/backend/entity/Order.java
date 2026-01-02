package com.cloudkitchen.backend.entity;

import java.time.LocalDateTime;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "orders")
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String userId; // ID of the user who placed the order
    private String customerName;
    private String items; // could be JSON or comma-separated
    private double totalPrice;
    private LocalDateTime orderTime;
    private String status; // e.g., "PLACED", "DELIVERED"

    // ✅ Default constructor
    public Order() {}

    // ✅ Constructor with all fields (optional)
    public Order(String userId, String customerName, String items, double totalPrice, LocalDateTime orderTime, String status) {
        this.userId = userId;
        this.customerName = customerName;
        this.items = items;
        this.totalPrice = totalPrice;
        this.orderTime = orderTime;
        this.status = status;
    }

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId; // ⚡ use this.userId to fix "assignment to itself"
    }

    public String getCustomerName() {
        return customerName;
    }

    public void setCustomerName(String customerName) {
        this.customerName = customerName;
    }

    public String getItems() {
        return items;
    }

    public void setItems(String items) {
        this.items = items;
    }

    public double getTotalPrice() {
        return totalPrice;
    }

    public void setTotalPrice(double totalPrice) {
        this.totalPrice = totalPrice;
    }

    public LocalDateTime getOrderTime() {
        return orderTime;
    }

    public void setOrderTime(LocalDateTime orderTime) {
        this.orderTime = orderTime;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
