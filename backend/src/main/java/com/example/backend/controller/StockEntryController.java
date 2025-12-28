package com.example.backend.controller;

import com.example.backend.Service.StockEntryService;
import com.example.backend.model.StockEntry;
import com.example.backend.model.StockEntryItem;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/")
public class StockEntryController {

    @Autowired
    private StockEntryService stockEntryService;

    @GetMapping("/stock-entry")
    public List<StockEntry> getAllStockEntries() {
        return stockEntryService.findAll();
    }

    @PostMapping("/stock-entry/{supplierId}")
    public StockEntry createStockEntry(
            @PathVariable Long supplierId,
            @RequestBody List<StockEntryItem> items) {

        return stockEntryService.saveStockEntry(supplierId, items);
    }

    @PutMapping("/stock-entry/{id}")
    public ResponseEntity<StockEntry> updateStockEntry(
            @PathVariable Long id,
            @RequestBody List<StockEntryItem> items) {

        StockEntry updatedEntry = stockEntryService.updateStockEntry(id, items);
        return ResponseEntity.ok(updatedEntry);
    }

    @GetMapping("/stock-entry/{id}")
    public ResponseEntity<StockEntry> getStockEntryById(@PathVariable Long id) {
        StockEntry stockEntry = stockEntryService.findById(id);
        return ResponseEntity.ok(stockEntry);
    }

    @DeleteMapping("/stock-entry/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteStockEntry(@PathVariable Long id) {
        stockEntryService.delete(id);

        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);

        return ResponseEntity.ok(response);
    }
}
