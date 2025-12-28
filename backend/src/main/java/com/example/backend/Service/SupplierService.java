package com.example.backend.Service;

import com.example.backend.model.Supplier;
import com.example.backend.repository.SupplierRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SupplierService {

    @Autowired
    private SupplierRepository supplierRepository;

    public List<Supplier> findAll(){
        return supplierRepository.findAll();
    }

    public Supplier save(Supplier supplier){
        return supplierRepository.save(supplier);
    }

    public Supplier findById(Long id){
        return supplierRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Produto not exist with id :" + id));
    }

    public Supplier updateSupplier(Supplier supplierUpdate){
        return supplierRepository.save(supplierUpdate);
    }

    public Supplier deleteSupplier(Long id){
        Supplier supplier = supplierRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Produto not exist with id :" + id));

        supplierRepository.delete(supplier);
        return supplier;
    }
}
