package com.example.backend.Service;

import com.example.backend.model.Location;
import com.example.backend.model.Product;
import com.example.backend.model.ProductLocationStock;
import com.example.backend.repository.LocationRepository;
import com.example.backend.repository.ProductLocationStockRepository;
import com.example.backend.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductLocationStockService {

    @Autowired
    private ProductLocationStockRepository productLocationStockRepository;

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private LocationRepository locationRepository;

    public List<ProductLocationStock> findAll() {
        return productLocationStockRepository.findAll();
    }

    public ProductLocationStock save(Long productId, Long locationId, Double quantity) {

        Product product = productRepository.findById(productId)
                .orElseThrow(() ->
                        new RuntimeException("Product not exist with id :" + productId));

        Location location = locationRepository.findById(locationId)
                .orElseThrow(() ->
                        new RuntimeException("Location not exist with id :" + locationId));

        ProductLocationStock stock = new ProductLocationStock();
        stock.setProduct(product);
        stock.setLocation(location);
        stock.setQuantity(quantity);

        return productLocationStockRepository.save(stock);
    }

    public ProductLocationStock findById(Long id) {
        return productLocationStockRepository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException("Stock not exist with id :" + id));
    }

    public ProductLocationStock delete(Long id) {
        ProductLocationStock stock = findById(id);
        productLocationStockRepository.delete(stock);
        return stock;
    }
}
