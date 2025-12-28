package com.example.backend.repository;

import com.example.backend.model.StockEntryItem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StockEntryItemRepository extends JpaRepository<StockEntryItem, Long> {
}
