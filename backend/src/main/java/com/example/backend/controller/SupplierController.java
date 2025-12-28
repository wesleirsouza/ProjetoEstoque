package com.example.backend.controller;

import com.example.backend.Service.SupplierService;
import com.example.backend.model.Supplier;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/")
public class SupplierController {
    @Autowired
    private SupplierService supplierService;

    @GetMapping("/supplier")
    public List<Supplier> getAllSupplier(){
        return supplierService.findAll();
    }

    @PostMapping("/supplier")
    public Supplier createSupplier(@RequestBody Supplier supplier) {
        return supplierService.save(supplier);
    }

    @GetMapping("/supplier/{id}")
    public ResponseEntity<Supplier> getSupplierById(@PathVariable Long id) {
        Supplier supplier = supplierService.findById(id);
        return ResponseEntity.ok(supplier);
    }

    @PutMapping("/supplier")
    public ResponseEntity<Supplier> updateSupplier(@RequestBody Supplier supplierUpdated){
        Supplier supplier = supplierService.updateSupplier(supplierUpdated);
        return ResponseEntity.ok(supplier);
    }

    @DeleteMapping("/supplier/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteSupplier(@PathVariable Long id){
        supplierService.deleteSupplier(id);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}
