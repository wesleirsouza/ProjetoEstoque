package com.example.backend.Service;

import com.example.backend.model.Product;
import com.example.backend.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService{

    @Autowired
    private ProductRepository productRepository;

    public List<Product> findAll(){
        return productRepository.findAll();
    }

    public Product save(Product product){
        return productRepository.save(product);
    }

    public Product findById(Long id){
        return productRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Produto not exist with id :" + id));
    }

    public Product updateProduct(Product productUpdate){
        return productRepository.save(productUpdate);
    }

    public Product deleteProduct(Long id){
        Product product = productRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Produto not exist with id :" + id));

        productRepository.delete(product);
        return product;
    }
}
