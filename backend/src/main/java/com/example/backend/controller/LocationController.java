package com.example.backend.controller;

import com.example.backend.Service.LocationService;
import com.example.backend.model.Location;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/")
public class LocationController {

    @Autowired
    private LocationService locationService;

    @GetMapping("/location")
    public List<Location> getAllLocations() {
        return locationService.findAll();
    }

    @PostMapping("/location")
    public Location createLocation(@RequestBody Location location) {
        return locationService.save(location);
    }

    @GetMapping("/location/{id}")
    public ResponseEntity<Location> getLocationById(@PathVariable Long id) {
        Location location = locationService.findById(id);
        return ResponseEntity.ok(location);
    }

    @PutMapping("/location")
    public ResponseEntity<Location> updateLocation(@RequestBody Location locationUpdated) {
        Location location = locationService.update(locationUpdated);
        return ResponseEntity.ok(location);
    }

    @DeleteMapping("/location/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteLocation(@PathVariable Long id) {
        locationService.delete(id);

        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);

        return ResponseEntity.ok(response);
    }
}
