package com.cloudkitchen.backend.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.cloudkitchen.backend.entity.Order;
import com.cloudkitchen.backend.repository.OrderRepository;

@Service
public class OrderService {
    private final OrderRepository orderRepository;

    public OrderService(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    public List<Order> getAllOrders() {
        return orderRepository.findAll();
    }
}
