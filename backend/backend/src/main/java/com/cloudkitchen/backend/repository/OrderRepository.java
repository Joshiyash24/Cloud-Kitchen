package com.cloudkitchen.backend.repository;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cloudkitchen.backend.entity.Order;

public interface OrderRepository extends JpaRepository<Order, Long> {
    List<Order> findByUserId(String userId);
}
