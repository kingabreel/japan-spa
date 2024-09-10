package org.proway.student.country_spaback.service;

import org.proway.student.country_spaback.domain.City;
import org.proway.student.country_spaback.domain.dto.CityDto;
import org.proway.student.country_spaback.repository.CityRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class CityService {

    @Autowired
    private CityRepository cityRepository;

    public Page<City> getCities(Integer pageNumber, Integer pageSize){
        Pageable pageable = PageRequest.of(pageNumber, pageSize);

        return cityRepository.findAll(pageable);
    }

    public City addCity(CityDto cityDto) {
        City city = new City();

        BeanUtils.copyProperties(cityDto, city);

        return cityRepository.save(city);
    }
}
