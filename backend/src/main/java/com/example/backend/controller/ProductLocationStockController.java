package com.example.backend.controller;

import com.example.backend.Service.ProductLocationStockService;
import com.example.backend.model.ProductLocationStock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/")
public class ProductLocationStockController {

    @Autowired
    private ProductLocationStockService productLocationStockService;

    @GetMapping("/product-location-stock")
    public List<ProductLocationStock> getAllStocks() {
        return productLocationStockService.findAll();
    }

    @PostMapping("/product-location-stock")
    public ProductLocationStock createStock(
            @RequestParam Long productId,
            @RequestParam Long locationId,
            @RequestParam Double quantity) {

        return productLocationStockService.save(productId, locationId, quantity);
    }

    @GetMapping("/product-location-stock/{id}")
    public ResponseEntity<ProductLocationStock> getStockById(@PathVariable Long id) {
        ProductLocationStock stock = productLocationStockService.findById(id);
        return ResponseEntity.ok(stock);
    }

    @DeleteMapping("/product-location-stock/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteStock(@PathVariable Long id) {
        productLocationStockService.delete(id);

        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);

        return ResponseEntity.ok(response);
    }
}
