package com.example.backend.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name = "stock_entry")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class StockEntry {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "stockEntryId")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "supplierId", nullable = false)
    private Supplier supplier;

    @Column(name = "entryDate", nullable = false)
    private LocalDateTime entryDate;

    @OneToMany(mappedBy = "stockEntry", cascade = CascadeType.ALL)
    @JsonManagedReference
    private List<StockEntryItem> items;
}
