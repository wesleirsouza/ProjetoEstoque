# Backend – Sistema de Gestão de Estoque

Sistema backend desenvolvido em Spring Boot para controle de produtos, fornecedores, entradas de estoque, localização física e controle de saldo por localização, já preparado para operações futuras de saída de produtos.

---

## Tecnologias Utilizadas

- Java 17+
- Spring Boot
- Spring Data JPA
- Hibernate
- Lombok
- MySQL
- Maven

---

## Arquitetura do Projeto


---

## Entidades

### Product
- id  
- name  
- description  
- category  
- stockInitial  

Relacionamentos:
- Um produto pode estar em várias localizações
- Um produto pode participar de várias entradas de estoque

---

### Supplier
- id  
- name  
- cnpj  

Relacionamentos:
- 1 fornecedor → N entradas de estoque

---

### StockEntry (Entrada de Estoque)
- Produto
- Fornecedor
- Quantidade
- Data de entrada

Relacionamentos:
- N para 1 com Product  
- N para 1 com Supplier  

---

### Location (Localização)
- id  
- name  
- description  

Representa a localização física do estoque (depósito, prateleira, loja).

---

### ProductLocationStock (Estoque por Localização)
- id  
- product  
- location  
- quantity  

Responsável pelo controle real de estoque por produto e localização.

---

## Endpoints da API

### Product
| Método | Endpoint |
|------|---------|
| GET | /api/product |
| POST | /api/product |
| GET | /api/product/{id} |
| PUT | /api/product |
| DELETE | /api/product/{id} |

---

### Supplier
| Método | Endpoint |
|------|---------|
| GET | /api/supplier |
| POST | /api/supplier |
| GET | /api/supplier/{id} |
| PUT | /api/supplier |
| DELETE | /api/supplier/{id} |

---

### StockEntry (Entrada de Estoque)
| Método | Endpoint | Descrição |
|------|---------|----------|
| GET | /api/stock-entry | Lista todas as entradas |
| POST | /api/stock-entry | Registra nova entrada |
| GET | /api/stock-entry/{id} | Busca entrada por ID |
| DELETE | /api/stock-entry/{id} | Remove entrada |

---

### Location
| Método | Endpoint |
|------|---------|
| GET | /api/location |
| POST | /api/location |
| GET | /api/location/{id} |
| PUT | /api/location |
| DELETE | /api/location/{id} |

---

### ProductLocationStock
| Método | Endpoint |
|------|---------|
| GET | /api/product-location-stock |
| POST | /api/product-location-stock |
| GET | /api/product-location-stock/{id} |
| DELETE | /api/product-location-stock/{id} |

---
