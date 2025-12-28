package com.example.backend.repository;

import com.example.backend.model.ProductLocationStock;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductLocationStockRepository extends JpaRepository<ProductLocationStock, Long> {
}
