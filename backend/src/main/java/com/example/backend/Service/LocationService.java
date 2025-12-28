package com.example.backend.Service;

import com.example.backend.model.Location;
import com.example.backend.repository.LocationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LocationService {

    @Autowired
    private LocationRepository locationRepository;

    public List<Location> findAll() {
        return locationRepository.findAll();
    }

    public Location save(Location location) {
        return locationRepository.save(location);
    }

    public Location findById(Long id) {
        return locationRepository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException("Location not exist with id :" + id));
    }

    public Location update(Location locationUpdated) {
        return locationRepository.save(locationUpdated);
    }

    public Location delete(Long id) {
        Location location = findById(id);
        locationRepository.delete(location);
        return location;
    }
}
