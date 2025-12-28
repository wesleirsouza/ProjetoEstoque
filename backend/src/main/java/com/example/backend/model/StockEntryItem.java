package com.example.backend.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "stock_entry_item")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class StockEntryItem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "stockEntryItemId")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "stockEntryId", nullable = false)
    @JsonBackReference
    private StockEntry stockEntry;

    @ManyToOne
    @JoinColumn(name = "productId", nullable = false)
    private Product product;

    @Column(name = "quantity", nullable = false)
    private Double quantity;

    @Column(name = "unitPrice")
    private Double unitPrice;
}
