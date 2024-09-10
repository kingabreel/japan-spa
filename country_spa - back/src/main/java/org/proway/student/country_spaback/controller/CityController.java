package org.proway.student.country_spaback.controller;

import org.proway.student.country_spaback.domain.City;
import org.proway.student.country_spaback.domain.dto.CityDto;
import org.proway.student.country_spaback.service.CityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/city")
public class CityController {

    @Autowired
    private CityService cityService;

    @GetMapping
    public ResponseEntity<Page<City>> getCities(
            @RequestParam(value = "pageNumber", defaultValue = "0") Integer pageNumber,
            @RequestParam(value = "pageSize", defaultValue = "10") Integer pageSize
            ){

        Page<City> cities = cityService.getCities(pageNumber, pageSize);

        return ResponseEntity.status(HttpStatus.OK).body(cities);
    }

    @PostMapping
    public ResponseEntity<City> addCity(@RequestBody CityDto cityDto){
        return ResponseEntity.status(HttpStatus.CREATED).body(cityService.addCity(cityDto));
    }
}
