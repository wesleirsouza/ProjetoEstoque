package com.example.backend.Service;

import com.example.backend.model.*;
import com.example.backend.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class StockEntryService {

    @Autowired
    private StockEntryRepository stockEntryRepository;

    @Autowired
    private StockEntryItemRepository stockEntryItemRepository;

    @Autowired
    private SupplierRepository supplierRepository;

    @Autowired
    private ProductRepository productRepository;

    @Transactional
    public StockEntry saveStockEntry(Long supplierId, List<StockEntryItem> items) {

        Supplier supplier = supplierRepository.findById(supplierId)
                .orElseThrow(() -> new RuntimeException(
                        "Supplier not exist with id :" + supplierId));

        StockEntry stockEntry = new StockEntry();
        stockEntry.setSupplier(supplier);
        stockEntry.setEntryDate(LocalDateTime.now());

        items.forEach(item -> {
            Product product = productRepository.findById(item.getProduct().getId())
                    .orElseThrow(() -> new RuntimeException(
                            "Product not exist with id :" + item.getProduct().getId()));

            item.setProduct(product);
            item.setStockEntry(stockEntry);
        });

        stockEntry.setItems(items);

        return stockEntryRepository.save(stockEntry);
    }

    public StockEntry updateStockEntry(Long id, List<StockEntryItem> items) {

        StockEntry stockEntry = stockEntryRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("StockEntry not found with id: " + id));

        // Remove itens antigos
        stockEntryItemRepository.deleteAll(stockEntry.getItems());

        // Associa novos itens à entrada
        for (StockEntryItem item : items) {
            item.setStockEntry(stockEntry);
        }

        stockEntry.setItems(items);

        return stockEntryRepository.save(stockEntry);
    }

    public List<StockEntry> findAll() {
        return stockEntryRepository.findAll();
    }

    public StockEntry findById(Long id) {
        return stockEntryRepository.findById(id)
                .orElseThrow(() -> new RuntimeException(
                        "StockEntry not exist with id :" + id));
    }

    public void delete(Long id) {
        StockEntry stockEntry = stockEntryRepository.findById(id)
                .orElseThrow(() -> new RuntimeException(
                        "StockEntry not exist with id :" + id));

        stockEntryRepository.delete(stockEntry);
    }
}
