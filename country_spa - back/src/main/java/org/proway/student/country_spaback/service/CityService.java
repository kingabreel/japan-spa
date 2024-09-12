package org.proway.student.country_spaback.service;

import org.proway.student.country_spaback.domain.City;
import org.proway.student.country_spaback.domain.TouristAttractions;
import org.proway.student.country_spaback.domain.dto.CityDto;
import org.proway.student.country_spaback.domain.dto.TouristAttractionsDto;
import org.proway.student.country_spaback.repository.CityRepository;
import org.proway.student.country_spaback.repository.TouristAttractionsRepository;
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
    @Autowired
    private TouristAttractionsRepository touristAttractionsRepository;

    public Page<City> getCities(Integer pageNumber, Integer pageSize){
        Pageable pageable = PageRequest.of(pageNumber, pageSize);

        return cityRepository.findAll(pageable);
    }

    public City addCity(CityDto cityDto) {
        City city = new City();

        BeanUtils.copyProperties(cityDto, city);

        return cityRepository.save(city);
    }

    public TouristAttractions addTouristicAttraction(TouristAttractionsDto touristAttractionsDto) {
        var city = cityRepository.findByName(touristAttractionsDto.cityName());

        if (city.isEmpty()) throw new RuntimeException("City is not registered");

        TouristAttractions touristAttractions = new TouristAttractions();

        BeanUtils.copyProperties(touristAttractionsDto, touristAttractions);

        touristAttractions.setCity(city.get());

        return this.touristAttractionsRepository.save(touristAttractions);
    }
}
