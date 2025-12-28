package com.example.backend.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "product_location_stock")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ProductLocationStock {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "productLocationStockId")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "productId", nullable = false)
    private Product product;

    @ManyToOne
    @JoinColumn(name = "locationId", nullable = false)
    private Location location;

    @Column(name = "quantity", nullable = false)
    private Double quantity;
}
